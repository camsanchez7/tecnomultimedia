class Policias {
  constructor(posX) {
    this.posX = posX;
    this.posY = int (random (-100, -50) );
    this.t = 100;
    this.v = random (3, 9);
    this.fotos = imagenes;
  }

  actualizar() {
    this.posY = this.posY + this.v;
    //reciclar los obstaculos
    if ( this.posY >= height+this.t ) {
      // reinicio la posicion en y
      this.posY = int( random(-100, -50 ) );
      this.v = random(3, 9);
    }
  }

  dibujar() {
    push();
    imageMode (CENTER);
    image (this.fotos[1], this.posX+100, this.posY, this.t, this.t);
    pop();
  }
}
