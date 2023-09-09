/* TP#4
 ALUMNA: Camila Sánchez. LEGAJO: 82331/7
 Comision 2. Profesor: Matias Lorda Jauregui
 LINK VIDEO: https://youtu.be/PvJrIdvK_34
 */

//VARIABLES GENERALES
//medusas
let cant = 4;
let medusasX = [];
let medusasY = [];
let velX1, velX2, velX3, velX4;
let contador;
let colisiono = [];
let estado = 0;
let tiempoInicial;
let debug = false;
//imagenes y fuentes
let imagen, fondo, fondo2;
let medusas = [];
let fuente1, fuente2;

function setup() {
  createCanvas (800, 600);
  General ();
}

function preload() {
  fondo = loadImage ("assets/fondo.png");
  fondo2 = loadImage ("assets/fondo2.png");
  imagen = loadImage ("assets/red.png");
  for ( let i = 0; i < cant; i++ ) {
    medusas[i] = loadImage("assets/medusa"+i+".png");
  }
  fuente1 = loadFont ('assets/fuente1.ttf');
  fuente2 = loadFont ('assets/fuente2.ttf');
}

function draw() {
  background (100, 135, 250);
  let tiempoActual = millis () - tiempoInicial;

  //-------MENU

  if ( estado == 0 ) {
    image (fondo, 0, 0);
    textAlign (CENTER);
    fill(255);
    textFont(fuente1);
    textSize(48);
    text( "Operación Medusa", width/2, 120);
    textSize(30);
    text ("- Menú -", width/2, 200);
    arregloDeTexto(90, 260, 220, 60, 20 );
    circle( 200, 400, 80);
    fill(255);
    textFont(fuente2);
    text ("INSTRUCCIONES", 200, 300);
    arregloDeTexto(340, 260, 120, 60, 20 );
    circle( width/2, 400, 80);
    fill(255);
    text ("JUGAR", width/2, 300);
    arregloDeTexto (520, 260, 160, 60, 20);
    circle( 600, 400, 80);
    fill(255);
    text ("CRÉDITOS", 600, 300);

    //----- PANTALLA JUEGO
  } else if ( estado == 1 ) {
    imageMode (CORNER);
    image (fondo2, 0, 0);
    textAlign (LEFT);
    arregloDeTexto (10, 10, 120, 30, 15);
    fill(255);
    text( "MEDUSAS: "+ contador, 20, 30 );
    arregloDeTexto (700, 10, 100, 30, 15);
    fill(255);
    text( "TIEMPO: "+ tiempoActual/1000, 710, 30 );
    imageMode (CENTER);
    image (imagen, mouseX, mouseY, 100, 100);
    image (medusas [0], medusasX [0], medusasY [0], 100, 100);
    image (medusas [1], medusasX [1], medusasY [1], 100, 100);
    image (medusas [2], medusasX [2], medusasY [2], 100, 100);
    image (medusas [3], medusasX [3], medusasY [3], 100, 100);
    moverMedusas();
    if (contador == 10) {
      estado = 4; //gana
    } else if ( contador <= 9 && tiempoActual >= 30*1000) {
      estado = 3; //pierde
    }

    //-----PANTALLA INSTRUCCIONES
  } else if ( estado == 2 ) {
    imageMode (CORNER);
    image (fondo, 0, 0);
    textFont (fuente1);
    fill( 255 );
    textAlign (CENTER);
    textSize(40);
    text("Instrucciones", width/2, 70);
    textAlign (LEFT);
    textFont(fuente2);
    arregloDeTexto (35, 100, 170, 50, 25);
    fill(255);
    text( "OBJETIVO:", 50, 135);
    text("El pescador Jin llegó justo a tiempo!! \nTiene solo 30 segundos para recolectar las 10\n medusas que le encargaron antes que la marea\n las arrastre.", 230, 130);
    arregloDeTexto (35, 250, 150, 80, 25);
    fill(255);
    text( "CÓMO \nJUGAR :", 50, 285);
    text ("Utiliza tu mouse para recolectar con la \nred a las medusas. Solo las habrás agarrado \nhaciendo 'doble click'. \nDeberás ser rápido para capturarlas \nsin que se escapen!! ", 230, 280);
    arregloDeTexto (350, 430, 100, 50, 20);
    circle (width/2, 530, 80);
    fill(255);
    text ("MENÚ", 370, 460);


    //------- PANTALLA PERDISTE
  } else if ( estado == 3 ) {
    imageMode (CORNER);
    image (fondo, 0, 0);
    textFont(fuente1);
    textAlign (CENTER);
    textSize (50);
    fill( 255, 0, 0);
    text( "PERDISTE :P", width/2, 180 );
    textAlign (LEFT);
    textFont(fuente2);
    arregloDeTexto (190, 300, 220, 50, 20);
    circle( 300, 400, 80 );
    fill(255);
    text( "VOLVER A JUGAR", 210, 330 );
    arregloDeTexto (480, 300, 150, 50, 20);
    circle( 560, 400, 80);
    fill(255);
    text( "CRÉDITOS", 500, 330 );

    //------- PANTALLA GANASTE
  } else if ( estado == 4 ) {
    imageMode (CORNER);
    image (fondo, 0, 0);
    textSize (70);
    textAlign (CENTER);
    textFont(fuente1);
    fill(255);
    text( "GANASTE !!!", width/2, 160 );
    textAlign (LEFT);
    textFont(fuente2);
    arregloDeTexto (190, 300, 220, 50, 20);
    circle( 300, 400, 80 );
    fill(255);
    text( "VOLVER A JUGAR", 210, 330 );
    arregloDeTexto (480, 300, 150, 50, 20);
    circle( 560, 400, 80);
    fill(255);
    text( "CRÉDITOS", 500, 330 );

    //----- PANTALLA CREDITOS
  } else if ( estado == 5 ) {
    imageMode (CORNER);
    image (fondo, 0, 0);
    textFont (fuente1);
    fill( 255);
    textAlign (CENTER);
    textSize(40);
    text( "CRÉDITOS", width/2, 120  );
    textFont (fuente2);
    textSize (25);
    text ("#TP4: Introducción a p5.js", width/2, 170);
    text ("Tecnogia Multimedia 1. Comision 2.", width/2, 200);
    text ("Facultad de Artes. UNLP", width/2, 230);
    text ("Alumna: Camila Sánchez.", width/2, 260);
    arregloDeTexto (350, 300, 100, 50, 20);
    circle (width/2, 400, 80);
    fill(255);
    text ("MENÚ", width/2, 330);
  }
}

