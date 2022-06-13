const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
// variaveis
const respostas = [
  "Não",
  "Provavelmente",
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta(){

  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  }

  const pergunta = "<div>"+inputPergunta.value+"</div>"

  // gerar número aleatório
  const totalRespostas=respostas.length
  const numeroAleatorio = Math.floor(Math.random()*totalRespostas)
  elementoResposta.innerHTML = respostas[numeroAleatorio]
  elementoResposta.style.opacity=1;
  
  //sumir resposta depois de 3 segundos = 3000 milisegundos
  setTimeout(function(){
    elementoResposta.style.opacity=0;
  }, 3000)
}
