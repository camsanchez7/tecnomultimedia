//funciones propias con param QUE RETORNAN VALOR
boolean dentroDelCirculo (int x, int y, int r) { //mouse dentro del circulo, me devuelve la distancia entre los dos puntos
  return dist (mouseX, mouseY, x, y) <= r;
}
float mapeoDelColor ( int x2, int y2, int min, int max ) {
  float d = dist( mouseX, mouseY, x2, y2 );  
  float m = map( d, 0, 200, min, max );  //transformo/mapeo la escala del color para generar el degrade
  return m;
}

//funcion propia con param que NO retorna valor
//dibujo de cada elipse por cada vuelta del ciclo for. rota cada atualizacion del ellipse

void miEllipse ( float sep, int cant, float ancho, float alto) {
  for (int i = 0; i < cant; i ++ ) {
    push();
    rotate(radians(i*(400/cant))); //cada dibujo de la tira vertical de la funcion se esta rotando hasta dar la vuelta completa
    fill(255);
    noStroke();
    ellipse ( 0, sep*1.7, ancho/1.5, alto/2);
    pop();
  }
}
