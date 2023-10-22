/* #TP5. MINI JUEGO ORIENTADO EN OBJETOS
ALUMNA: CAMILA SANCHEZ. LEGAJO: 82331/7
PROFESOR: MATIAS LORDA JAUREGUI. COMISION 2.

PD: No está ni cerca de aprobar jaja! Para el recuperatorio va a quedar genial :D
*/

//declarcion
let objJuego; //clase madre

function setup() {
  createCanvas (600, 600);
  objJuego = new Juego();
}

function preload() {
}

function draw() {
  background (125);
  objJuego.dibujar();
  objJuego.actualizar();
}

function mousePressed(){
  objJuego.tiempo(mousePressed);
  objJuego.botones(mousePressed);
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
