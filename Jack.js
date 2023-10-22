class Jack {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.colorJ = color (255, 0, 0);
    this.vidas = 3; 
    // al ejecutar el programa y por mas que use el return en getVidas no me devuelve el valor que le asigné.
    // esto fue lo que mas me trabó para calcular la condicion de las colisiones.
  }

  dibujar() {
    fill(this.colorJ);
    rect(this.x, this.y, 50, 50);
  }

  teclaPresionada (keyCode) {
    //condicionar que jack
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
    return this.vidas == 3;
  }
}
