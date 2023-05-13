/* TP #1
Alumna: Camila Sánchez
Legajo: 82331/7
Comision 2. Profesor Matias Jauregui Lorda
*/

PImage logo, foto1, foto2, foto3, foto4, foto5, foto6, foto7;
PFont font1, font2, font3;
String presentacion, presentacion2;
//maquina de estados
int estado;
int tiempo;
// variables para los botones
int x, y, d; 
float distancia, radio;
//variables de animacion
float posX, posX2, posX3;
float posY, posY2, posY3;
float opacidad;

void setup() {
size (640,480);
frameRate (60);

//Declaracion de variables generales
logo = loadImage ("logo1.png");
foto1 = loadImage ("panda3.jpg");
foto2 = loadImage ("panda4.jpg");
foto3 = loadImage ("pandaRojo.jpg");
foto4 = loadImage ("pandaRojo2.jpg");
foto5 = loadImage ("pandaRojo4.png");
foto6 = loadImage ("pngcaras.png");
foto7 = loadImage ("panda1.png");
font1 = loadFont ("SnapITC-Regular-60.vlw");
font2 = loadFont ("Candara-BoldItalic.vlw");
font3 = loadFont ("Candara-BoldItalic-30.vlw");
presentacion = ("PANDA ROJO");
presentacion2 = (" El animal que protagoniza\n la película Red");

//Declaracion de variables del tiempo
estado = 0;
tiempo = millis ();

//Declaracion de variables boton
x = 160;
y = 350;
d = 150;
//Declaracion variables animacion
posX = 0; posX2 = 0; posX3 = 0; 
posY = 0; posY2 = 480; posY3 = 480;
opacidad = 0;
}