function mousePressed() {
  if ( estado==0 ) { //--- MENU
    if ( dist(width/2, 400, mouseX, mouseY) < 40 ) { //boton jugar
      estado = 1;
      tiempoInicial = millis();
    } else if (estado == 0) {
      if ( dist (200, 400, mouseX, mouseY) < 40) { //boton instrucciones
        estado = 2;
      }
    }
    if (estado == 0) {
      if ( dist (600, 400, mouseX, mouseY) < 40) { //boton créditos
        estado = 5;
      }
    }
  }
  if ( estado == 2 ) { //--- INSTRUCCIONES
    if ( dist (width/2, 530, mouseX, mouseY ) < 40 ) { //boton volver al menu
      estado = 0;
      tiempoInicial = millis();
    }
  }
  if ( estado == 3 ) { //--- PERDISTE
    if ( dist (300, 400, mouseX, mouseY ) < 40 ) {  //boton volver a jugar. reiniciar variables
      contador = 0;
      tiempoInicial = millis();
      estado = 1;
    } else if ( estado == 3) {
      if ( dist ( 560, 400, mouseX, mouseY ) < 40 ) {
        contador = 0;
        estado = 5;
      }
    }
  }
  if ( estado == 4 ) { //--- GANASTE
    if ( dist (300, 400, mouseX, mouseY ) < 40 ) {  //boton volver a jugar. reiniciar variables
      contador = 0;
      estado = 1;
      tiempoInicial = millis();
    } else if ( estado == 4) {
      if ( dist ( 560, 400, mouseX, mouseY ) < 40 ) {
        contador = 0;
        estado = 5;
      }
    }
  }
  if ( estado == 5 ) { //--- CREDITOS
    if ( dist (width/2, 400, mouseX, mouseY ) < 40 ) { //boton volver al menu
      contador = 0;
      estado = 0;
      tiempoInicial = millis();
    }
  }
}
function mouseClicked() {
  condicion (50);
}

function keyPressed() {
  if ( keyCode === ESCAPE) {
    if (estado === 2) {
      estado = 0;
    }
  }
  if ( keyCode === ESCAPE) {
    if (estado === 3) {
      estado = 0;
    }
  }
}
