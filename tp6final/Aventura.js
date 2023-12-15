class Aventura {
  constructor(fotos, fJ, text, titulo, regular) {
    this.estado = "menu";
    this.tiempoInicial = millis();
    this.tiempoActual = millis() - this.tiempoInicial;
    this.fJ = fotosJ; //arreglo de imagenes para el juego
    this.fotos = imagenes; //arreglo de imagenes para la aventura
    this.text = texto;
    this.titulo = fuente1;
    this.regular = fuente2;
    this.botonCircular = new botonCircular (this.textoBoton);
    this.botonCuadrado = new botonCuadrado (this.textoBoton2);
    this.juego = new Juego(this.estado);
  }

  actualizar() {
    if (this.estado == "jugando" ) {
      if ( this.juego.Jack.vidas <= 0 ) {
        this.estado = "pantalla16"; //continua la historia llevando al final 2. (PERDISTE)
      }
      if ( this.tiempoActual >= 15*1000 && this.juego.Jack.vidas >= 1 ) {
        this.estado = "pantalla15"; //continua la historia llevando al final 3. (GANASTE)
      }
    }
  }

  dibujar() {
    //-----------------------------------------MENU
    if ( this.estado == "menu" ) {
      imageMode (CORNER);
      image ( this.fotos[0], 0, 0, 600, 600);
      this.arregloTexto (60, fuente1, color(212, 175, 55 ));
      text ("El Gran Gatsby", 300, 280);
      this.arregloTexto (24, fuente1, color(212, 175, 55 ));
      text (" F. Scott Fitzgerald ", 300, 330);
      this.arregloTexto (12, fuente2, color(0));
      this.botonCircular.dibujar("CRÉDITOS", 150, 400, 100);
      this.botonCircular.dibujar("COMENZAR", 450, 400, 100);

      //---------------------------------------CREDITOS
    } else if ( this.estado == "creditos" ) {
      image ( this.fotos [17], 0, 0, 600, 600);
      this.arregloTexto (24, fuente1, color(212, 175, 55 ));
      text ("CRÉDITOS", 300, 210);
      text ("Cuento: El Gran Gatsby\nAlumna: Camila Sanchez\nTecno Multimedia 1\nComision 2", width/2, 250);
      this.arregloTexto (10, fuente2, color(0));
      this.botonCuadrado.dibujar("MENÚ", width/2, 360, 385, 445, 60, 60);

      //---------------------PAGINA 1. Introduccion de Nick Carraway
    } else if ( this.estado == "pantalla1" ) {
      image (this.fotos [1], 0, 0, 600, 600);
      this.cuadroDeTexto(50, 430, 500, 110);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[1], 75, 450, 450, 150 );
      this.botonCircular.dibujar("A", 150, 550, 40);
      this.botonCircular.dibujar("B", 450, 550, 40);

      //---------------------PAGINA 2. Conoce a Daisy Buchanan
    } else if ( this.estado == "pantalla2" ) {
      image ( this.fotos [2], 0, 0, 600, 600);
      this.cuadroDeTexto( 50, 430, 500, 110);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[2], 75, 450, 450, 150 );
      this.botonCircular.dibujar("->", 300, 550, 40);

      //---------------------PAGINA 3. Conoce a Jay Gatsby
    } else if ( this.estado == "pantalla3" ) {
      image ( this.fotos [3], 0, 0, 600, 600);
      this.cuadroDeTexto( 50, 440, 500, 105);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[3], 75, 455, 450, 120 );
      this.botonCircular.dibujar("->", 550, 560, 40);

      //---------------------PAGINA 4. Noche de la fiesta
    } else if ( this.estado == "pantalla4" ) {
      image ( this.fotos [4], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 440, 500, 120);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[4], 75, 460, 450, 150 );
      this.botonCircular.dibujar("A", 150, 550, 40);
      this.botonCircular.dibujar("B", 300, 550, 40);
      this.botonCircular.dibujar("C", 450, 550, 40);

      //---------------------PAGINA 5. OPCION A. Camino de la izquierda
    } else if ( this.estado == "pantalla5" ) {
      image ( this.fotos [5], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 430, 500, 140);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[5], 75, 440, 450, 150 );
      this.botonCircular.dibujar("A", 210, 570, 40);
      this.botonCircular.dibujar("B", 410, 570, 40);

      //---------------------PAGINA 6. OPCION B. Camino del medio
    } else if ( this.estado == "pantalla6" ) {
      image ( this.fotos [6], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 450, 500, 120);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[6], 75, 470, 450, 140 );
      this.botonCircular.dibujar("A", 200, 560, 40);
      this.botonCircular.dibujar("B", 400, 560, 40);

      //---------------------PAGINA 7. OPCION C. Camino de la derecha
    } else if ( this.estado == "pantalla7" ) {
      image ( this.fotos [7], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 450, 500, 100);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[7], 75, 470, 450, 130 );
      this.botonCircular.dibujar("->", 550, 560, 40);

      //---------------------PAGINA 8. Jay es asesinado por Tom. FINAL 1
    } else if ( this.estado == "pantalla8" ) {
      image ( this.fotos [8], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 430, 500, 130);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[8], 75, 460, 450, 150 );
      this.botonCircular.dibujar("->", 550, 560, 40);

      //---------------------PAGINA 9. Tom muestra las pruebas de la investigacion sobre Jay
    } else if ( this.estado == "pantalla9" ) {
      image ( this.fotos [9], 0, 0, 600, 600);
      this.cuadroDeTexto( 50, 210, 500, 130);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[9], 75, 230, 450, 110 );
      this.botonCircular.dibujar("A", 150, 340, 40); // OPCION A.
      this.botonCircular.dibujar("B", 450, 340, 40); // OPCION B
      this.botonCuadrado.dibujar("Juego", 300, 340, 340, 380, 40, 40); // OPCION DE JUGAR

      //---------------------PAGINA 10. Distraccion de los invitados
    } else if ( this.estado == "pantalla10" ) {
      image ( this.fotos [10], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 470, 500, 80);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[10], 75, 490, 450, 90 );
      this.botonCircular.dibujar("->", 300, 550, 40);

      //---------------------PAGINA 11. Nick como intermediario de la pareja
    } else if ( this.estado == "pantalla11" ) {
      image ( this.fotos [11], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 40, 500, 140);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[11], 75, 60, 450, 150 );
      this.botonCircular.dibujar("A", 200, 190, 40);
      this.botonCircular.dibujar("B", 400, 190, 40);

      //---------------------PAGINA 12. Nick se emociona con la idea de ayudar a la pareja. Reencuentro secreto
    } else if ( this.estado == "pantalla12" ) {
      image ( this.fotos [12], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 150, 500, 120);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[12], 75, 170, 450, 110 );
      this.botonCircular.dibujar("A", 200, 280, 40);
      this.botonCircular.dibujar("B", 400, 280, 40);

      //---------------------PAGINA 13. Nick queda sorprendido por la confesion y Tom comienza a sospechar
    } else if ( this.estado == "pantalla13" ) {
      image ( this.fotos [13], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 340, 500, 160);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[13], 75, 360, 450, 150 );
      this.botonCircular.dibujar("->", 300, 500, 40);

      //---------------------PAGINA 14. Daisy y Jay planean su huida
    } else if ( this.estado == "pantalla14" ) {
      image ( this.fotos [14], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 420, 500, 110);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[14], 75, 440, 450, 100 );
      this.botonCircular.dibujar("->", 300, 540, 40);

      //---------------------PAGINA 15. Escapan para comenzar una nueva vida. FINAL 3. PANTALLA GANASTE
    } else if ( this.estado == "pantalla15" ) {
      image ( this.fotos [15], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 450, 500, 110);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[15], 75, 470, 450, 130 );
      this.arregloTexto (10, fuente2, color(0));
      this.botonCuadrado.dibujar("JUGAR", 80, 130, 560, 610, 50, 50);
      this.botonCuadrado.dibujar("MENU", 500, 550, 560, 610, 50, 50);


      //---------------------PAGINA 16.  Jay va preso. FINAL 2. PANTALLA PERDISTE
    } else if ( this.estado == "pantalla16" ) {
      image ( this.fotos [16], 0, 0, 600, 600);
      this.cuadroDeTexto ( 50, 440, 500, 110);
      this.arregloTexto (15, fuente2, color(0));
      text( this.text[16], 75, 460, 450, 150 );
      this.arregloTexto (10, fuente2, color(0));
      this.botonCuadrado.dibujar("JUGAR", 80, 130, 560, 610, 50, 50);
      this.botonCuadrado.dibujar("MENU", 550, 600, 560, 610, 50, 50);

      //------------------------------------------- INSTRUCCIONES
    } else if (this.estado == "instrucciones" ) {
      image ( this.fotos[0], 0, 0, 600, 600);
      this.arregloTexto(24, fuente1, color(212, 175, 55 ));
      text( "Ayudá a Jack a esquivar a los policias y escapar de la mansión lo más rápido que puedas. Procurá no perder energía para que no te atrapen!!\nUsando las teclas de DERECHA e IZQUIERDA", 30, 230, 550, 300);
      this.botonCuadrado.dibujar("JUGAR", 430, 510, 390, 470, 80, 80);


      //------------------------------------------- JUEGO
    } else if (this.estado == "jugando" ) {
      imageMode (CORNER);
      image (this.fJ [0], 0, 0, 600, 600);
      this.arregloTexto (15, fuente2, color(255));
      text ("ENERGIA: "+ this.juego.Jack.vidas + "%", 65, 20 );
      text ("TIEMPO: "+ nf( this.tiempoActual/1000, 1, 2), 520, 20 );
      //tiempo
      this.tiempoActual = millis () - this.tiempoInicial;
      //juego
      this.juego.dibujar();
      this.juego.actualizar();
    }
  }

  //----------------------- TRASPASO DE UN ESTADO A OTRO
  botonSig (mousePressed) {
    if (this.estado == "menu" &&  this.botonCircular.dentroDelBotonCirc(150, 400, 100) ) {
      this.estado = "creditos";
    }
    if (this.estado == "menu" &&  this.botonCircular.dentroDelBotonCirc(450, 400, 100) ) {
      this.estado = "pantalla1";
    }
    if (this.estado == "creditos" &&  this.botonCuadrado.dentroDelBotonCuadr(width/2, 360, 385, 445) ) {//--------------
      this.estado = "menu";
    }
    if (this.estado == "pantalla1" &&  this.botonCircular.dentroDelBotonCirc( 150, 550, 40) ) { //OPCION A. SALIR A RECORRER EL VECINDARIO
      this.estado = "pantalla2";
    }
    if (this.estado == "pantalla1" &&  this.botonCircular.dentroDelBotonCirc( 450, 550, 40) ) { //OPCION B. SALIR A LA VEREDA
      this.estado = "pantalla3";
    }
    if (this.estado == "pantalla2" &&  this.botonCircular.dentroDelBotonCirc( 300, 550, 40) ) { // BOTON SIGUIENTE
      this.estado = "pantalla11";
    }
    if (this.estado == "pantalla3" &&  this.botonCircular.dentroDelBotonCirc( 550, 560, 40) ) { // BOTON SIGUIENTE
      this.estado = "pantalla4";
    }
    if (this.estado == "pantalla4" &&  this.botonCircular.dentroDelBotonCirc( 150, 550, 40) ) { // OPCION A.
      this.estado = "pantalla5";
    }
    if (this.estado == "pantalla4" &&  this.botonCircular.dentroDelBotonCirc( 300, 550, 40) ) { // OPCION B.
      this.estado = "pantalla6";
    }
    if (this.estado == "pantalla4" &&  this.botonCircular.dentroDelBotonCirc( 450, 550, 40) ) { // OPCION C.
      this.estado = "pantalla7";
    }
    if (this.estado == "pantalla5" &&  this.botonCircular.dentroDelBotonCirc( 210, 570, 40) ) { // OPCION A. UN ARMA
      this.estado = "pantalla8";
    }
    if (this.estado == "pantalla5" &&  this.botonCircular.dentroDelBotonCirc( 410, 570, 40) ) { // OPCION C. UNA CARPETA
      this.estado = "pantalla9";
    }
    if (this.estado == "pantalla8" &&  this.botonCircular.dentroDelBotonCirc( 550, 560, 40) ) { // FINAL 1. Boton siguiente
      this.estado = "creditos";
    }
    if (this.estado == "pantalla6" &&  this.botonCircular.dentroDelBotonCirc( 200, 560, 40) ) { //
      this.estado = "pantalla9";
    }
    if (this.estado == "pantalla6" &&  this.botonCircular.dentroDelBotonCirc( 400, 560, 40) ) { //
      this.estado = "pantalla15";
    }
    if (this.estado == "pantalla7" &&  this.botonCircular.dentroDelBotonCirc( 550, 560, 40) ) { //
      this.estado = "pantalla10";
    }
    if (this.estado == "pantalla10" &&  this.botonCircular.dentroDelBotonCirc( 300, 550, 40) ) { //
      this.estado = "pantalla15";
    }
    if (this.estado == "pantalla15" &&  this.botonCuadrado.dentroDelBotonCuadr( 80, 130, 560, 610) ) { // PANTALLA GANASTE. OPCION JUGAR
      this.reiniciar();
    }
    if (this.estado == "pantalla15" &&  this.botonCuadrado.dentroDelBotonCuadr( 500, 550, 560, 610) ) { // PANTALLA GANASTE. OPCION MENU
      this.estado = "menu";
      this.tiempoInicial = millis ();
      this.juego.Jack.vidas = 100;
    }
    if (this.estado == "pantalla11" &&  this.botonCircular.dentroDelBotonCirc( 200, 190, 40) ) { //
      this.estado = "pantalla13";
    }
    if (this.estado == "pantalla11" &&  this.botonCircular.dentroDelBotonCirc( 400, 190, 40) ) { //
      this.estado = "pantalla12";
    }
    if (this.estado == "pantalla12" &&  this.botonCircular.dentroDelBotonCirc( 200, 280, 40) ) { //
      this.estado = "pantalla7";
    }
    if (this.estado == "pantalla12" &&  this.botonCircular.dentroDelBotonCirc( 400, 280, 40) ) { //
      this.estado = "pantalla14";
    }
    if (this.estado == "pantalla14" &&  this.botonCircular.dentroDelBotonCirc( 300, 540, 40) ) { //
      this.estado = "pantalla15";
    }
    if (this.estado == "pantalla9" &&  this.botonCircular.dentroDelBotonCirc( 150, 340, 40) ) { // OPCION A
      this.estado = "pantalla16";
    }
    if (this.estado == "pantalla9" &&  this.botonCircular.dentroDelBotonCirc( 450, 340, 40) ) { // OPCION B
      this.estado = "pantalla8";
    }
    if (this.estado == "pantalla9" &&  this.botonCuadrado.dentroDelBotonCuadr( 300, 340, 340, 380) ) { // OPCION DE JUGAR ------
      this.estado = "instrucciones";
    }
    if (this.estado == "pantalla16" &&  this.botonCuadrado.dentroDelBotonCuadr( 80, 130, 560, 610) ) { // PANTALLA PERDISTE. OPCION JUGAR
      this.reiniciar();
    }
    if (this.estado == "pantalla16" &&  this.botonCuadrado.dentroDelBotonCuadr( 550, 600, 560, 610) ) { // PANTALLA PERDISTE. OPCION MENU
      this.estado = "menu";
      this.tiempoInicial = millis ();
      this.juego.Jack.vidas = 100;
    }
    if (this.estado == "pantalla13" &&  this.botonCircular.dentroDelBotonCirc( 300, 500, 40) ) {
      this.estado = "pantalla9";
    }
    if (this.estado == "instrucciones" &&  this.botonCuadrado.dentroDelBotonCuadr( 430, 510, 390, 470) ) { //----------
      this.reiniciar();
    }
  }

  reiniciar () { //REINICIAR VARIABLES
    this.tiempoInicial = millis ();
    this.juego.Jack.vidas = 100;
    this.juego.Jack.x1 = 300;
    this.estado = "jugando";
  }

  arregloTexto (tam, font, color) {
    fill (color);
    textFont (font);
    textSize (tam);
    textAlign (CENTER);
    
    if (this.estado == "jugando" && this.juego.Jack.vidas <= 50){
      fill(255, 0, 0);
    } else {
      fill(color);
    }
  }

  cuadroDeTexto(x4, y4, anc2, alt2) {
    fill ( 212, 175, 55, 100 );
    rect ( x4, y4, anc2, alt2 );
  }
}
