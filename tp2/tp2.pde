/*
Alumna: Camila Sanchez. Legajo 82331/7
 Comision 2. Profesor Matias Jauregui Lorda
LINK VIDEO EXPLICATIVO: https://youtu.be/HfnOXKt4Dx4

 -FALTANTES DE LA ENTREGA ANT: interacción, for anidados, funciones, y video explicativo.
 COMENTARIO: al reevaluar la imagen llegue a darme cuenta que no todas las tiras de elipses salian del centro 
 sino intercaladas, que es por lo que no se logra distinguir la ilusion como en la imagen original. 
 se que una solucion para modificar esto seria agregar un parametro mas en la funcion miEllipse(int x) pero no supe
 como aplicarlo dentro del ciclo for o al llamarlo en los condicionales para que no modifique completamente todo el trabajo. 

*/

//VARIABLES
PImage foto;
int i;
float tam;

void setup () {
  size (800, 400);
  foto = loadImage ("foto2.png");
  frameRate(60);
}

void draw () {
  background (200);
  image (foto, 0, 0, 400, 400);
  fill (mapeoDelColor (600, 200, 0, 255)); //degrade del color del circle
  noStroke();
  circle (600, 200, 400);
  translate (600, 200);

  pushMatrix();
  fill (255);
  for ( int i = 0; i <25; i ++ ) {   //cantidad de repeticiones de ellipses de la funcion por rueda
    for ( float c = 0; c <1; c += 0.25) { 
      float tam = map ( i, 0, 50, 0, 30);
      if ( i <= 0 ) {
        miEllipse ( i* tam/4, 20, tam*1.5, i/4 * tam/4 );
      } else if ( i <= 8) {
        miEllipse ( i* tam/2, 40, tam/2, i/2 * tam/2 );
      } else if ( i == 9) {
        miEllipse ( i* tam/4, 20, c/2, c/2 );
      } else if ( i >= 11) {
        miEllipse ( i* tam/3, 40, tam*1.5, tam/2 );
      }
    }
  }
  popMatrix();
}

void keyPressed () {
  if ( key == 'r') {
    i = 0; 
    tam = 0;
  }
  if ( key == ' ' ) {
    fill (0);
    rectMode( CENTER );
    rect (0, 0, 400, 400);
  }
}
