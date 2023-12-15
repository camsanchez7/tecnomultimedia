class Juego {
  constructor(estado) {
    this.tiempoInicial = millis();
    this.tiempoActual = millis () - this.tiempoInicial;
    this.Jack = new Jack();
    this.fJ = fotosJ;
    this.crearPolicias();
  }

  crearPolicias() {
    this.Policias = [];
    for (let i = 0; i < 3; i++) {
      this.Policias[i] = new Policias (i*200, 100);
    }
  }

  actualizar() {
    push();
    for ( let i = 0; i < 3; i++ ) {
      this.Policias[i].actualizar();

      //------------------------------
      //actualizar colision en caso de perder vidas
      this.Jack.calcularColision ( this.Policias );
    }
    pop();
  }

  dibujar() {
    //personaje principal. Jack
    push();
    this.Jack.dibujar(this.fJ);
    this.Jack.getVidas();

    //policias
    for (let i = 0; i < 3; i++) {
      this.Policias[i].dibujar(this.fJ);
      this.Policias[i].actualizar();
    }
    pop();
  }
  teclaPresionada(keyCode) {
    this.Jack.teclaPresionada(keyCode);
  }
}
