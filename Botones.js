class botonCircular {
  constructor(textB) {
    this.textoBoton = textB;
  }

  dibujar(textB, x, y, t) {
    if (this.dentroDelBotonCirc(x, y, t/2) ) {
      fill( 252, 171, 48, 120); // boton over
    } else {
      fill ( 212, 175, 55 ); //dorado
    }
    noStroke();
    circle (x, y, t);
    fill (0);
    textAlign ( CENTER );
    textSize (14);
    text (textB, x, y+5);
  }
  
  dentroDelBotonCirc(x, y, t) {
    return dist(x, y, mouseX, mouseY) <= t ;
  }
}
  //-------------------------------------------------------
  class botonCuadrado {
    constructor(textB2) {
      this.textoBoton2 = textB2;
    }

    dibujar(textB2, x2, x3, y2, y3, anc, alt) {
      if (this.dentroDelBotonCuadr( x2, x3, y2, y3 )) {
        fill(  252, 171, 48, 120 ); //boton over
      } else {
        fill( 212, 175, 55 ); //boton dorado
      }
      push();
      noStroke();
      rectMode (CENTER);
      rect(x2, y2, anc, alt);
      fill (0);
      textAlign ( CENTER );
      textSize (15);
      text (textB2, x2, y2+5);
      pop();
    }
    
    dentroDelBotonCuadr(x2, x3, y2, y3) {
    return mouseX> x2-50 && mouseX< x3-50 && mouseY> y2-50 && mouseY< y3-50;
  }
  }
