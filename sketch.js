// fantasia, aventura, drama

// divertida mente, LIVRE, fantasia, aventura
// formiguinhaz, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// a chegada, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// a cabana, 12, drama
// o predestinado , 14, drama



let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
}



function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}


function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O Predestinado";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no Aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "A chegada";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Divertida Mente";
    } else {
      return "O Feitiço do Tempo";
    }
  }
}
