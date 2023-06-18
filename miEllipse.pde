//FUNCION PROPIA QUE NO RETORNA UN VALOR
void miEllipse ( int x, int y, float sep, float ancho, int cant) {
  
  for (int i = 0; i < cant ; i ++ ) {
    push();
    translate (x, y);
    rotate(radians(i*(400/cant))); //reubicacion de la figura
    fill(255);
    ellipse ( 0, sep, ancho, ancho/ 4); 
    pop();
 }   
if ( cant <= 5){
  ancho --;}
}
