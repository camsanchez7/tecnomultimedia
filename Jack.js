class Jack {
  constructor(){
    this.x1 = 300;
    this.y1 = 500;
    this.vidas = 100;
    this.colisiono = false;
  }
  
  dibujar(fJ) {
    imageMode (CENTER);
    image (fJ[2], this.x1, this.y1, 100, 100);
    this.x1 = constrain (this.x1, 100, 500);
  }
  
  teclaPresionada (keyCode) {
    if ( keyCode == LEFT_ARROW ) {
      this.moverIzq();
    } else if ( keyCode == RIGHT_ARROW ) {
      this.moverDer();
    }
  }
  
  moverIzq() {
    this.x1 -= 200;
  }
  
  moverDer() {
    this.x1 += 200;
  }
  
    getVidas() {
    return this.vidas;
  }

  //-----------------------------------------------
  calcularColision( obstaculos ) { 
    let distColision = 100.5;// 
    for (let i = 0; i < obstaculos.length; i++) { //recorre cada posicion de los policias
      let distPoliciaJack = dist ( this.x1, this.y1, obstaculos[i].posX, obstaculos[i].posY);
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