void draw() {

distancia = dist (x, y, mouseX, mouseY);
radio = d/2;

//MAQUINA DE ESTADOS

int diferencia = millis () - tiempo;
println( millis() + " - " + tiempo + " = " + diferencia );

if (estado == 0){ //INICIO
  background(255);
  //
    posX = posX + 3; 
    opacidad = opacidad + 3;
  //
  textFont (font1);
  fill (222,67,67);
  textSize (60);
  text (presentacion,posX,90);
  textFont (font2);
  textSize (36);
  textAlign (LEFT);
  text (presentacion2, posX,150);
  image (logo,160,190,600,255);
  //dibujo boton
  noStroke();
  fill (222,67,67, opacidad);
  circle (x, y, d);
  fill (255);
  triangle (140,330,140,370,190,355); }
   if ( posX >= 640) { posX = 640; }
 
  
  if (estado == 1) {
    background (255);
     //
    posX = posX + 3; posX2 = posX2 + 3;
    //
    fill (222,67,67);
    textFont (font3);
    textSize (24);
    textAlign (LEFT);
    text ( "Turning Red es una película de Disney \n estrenada en el año 2022.\n Es un largometraje animado de comedia que \n busca retratar la etapa de la pubertad de forma \n metafórica.",posX,60);
    image (foto1, posX2, height/2, 300,200 ); }
     if ( posX >= 320) { posX = 320; }
     if ( posX2 >= 320) { posX2 = 320; }
   
     if (estado == 1 && diferencia >= 4*1000) {
     estado = 2;
     tiempo = millis();
     posX = 0; posX2 = 0;
     posY = 0;
     opacidad = 0;}
     
     
   else if (estado == 2) {
    background (255);
     //
    posY = posY + 0.5;
    //
    fill (222,67,67);
    textSize (24);
    textAlign(LEFT);
    text ("La transformación repentina de la pequeña en un enorme\n y peludo panda rojo está relacionada con la llegada de la\n menstruación en adolescentes. \n Cambios físicos, emocionales, sociales y sexuales que la\n película ha querido plasmar en forma de panda rojo.",25, posY);
    image (foto2, 180, height/2, 300,200);}
    if ( posY >= 80) {
     posY = 80; }
     
     if (estado == 2 && diferencia >= 5*1000) {
     estado = 3;
     tiempo = millis();
     posX = 0;
     posY = 0;}
   
   
   else if (estado == 3){ 
    background(222,67,67);
    fill (255);
    textFont (font2);
    frameRate (120);
    textSize(frameCount/20);
    textAlign (CENTER);
    text ("Algunas características que\n probablemente no \n conocías del panda rojo… ",320, 150);
    image (foto7, 450, 280, 160, 200); }
        
     if (estado == 3 && diferencia >= 6*1000) {
     estado = 4;
     tiempo = millis();
     posX = 0;
     posY = 0;}
     
     
   else if (estado == 4){
    background(255);
    //
    posX = posX + 3; posX2 = posX2 + 3; posX3 = posX3 + 3;
    posY2 = posY2 - 1.5 ; posY3 = posY3 - 1.5;
    //
    fill (222,67,67);
    textFont (font3);
    textSize(20);
    textAlign (LEFT);
    text ("* Suele ser del tamaño del gato doméstico,\n aunque su cola grande y espesa\n añade 46cm a su cuerpo.",posX, 30);
    textAlign (LEFT);
    text ("* Utiliza su anillada cola como\n manta para arroparse en las frías\n cumbres de las montañas.",posX2,110);
    textAlign (LEFT);
    text ("* Se le ha considerado pariente\n del panda gigante pero también del mapache,\n con quien comparte su cola anillada. ",posX3,190);
    image (foto3,10, posY2, 300,200);
    image (foto4, 330, posY3, 300,200); }
     if ( posX >= 20) {posX = 20; }
     if ( posX2 >= 130) {posX2 = 130; }
     if ( posX3 >= 220) {posX3 = 220; }
     if ( posY2 <= 270) {posY2 = 270; }
     if ( posY3 <= 270) {posY3 = 270; }
     
     if (estado == 4 && diferencia >= 7*1000) {
     estado = 5;
     tiempo = millis();
     posX = 0; posX2 = 0; posX3 = 0;
     posY = 0; posY2 = 0; posY3 = 0;}
     
     
   else if (estado == 5){
    //
    posY = posY + 0.5; posY3 = posY3 + 0.5;
    //
    background(255);
    fill (222,67,67);
    textSize(20);
    textAlign (LEFT);
    text ("Pasa la mayor parte del tiempo en los\n árboles, donde incluso duerme.\n Suele ser más activo por la\n noche. Al atardecer y al amanecer,\n es cuando sale en búsqueda de alimento.", 15, posY );
    text ("A los pandas rojos les encanta el\n bambú, aunque a diferencia de su\n gigante hermano, comen además\n frutas, bellotas, raíces\n y huevos.", 15, posY3 );
    image (foto5, 365, 70, 250,310);}
      if ( posY >= 100) {posY = 100;}
      if ( posY3 <= 10) { posY3 = 10; }
         
    if (estado == 5 && diferencia >= 8*1000) {
     estado = 6;
     tiempo = millis();
     opacidad = 0;
     posX = 0; posX2 = 0; posX3 = 0;
     posY = 0; posY2 = 0; posY3 = 0;}
     
     
   else if (estado == 6){
    background(222,67,67);
    //
    opacidad = opacidad + 2;
    //
    image (foto6, 35, 10);
    noStroke();
    fill (255);
    circle (x+160, y+20, d);
    fill (222,67,67);
    triangle (290,340,360,380,290,400);
}
     if (estado == 6 && diferencia >= 9*1000) {
     estado = 0; }
}

void mousePressed() {
  if( estado == 0) {
     posX = 0; posY = 0; 
    if( dist(x, y, mouseX, mouseY) < 150/2 ){
      estado = 1; 
      tiempo = millis();}}
  
  if ( estado == 6) {
    if( dist(x+160, y+20, mouseX, mouseY) < 150/2 ){
      estado = 0; }}
    
    }
