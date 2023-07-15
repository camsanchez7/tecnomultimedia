
void arregloDelTexto ( int tam ) { // 
  fill ( 0 );
  textAlign ( CENTER );
  textFont ( fuente3 );
  textSize ( tam );
}
void arregloDelTexto2 ( int tam ) { // 
  fill ( 212, 175, 55 );
  textAlign ( CENTER );
  textFont ( fuente1);
  textSize ( tam );
}

void botonSiguiente( String t, float x, float y) {
  fill (255);
  circle ( x, y, 40 );
  fill (0);
  textAlign ( CENTER );
  textSize (20);
  text (t, x, y+5);
}

void cuadroDeTexto (int x, int y, int anc, int alt) {
  fill ( 212, 175, 55, 100 );
  rect ( x, y, anc, alt );
}

boolean dentroDelBoton (int x, int y, int r) {
  return dist (mouseX, mouseY, x, y) <= r ;
}
