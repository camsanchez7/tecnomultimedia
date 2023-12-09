// ALUMNA CAMILA SANCHEZ. LEGAJO 82331/7
// COMISION 2. PROFESOR MATIAS LORDA JAUREGUI

let avent; // clase madre
let imagenes = [];
let fotosJ = [];
let texto = [];
let fuente1;
let fuente2;
function setup() {
  createCanvas(600, 600);
  avent = new Aventura (imagenes, fotosJ, texto, fuente1, fuente2);
}

function preload() {
  //carga de imagenes de la aventura
  for (let i = 0; i <18; i++ ) {
    imagenes[i] = loadImage ('assets/pag'+ i + '.png');
  }
  //carga de imagenes del juego
   for (let i = 0; i <3; i++ ) {
    fotosJ[i] = loadImage ('assets/img'+ i + '.png');
  }
  //carga de  texto
    texto = loadStrings ('assets/texto.txt');
    
  //carga de fuentes
  fuente1 = loadFont ('assets/fuente1.ttf');
  fuente2 = loadFont ('assets/fuente2.ttf');
}

function draw() {
  background (0);
  avent.dibujar();
  avent.actualizar();
}

function mousePressed() {
  avent.botonSig(mousePressed);
}

function keyPressed() {
  avent.juego.teclaPresionada(keyCode);
}
