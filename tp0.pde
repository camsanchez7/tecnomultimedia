/*
TP #0
Alumna: Camila Sanchez. Legajo 82331/7
Comision 2. Matias Jauregui Lorda
*/

PImage pandaRojo;

void setup(){
  size (800,400);
  pandaRojo = loadImage ("pandaRojo.jpg");
}

void draw(){
   background(175);
  image (pandaRojo, 400,0,400,400);
  
//DIBUJO
stroke(80);
strokeWeight(0.5);
noFill();
fill(85,70,65);
quad(0,153,390,400,150,400,0,250); //madera base
fill(216,79,15); //naranja
ellipse (215,95,145,125); //cabeza
fill(240,208,119); //amarillo
triangle (148,78,135,23,186,42); //oreja izq. parte amarilla
triangle (243,41,290,23,280,78); //oreja der. parte amarilla
fill(0);
triangle (155,63,149,39,173,48); //oreja izq. parte negra
triangle (255,46,277,37,275,65); //oreja der. parte negra
fill(216,79,15); //naranja-rojo
noStroke();
ellipse (245,240,120,195); //cuerpo. 2da parte naranja
ellipse (267,290,100,110); //cuerpo-pierna. parte naranja
stroke(80);
strokeWeight(0.5);
fill(0);
ellipse (205,250,150,215); //cuerpo. 1er parte negra
ellipse (245,195,50,100);//brazo
strokeWeight(3);
stroke(149,94,42); //color
line (181,210,283,343); //rama
strokeWeight(0.5);
stroke(80);
ellipse (225,235,70,45);//mano-garra
ellipse (185,350,45,25); //patita 1. izq
ellipse (260,347,45,25); //patita 2. der
fill(240,208,119); //amarillo
quad (173,140,213,155,257,140,215,110);//hocico amarillo
fill(0);
quad (200,142,213,150,225,142,213,136);//hocico negro
fill(240,208,119); //amarillo
circle (196,103,17); //ojo izq borde amarillo
circle (238,103,17); // ojo der borde amarillo
fill(0);
circle (196,103,10); //ojo izq negro
circle (238,103,10); //ojo der negro
fill(255);
ellipse (200,89,15,7); //manchita-ceja blanca izq
ellipse (233,89,15,7); //manchita-ceja blanca der
ellipse (170,111,17,30); //manchita blanca izq
ellipse (262,111,20,30); //manchita blanca der
fill(44,173,44);
//hojas
triangle (178,214,144,153,189,210);
triangle (183,212,182,173,191,212);
triangle (180,214,129,209,183,220);
}
