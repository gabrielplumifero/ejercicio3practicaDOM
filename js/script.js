"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)*/
/*let contador = Boolean; */
/*contador = true; */

const primerboton  =  document.querySelector("#boton1");
const segundoboton =  document.querySelector("#boton2"); 
const tercerboton  =  document.querySelector("#boton3");
console.log(primerboton);
console.log(segundoboton);
console.log(tercerboton);

/*const segundoPost = document.querySelector("#post2"); */

primerboton.style.backgroundColor= "yellow";
segundoboton.style.backgroundcolor= "yellow";
tercerboton.style.backgroundcolor= "yellow";

/*function cambiacolor(); 
{let bandera = Boolean}*/

tercerboton.addEventListener("click",function()
{ 
   tercerboton.classList.remove("fuego"); 
   if (tercerboton.style.backgroundColor = "blue")
       {
         tercerboton.textContent = " Soquete ";
         tercerboton.style.backgroundColor= "yellow";
       } 
     /* primerboton.classList.add("fuego"); */
})

tercerboton.addEventListener("dblclick",function()
{ 
   tercerboton.classList.remove("fuego"); 
   if (tercerboton.style.backgroundColor = "yellow")
       {
         tercerboton.textContent = " Hola ";
         tercerboton.style.backgroundColor= "blue";
       } 
     /* primerboton.classList.add("fuego"); */
})
   

segundoboton.addEventListener ("click", function () 
{ 
segundoboton.classList.remove("fuego"); 
if (segundoboton.style.backgroundColor = "blue")
    {
      segundoboton.textContent = " Soquete ";
      segundoboton.style.backgroundColor= "yellow";
    } 
  /* primerboton.classList.add("fuego"); */
 })

segundoboton.addEventListener ("dblclick", function () 
{ 
segundoboton.classList.remove("fuego"); 
if (segundoboton.style.backgroundColor = "yellow")
    {
      segundoboton.textContent = " Hola ";
      segundoboton.style.backgroundColor= "blue";
    } 
  /* primerboton.classList.add("fuego"); */
 })

primerboton.addEventListener ("click", function () 
  { 
  primerboton.classList.remove("fuego"); 
  if (primerboton.style.backgroundColor = "blue")
      {
        primerboton.textContent = " Soquete ";
        primerboton.style.backgroundColor= "yellow";
      } 
    /* primerboton.classList.add("fuego"); */
   })
   
tercerboton.addEventListener("mouseover",function()
   {
      tercerboton.classList.remove("fuego");
      tercerboton.classList.add("mar"); 
   })
   
tercerboton.addEventListener ("mouseout",function()
   {
          tercerboton.classList.add("fuego"); 
   })

segundoboton.addEventListener("mouseover",function()
{
   segundoboton.classList.remove("fuego");
   segundoboton.classList.add("mar"); 
})

segundoboton.addEventListener ("mouseout",function()
   {
       segundoboton.classList.add("fuego"); 
   })

primerboton.addEventListener ("mouseout",function()
{
    primerboton.classList.add("fuego"); 
})

primerboton.addEventListener ("mouseover",function()
{
    primerboton.classList.remove("fuego");  
    primerboton.classList.add("mar"); 
})

primerboton.addEventListener ("dblclick", function () 
{ 
// Removemos la clase de cerrado{ 
/* contador = contador + 1 ;*/
  /*  if (contador = false) */
     /*   c   */
     if  (primerboton.style.backgroundColor = "yellow") 
          { 
            primerboton.textContent = ' Hola ';
            primerboton.style.backgroundColor= "blue";
          }          
    /* if (primerboton.style.backgroundColor = `blue`)
         {
           primerboton.textContent = ' Soquete ';
           primerboton.style.backgroundColor= `yellow`;
           alert(' :'+primerboton.style.backgroundColor);}
           */
/*document.write("  : "+primerboton.textContent);*/
});


alert(' :  '+primerboton.textContent);
alert(' :  '+primerboton.style.backgroundColor);

/*primerboton.classList.add("fuego");
/*console.log(contador); *
/*Document.writeln(' :'+contador); */
/*primerboton.classList.remove("closed");/*
// Agregamos la clase de abierto
/*primerboton.classList.add("open")/*});

/*primerboton.style.backgroundColor= `yellow`;*/


/* primerboton.addEventListener("dblclick",function()
   {
    primerboton.style.backgroundColor= `yellow`;
    primerboton.textContent = ' hola  ';
    primerboton.classList.add('FUEGO');
   /*console.log(contador); *
   /*Document.writeln(' :'+contador); */
   /* primerboton.classList.add("closed"); */
// Agregamos la clase de abierto
   /* primerboton.classList.close("open")}); */


  