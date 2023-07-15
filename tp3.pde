/* TP3. 
 ALUMNA: CAMILA SANCHEZ. LEGAJO 82331/7
 COMISION 2. PROFESOR MATIAS JAUREGUI LORDA.
LINK VIDEO EXPLICATIVO: https://youtu.be/SHAClKnyHtI
COMENTARIO: EL DIAGRAMA DE FLUJO TUVO MODIFICACIONES PARA PODER DEFINIR LA RUTA DE LA HISTORIA.
*/

//------ VARIABLES

int c = 18;
int estado;
String t, t2, t3, t4, t5, t6, t7, t8, t9;
PFont fuente1, fuente2, fuente3;
PImage [] imagenes = new PImage [c];
String [] textos = new String [c];

void setup() {
  size (600, 600);

  //------ DECLARACION DE VARIABLES
  estado = 0;
  fuente1 = loadFont ("ImprintMT-Shadow-60.vlw");
  fuente2 = loadFont ("PalatinoLinotype-BoldItalic-48.vlw");
  fuente3 = loadFont ("BellMTBold-32.vlw");
  t = "El Gran Gatsby";
  t2 = " F. Scott Fitzgerald ";
  t3 = "CRÉDITOS";
  t4 = "COMENZAR";
  t5 = "A";
  t6 = "B";
  t7 = "C";
  t8 = "->";
  t9 = "Tecnología Multimedial 1\n Alumna: Camila Sánchez\n Legajo: 82331/7\n Comisión 2";
  textos = loadStrings ( "texto.txt" );

  //------ CARGA MASIVA DE LAS IMAGENES
  for ( int i = 0; i < c; i++ ) {
    imagenes[i] = loadImage( "imagenes/pag" + i + ".png" );
  }
}

void draw() {

  //-------------------- LOGICA DE ESTADOS

  switch(estado) {

  case 0: // --------- MENÚ
    image ( imagenes [0], 0, 0, 600, 600);
    strokeWeight (1.5);
    fill (212, 175, 55);
    circle (450, 400, 100); // dibujo del boton
    circle (150, 400, 100); // dibujo del boton
    arregloDelTexto2 (60);
    text (t, 300, 250);
    arregloDelTexto2 (24);
    text (t2, 300, 300);
    text ( textos[0], 50, 400, 500, 200 );
    arregloDelTexto (15);
    text ( t3, 150, 405 );
    text ( t4, 450, 405 );
    break;

  case 1: // -------- PAGINA 1. Introduccion de Nick Carraway
    image ( imagenes [1], 0, 0, 600, 600);
    cuadroDeTexto (50, 430, 500, 110);
    arregloDelTexto (15);
    text( textos[1], 75, 450, 450, 150 );
    botonSiguiente ( t5, 150, 550);
    botonSiguiente ( t6, 450, 550);
    break;

  case 2: // -------- PAGINA 2. Conoce a Daisy Buchanan
    image ( imagenes [2], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 430, 500, 110);
    arregloDelTexto (16);
    text( textos[2], 75, 450, 450, 150 );
    botonSiguiente ( t8, 300, 550);
    break;

  case 3: // -------- PAGINA 3. Conoce a Jay Gatsby
    image ( imagenes [3], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 440, 500, 105);
    arregloDelTexto (15);
    text( textos[3], 75, 455, 450, 120 );
    botonSiguiente ( t8, 550, 560);
    break;

  case 4: // -------- PAGINA 4. Noche de la fiesta
    image ( imagenes [4], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 440, 500, 120);
    arregloDelTexto (15);
    text( textos[4], 75, 460, 450, 150 );
    botonSiguiente ( t5, 150, 550);
    botonSiguiente ( t6, 300, 550);
    botonSiguiente ( t7, 450, 550);
    break;

  case 5: // -------- PAGINA 5. Camino de la izquierda
    image ( imagenes [5], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 430, 500, 140);
    arregloDelTexto (15);
    text( textos[5], 75, 440, 450, 150 );
    botonSiguiente ( t5, 210, 570);
    botonSiguiente ( t6, 410, 570);

    break;

  case 6: // -------- PAGINA 6. Camino del centro
    image ( imagenes [6], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 450, 500, 120);
    arregloDelTexto (15);
    text( textos[6], 75, 470, 450, 140 );
    botonSiguiente ( t5, 200, 560);
    botonSiguiente ( t6, 400, 560);
    break;

  case 7: // -------- PAGINA 7. Camino de la derecha
    image ( imagenes [7], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 450, 500, 100);
    arregloDelTexto (16);
    text( textos[7], 75, 470, 450, 130 );
    botonSiguiente ( t8, 550, 560);
    break;

  case 8: // -------- PAGINA 8. Jay es asesinado por Tom. FINAL 1
    image ( imagenes [8], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 430, 500, 130);
    arregloDelTexto (15);
    text( textos[8], 75, 460, 450, 150 );
    botonSiguiente ( t8, 550, 560);
    break;

  case 9: // -------- PAGINA 9. Tom muestra las pruebas de la investigacion sobre Jay
    image ( imagenes [9], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 210, 500, 130);
    arregloDelTexto (16);
    text( textos[9], 75, 230, 450, 110 );
    botonSiguiente ( t5, 150, 340);
    botonSiguiente ( t6, 450, 340);
    break;

  case 10: // -------- PAGINA 10. Distraccion de los invitados
    image ( imagenes [10], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 470, 500, 80);
    arregloDelTexto (16);
    text( textos[10], 75, 490, 450, 90 );
    botonSiguiente ( t8, 300, 550);
    break;

  case 11: // -------- PAGINA 11. Nick como intermediario de la pareja
    image ( imagenes [11], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 40, 500, 140);
    arregloDelTexto (16);
    text( textos[11], 75, 60, 450, 150 );
    botonSiguiente ( t5, 200, 190);
    botonSiguiente ( t6, 400, 190);
    break;

  case 12: // -------- PAGINA 12. Nick se emociona con la idea de ayudar a la pareja. Reencuentro secreto
    image ( imagenes [12], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 150, 500, 120);
    arregloDelTexto (16);
    text( textos[12], 75, 170, 450, 110 );
    botonSiguiente ( t5, 200, 280);
    botonSiguiente ( t6, 400, 280);
    break;

  case 13: // -------- PAGINA 13. Nick queda sorprendido por la confesion y Tom comienza a sospechar
    image ( imagenes [13], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 340, 500, 160);
    arregloDelTexto (15);
    text( textos[13], 75, 360, 450, 150 );
    botonSiguiente ( t8, 300, 500);
    break;

  case 14: // -------- PAGINA 14. Daisy y Jay planean su huida
    image ( imagenes [14], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 420, 500, 110);
    arregloDelTexto (15);
    text( textos[14], 75, 440, 450, 100 );
    botonSiguiente ( t8, 300, 540);
    break;

  case 15: // -------- PAGINA 15. Escapan para comenzar una nueva vida. FINAL 3
    image ( imagenes [15], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 450, 500, 110);
    arregloDelTexto (16);
    text( textos[15], 75, 470, 450, 130 );
    botonSiguiente ( t8, 550, 550);
    break;

  case 16: // -------- PAGINA 16 ----- Jay va preso. FINAL 2
    image ( imagenes [16], 0, 0, 600, 600);
    cuadroDeTexto ( 50, 440, 500, 140);
    arregloDelTexto (16);
    text( textos[16], 75, 460, 450, 150 );
    botonSiguiente ( t8, 550, 560);
    break;

  case 17: // -------- PAGINA 17. CREDITOS
    arregloDelTexto2 (40);
    image ( imagenes [17], 0, 0, 600, 600);
    text ( textos[17], 300, 230 );
    arregloDelTexto (24);
    fill ( 212, 175, 55 );
    text ( t9, 300, 270 );
    break;
  }
}

