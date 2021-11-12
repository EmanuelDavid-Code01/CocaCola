// trabajamos con todas las posibilidades que nos da jquery

// nos preguntamos con que elemento vamos a trabajar utilizamos la variable general document
// una vez que la web esta lista lo trabjaamos con ready//
jQuery(document).ready(listo);

function listo()
{
alert("hola mundo");


jQuery(".hamb").click(function(e){
e.preventDefault();

// va a darle la funcion para que aparezca lo que esta en el nav que diga open luego de la transition modificada a 0
jQuery("header .container nav").toggleClass("open");

});
}