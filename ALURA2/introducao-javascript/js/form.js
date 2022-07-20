//Para adicionar paciente:
var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function () {
  //função anonima
  event.preventDefault() //segura o evento padrão do html

  var form = document.querySelector('#form-adiciona')
  //extraindo informações do paciente do fotm
  var paciente = obtemPacienteDoFormulario(form)

  //cria a tr e td do paciente
  var pacienteTr = montaTr(paciente)

  var erros = validaPaciente(paciente)
  console.log(erros);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return
  }

  //abaixo inclui na tabela.
  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)
  //para apagar o form após a inclusão do paciente:
  form.reset()
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
})

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro")
  ul.innerHTML = "" //inner é uma propriedade, recebe novo conteúdo.

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente
}

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')

  var nomeTd = montaTd(paciente.nome, 'info-nome')
  var pesoTd = montaTd(paciente.peso, 'info-peso')
  var alturaTd = montaTd(paciente.altura, 'info-altura')
  var gorduraTd = montaTd(paciente.gordura, 'info-gordura')
  var imcTd = montaTd(paciente.imc, 'info-imc')

  //adc o paciente na tabela
  pacienteTr.appendChild(nomeTd) //para inserir novo paciente.
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)
  /* Para diminuir mais ainda o código, pode substituir por:
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  */
  return pacienteTr
}

function montaTd(dado, classe) {
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function validaPaciente(paciente) {

  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco.")
  }

  if (!validaPeso(paciente.peso)){ 
  erros.push("Peso é inválido.") //pode manter na mesma linha do if.
  }

  if(!validaAltura(paciente.altura)){
  erros.push("Altura é inválida.")
  }

  if(paciente.gordura.length == 0){
    erros.push("A gordura não pode ser em branco.")
  }

  if(paciente.peso.length == 0){
    erros.push("O peso não pode ser em branco.")
  }

  if(paciente.altura.length == 0){
    erros.push("A altura não pode ser em branco.")
  }

  return erros;
}
