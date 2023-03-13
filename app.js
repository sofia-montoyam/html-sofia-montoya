document.addEventListener("DOMContentLoaded", () => {;
   const cardAdj = [
    { name: "1", img: "imagenes/1.png" },
    { name: "2", img: "imagenes/2.png" },
    { name: "3", img: "imagenes/3.png" },
    { name: "4", img: "imagenes/4.png" },
    { name: "5", img: "imagenes/5.png" },
    { name: "6", img: "imagenes/6.png" },
    { name: "1", img: "imagenes/1.png" },
    { name: "2", img: "imagenes/2.png" },
    { name: "3", img: "imagenes/3.png" },
    { name: "4", img: "imagenes/4.png" },
    { name: "5", img: "imagenes/5.png" },
    { name: "6", img: "imagenes/6.png" }
      

   ];

   const cuadricula = document.querySelector(".cuadricula");
   const resultado = document.querySelector("#resultado");
   var cartasEscogidas = [];
   var cartasEscogidasId = [];
   var cartasGanadas = [];

  });

  function crearTablero() {
   for (let i = 0; i < cardAdj.length; i++) {
     // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
     // cuando i=cardAdj.length, es decir, 12.
     var carta = document.createElement("img"); // Crea elemento img cada vez que se ejecuta la función.
 
     carta.setAttribute("src", "images/reverso.png"); //Asignar nuevo atributo a cada carta
     //igual a la imagen 'reverso'.
 
     carta.setAttribute("data-id", i); //Asignar como atributo a cada carta creada, el id=i.
 
     carta.addEventListener("click", voltearCarta); //Detectar si la carta asignada recibe un click y ejecuta
     //la función voltearCarta.
 
     cuadricula.appendChild(carta); // Relaciona la carta creada con la variable cuadricula enlazada con la clase
     // cuadricula de html para que se imprima la carta creada en el div de html.
   }
 }
 
 function verificarPareja() {
   var cards = document.querySelector();

   function voltearCarta(){
     var cardId = this.getAttribute("data-id");
     cartasEscogidas.push(cardAdj[cardId].name);
     cartasEscogidasId.push(cardId);
this.setAttribute("src", cardAdj[cardId].img);
if (cartasEscogidas.length === 2) {
  setTimeout(verificarPareja, 1500);

}
   }

   crearTablero();
  )};