void mousePressed() {

  if ( estado == 0 && dentroDelBoton ( 450, 400, 50 ) ) {
    estado = 1;
  }
  if ( estado == 0 && dentroDelBoton ( 150, 400, 50 ) ) {
    estado = 17;
  }
  if ( estado == 1 && dentroDelBoton ( 150, 550, 20 ) ) {
    estado = 2;
  }
  if ( estado == 1 && dentroDelBoton ( 450, 550, 20 ) ) {
    estado = 3;
  }
  if ( estado == 2 && dentroDelBoton ( 300, 550, 20 ) ) {
    estado = 11;
  }
  if ( estado == 3 && dentroDelBoton ( 550, 560, 20 ) ) {
    estado = 4;
  }
  if ( estado == 4 && dentroDelBoton ( 150, 550, 20 ) ) {
    estado = 5;
  }
  if ( estado == 4 && dentroDelBoton ( 300, 550, 20 ) ) {
    estado = 6;
  }
  if ( estado == 4 && dentroDelBoton ( 450, 550, 20 ) ) {
    estado = 7;
  }
  if ( estado == 5 && dentroDelBoton ( 210, 570, 20 ) ) {
    estado = 8;
  }
  if ( estado == 5 && dentroDelBoton ( 410, 570, 20 ) ) {
    estado = 9;
  }
  if ( estado == 8 && dentroDelBoton ( 550, 560, 20 ) ) { //---------- FINAL 1
    estado = 17;
  }
  if ( estado == 6 && dentroDelBoton ( 200, 560, 20 ) ) {
    estado = 9;
  }
  if ( estado == 6 && dentroDelBoton ( 400, 560, 20 ) ) { //---------- FINAL 3
    estado = 15;
  }
  if ( estado == 7 && dentroDelBoton ( 550, 560, 20 ) ) {
    estado = 10;
  }
  if ( estado == 10 && dentroDelBoton ( 300, 550, 20 ) ) {
    estado = 15;
  }
  if ( estado == 15 && dentroDelBoton ( 550, 550, 20 ) ) { // -------- FINAL 3
    estado = 17;
  }
  if ( estado == 11 && dentroDelBoton ( 200, 190, 20 ) ) {
    estado = 13;
  }
  if ( estado == 11 && dentroDelBoton ( 400, 190, 20 ) ) {
    estado = 12;
  }
  if ( estado == 12 && dentroDelBoton ( 200, 280, 20 ) ) {
    estado = 7;
  }
  if ( estado == 12 && dentroDelBoton ( 400, 280, 20 ) ) {
    estado = 14;
  }
  if ( estado == 14 && dentroDelBoton ( 300, 540, 20 ) ) {
    estado = 15;
  }
  if ( estado == 9 && dentroDelBoton ( 150, 340, 20 ) ) {
    estado = 16;
  }
  if ( estado == 9 && dentroDelBoton ( 450, 340, 20 ) ) {
    estado = 8;
  }
   if ( estado == 16 && dentroDelBoton ( 550, 560, 20 ) ) { //--------- FINAL 2
    estado = 17;
  }
    if ( estado == 13 && dentroDelBoton ( 300, 500, 20 ) ) { //--------- FINAL 2
    estado = 9;
  }
}

void keyPressed () {
  if ( estado == 17 && key == ' ' ) {
    estado = 0;
  }
}
