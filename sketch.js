//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function mostraBolinha() {
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

//colisão da bolinha com a borda

function verificaColisaoBorda() {
    if(xBolinha + raio > width ||
    xBolinha - raio < 0) {
    velocidadeXBolinha *=-1;
  }
  if(yBolinha + raio > height ||
    yBolinha - raio < 0) {
    velocidadeYBolinha *=-1;
  }
}

//variaveis da minha raquete

  let xRaquete = 5;
  let yRaquete = 150;
  let raqueteComprimento = 10;
  let raqueteAltura = 90;

//variaveis da raquete do oponente

  let xRaqueteOponente = 585;
  let yRaqueteOponente = 150;
  let raqueteComprimentoOponente = 10;
  let raqueteAlturaOponente = 90;
  let velocidadeYOponente;


function mostraRaquete(x,y){
  rect(x, y,raqueteComprimento,raqueteAltura);
}


function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 -50;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}


//variavel chance de errar

let chanceDeErrar = 0;


function calculaChanceDeErrar() {
  if(pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 37){
    chanceDeErrar = 37
    }
  }
}


//variavel colisão da minha raquete

let colidiu = false;

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


function colisaoRaqueteOponente(){
  colidiu = collideRectCircle(xRaqueteOponente, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
  }
}

//variaveis sons do jogo

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos +=1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente +=1;
    ponto.play();
  }
}



function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete(yRaquete);
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente(yRaqueteOponente);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa
  
  
  
}





