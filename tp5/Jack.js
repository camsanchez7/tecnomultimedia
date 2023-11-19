class Jack {
  constructor() {
    this.x = 300;
    this.y = 500;
    this.vidas = 100;
    this.colisiono = false;
    this.fotos = imagenes;
  }

  dibujar() {
    imageMode (CENTER);
    image (this.fotos[2], this.x, this.y, 100, 100);
    this.x = constrain (this.x, 100, 500);
  }

  teclaPresionada (keyCode) {
    if ( keyCode == LEFT_ARROW ) {
      this.moverIzq();
    } else if ( keyCode == RIGHT_ARROW ) {
      this.moverDer();
    }
  }

  moverIzq() {
    this.x -= 200;
  }
  moverDer() {
    this.x += 200;
  }
  getVidas() {
    return this.vidas;
  }

  //-----------------------------------------------
  calcularColision( obstaculos ) { 
    let distColision = 100.5;// 
    for (let i = 0; i < obstaculos.length; i++) { //recorre cada posicion de los policias
      let distPoliciaJack = dist ( this.x, this.y, obstaculos[i].posX, obstaculos[i].posY);
      if ( distPoliciaJack < distColision ) {
        this.vidas = this.vidas - 1;
        this.colisiono = true;
      }
      if (this.colisiono== true && distPoliciaJack > distColision ) {
        this.colisiono = false;
      }
    }
  }
}
