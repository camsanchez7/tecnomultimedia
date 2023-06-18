/*
Alumna: Camila Sanchez. Legajo 82331/7
Comision 2. Profesor Matias Jauregui Lorda

CHECKLIST
- Al menos 1 función propia con parámetros (al menos 1) que RETORNA un valor// FALTA
- Ciclos FOR anidados. // REPETICION Y TAMAÑO DEL DIBUJO 

*/

//VARIABLES
PImage foto;
int i;
float tam, valor1, valor2;

void setup (){
  size (800,400); // transpasar el centro a (600,400)
  foto = loadImage ("foto2.png");
  valor1 = 0;
  valor2 = 1;
}

void draw (){
  background (175);
  image (foto, 0, 0, 400, 400);
  fill (0);
  circle (600, 200, 400);
  translate (600, 200);
  
  pushMatrix();
  //cantidad de repeticiones de la funcion miEllipse
  for ( int i = 0; i < 13; i ++ ){
    float tam = map ( i, 0, 25, 10, 50);
  miEllipse( 0, 0 , i* tam/2, tam/2, 50 ); }
  
  tam ++;

if ( tam >= 1) {
 rotate ( radians (frameCount*2)); 
 miEllipse(0, 0, i*tam/2, tam/2, 50);
 }

if (i >= 13); {
  i = 0;
}
  popMatrix();
}

void keyPressed () {
if ( key == 'r') {
    i = 0; 
    tam = 0; }
}
