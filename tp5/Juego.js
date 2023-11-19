class Juego {
  constructor(fuente) {
    this.estado = "instrucciones"; //logica de estados
    this.tiempoInicial = millis();
    this.tiempoActual = millis () - this.tiempoInicial;

    this.crearJack();
    this.crearPolicias();
    this.font = fuente;
    this.fotos = imagenes;
  }

  crearJack() {
    this.Jack = new Jack ();
  }

  crearPolicias() {
    this.Policias = [];
    for (let i = 0; i < 3; i++) {
      this.Policias[i] = new Policias (i*200, 100);
    }
  }

  actualizar() {
    if (this.estado == "jugando" ) {
      for ( let i = 0; i < 3; i++ ) {
        this.Policias[i].actualizar();

        //------------------------------
        //actualizar colision en caso de perder vidas
        this.Jack.calcularColision ( this.Policias );
        if ( this.Jack.vidas <= 0 ) {
          this.estado = "perdiste";
        }
        if ( this.tiempoActual >= 30*1000 && this.Jack.vidas >= 1 ) {
          this.estado = "ganaste";
        }
      }
    }
  }

  dibujar(fotos) {
    
    //-------------------------------------------------- MENU
    if (this.estado == "instrucciones") {
      imageMode (CORNER);
      image (this.fotos[0], 0, 0, 600, 600);
      this.titulos(50);
      text( "La escapada!", width/2, 180);
      this.arreglos(20, 230, 560, 120, 18);
      text( "Ayudá a Jack a esquivar a los policias y escapar de la mansión lo más rápido que puedas. Procurá no perder energía para que no te atrapen!!\nUsando las teclas de DERECHA e IZQUIERDA", 30, 265, 550, 300);
      circle (width/2, 400, 80);
      fill (197, 103, 232, 150);
      text( "Jugar", 275, 405);

      //----------------------------------------------- JUEGO
    } else if (this.estado == "jugando") {
      imageMode (CORNER);
      image (this.fotos[3], 0, 0, 600, 600);
      this.arreglos(0, 0, 600, 25, 15);
      text ("ENERGIA: "+ this.Jack.vidas + "%", 15, 20 ); //cuando quiero que se vea en pantalla el valor tengo que llamar al OBJ DE LA CLASE. no solo a la variable
      text ("TIEMPO: "+ nf( this.tiempoActual/1000, 1, 2), 480, 20 );
      //tiempo
      this.tiempoActual = millis () - this.tiempoInicial;
      // jugador
      this.Jack.dibujar(fotos);
      this.Jack.getVidas();
      //policias
      for (let i = 0; i < 3; i++) {
        this.Policias[i].dibujar();
        this.Policias[i].actualizar();
      }
      
      //----------------------------------------------- PERDISTE
    } else if ( this.estado == "perdiste" ) {
      imageMode (CORNER);
      image (this.fotos[4], 0, 0, 600, 600);
      this.titulos(50);
      text( "A LA CARCEL :P", width/2, 200 );
      this.arreglos(190, 300, 210, 40, 20);
      text( "Volver a jugar", 220, 330 );
      
      // ---------------------------------------------- GANASTE
    } else if ( this.estado == "ganaste" ) {
      imageMode (CORNER);
      image (this.fotos[4], 0, 0, 600, 600);
      this.titulos(50);
      text( "ESCAPASTE!", width/2, 200 );
      this.arreglos(180, 270, 220, 40, 20);
      text ("Volver a jugar", 210, 300);
      textAlign (CENTER);
      text ("Cuento: El Gran Gatsby\nAlumna: Camila Sanchez\nTecno Multimedia 1\nComision 2", width/2, 360);
    }
  }

  botones (mousePressed) { //UNIFICADO BOTON Y TIEMPO
    if ( this.estado == "instrucciones" && mousePressed ) { //----- MENU
      if ( dist(width/2, 400, mouseX, mouseY) < 40 ) { //boton jugar
        this.estado = "jugando";
        this.reiniciar();
      }
    }
    if ( this.estado == "perdiste" ) {
      if ( dist (  220, 330, mouseX, mouseY ) < 100 ) {
        this.reiniciar();
      }
    }
    if ( this.estado == "ganaste" ) {
      if ( dist ( 300, 300, mouseX, mouseY ) < 100 ) {
        this.reiniciar();
      }
    }
  }

  teclaPresionada(keyCode) {
    this.Jack.teclaPresionada(keyCode);
  }

  reiniciar () { //REINICIAR VARIABLES
    this.tiempoInicial = millis ();
    this.Jack.vidas = 100;
    this.estado = "jugando";
  }

  arreglos (posX, posY, anc, alt, tam) { //me refiero a arreglos estéticos. NO ARRAYS
    fill (197, 103, 232, 150);
    strokeWeight (0.5)
    rect (posX, posY, anc, alt);
    textSize (tam);
    fill (255);
    textAlign (LEFT);
  }

  titulos (tam) {
    fill (255);
    textFont (fuente);
    textSize (tam);
    textAlign (CENTER);
  }
}
