class Policias {
  constructor(posX) {
    this.posX = posX;
    this.posY = int (random (-100, -50) );
    this.t = 50;
    this.v = random (3,6);
    this.colorP = color ( 0, 0, 255);
  }

  actualizar() {
    this.posY = this.posY + this.v;
    //reciclar los obstaculos
    if ( this.posY >= height+this.t ) {
      // reinicio la posicion en y
      this.posY = int( random(-100, -50 ) );
      this.v = random(3,6);
    }
  }

  dibujar() {
    push();
    fill (this.colorP);
    ellipse (this.posX+100, this.posY, this.t, this.t);
    pop();
  }
}
