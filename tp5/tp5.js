/* #TP5. MINI JUEGO ORIENTADO EN OBJETOS
 ALUMNA: CAMILA SANCHEZ. LEGAJO: 82331/7
 PROFESOR: MATIAS LORDA JAUREGUI. COMISION 2.
 
LINK VIDEO: https://youtu.be/G7X6vZiKACI
 */

//---------------declarcion
let objJuego; //clase madre
let imagenes = [];
let fuente;

function setup() {
  createCanvas (600, 600);
  objJuego = new Juego(imagenes, fuente);
}

function preload() {
  for (let i = 0; i < 5; i++ ) {
    imagenes[i] = loadImage ('assets/img'+ i + '.png');
  }
  //carga de fuente
   fuente = loadFont ('assets/fuente1.ttf');
}

function draw() {
  objJuego.dibujar();
  objJuego.actualizar();
}

function mousePressed() {
  objJuego.botones(mousePressed); //
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
