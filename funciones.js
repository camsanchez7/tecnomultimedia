function General () {
  contador = 0;
  tiempoInicial = millis();
  colisiono [0] = false;
  colisiono [1] = false;
  colisiono [2] = false;
  colisiono [3] = false;
  velX1 = 0;
  velX2 = 0;
  velX3 = 0;
  velX4 = 0;
}

function moverMedusas() {
  //posiciones en x
  medusasX [0] = velX1;
  medusasX [1] = velX2;
  medusasX [2] = velX3;
  medusasX [3] = velX4;
  //posiciones en y
  medusasY [0] = 100;
  medusasY [1] = 250;
  medusasY [2] = 400;
  medusasY [3] = 550;
  //movimiento de las medusas en X
  if ( estado == 1) {
    velX1+= random (5, 15);
    velX2+= random (3, 10);
    velX3+= random (5, 15);
    velX4+= random (3, 10);
  }
  if ( medusasX[0] >= width ) {
    velX1 = -100;
  }
  if ( medusasX[1] >= width ) {
    velX2 = -100;
  }
  if ( medusasX[2] >= width ) {
    velX3 = -100;
  }
  if ( medusasX[3] >= width ) {
    velX4 = -100;
  }
}
function condicion (r) {
  //medusa1
  if ( dist( medusasX[0], medusasY[0], mouseX, mouseY ) <= r && colisiono[0] == false ) {
    contador++;
    colisiono [0] = true;
  }
  // si ya no estoy colisionando, entonces colisiono debe ser false de nuevo
  if ( dist( medusasX[0], medusasY[0], mouseX, mouseY  ) > r ) {
    colisiono [0] = false;
  }

  //medusa2
  if ( dist( medusasX[1], medusasY[1], mouseX, mouseY ) < 50 && colisiono [1] == false ) {
    contador ++;
    colisiono [1] = true;
  }
  if ( dist( medusasX[1], medusasY[1], mouseX, mouseY  ) > 50 ) {
    colisiono [1] = false;
  }

  //medusa3
  if ( dist( medusasX[2], medusasY[2], mouseX, mouseY ) < 50 && colisiono [2] == false ) {
    contador ++;
    colisiono [2] = true;
  }
  if ( dist( medusasX[2], medusasY[2], mouseX, mouseY  ) > 50 ) {
    colisiono [2] = false;
  }

  //medusa4
  if ( dist( medusasX[3], medusasY[3], mouseX, mouseY ) < 50 && colisiono [3] == false ) {
    contador ++;
    colisiono [3]= true;
  }
  if ( dist( medusasX[3], medusasY[3], mouseX, mouseY  ) > 50 ) {
    colisiono [3] = false;
  }
}

function arregloDeTexto( x, y, anc, alt, tam) {
  fill( 255, 33, 193, 120);
  rect (x, y, anc, alt);
  textSize(tam);
}
