// trabajamos con todas las posibilidades que nos da jquery

// nos preguntamos con que elemento vamos a trabajar utilizamos la variable general document
// una vez que la web esta lista lo trabjaamos con ready//
jQuery(document).ready(listo);

function listo()
{

    alert("Armando pagina nueva con JS");

jQuery(".hamb").click(function(e){
e.preventDefault();

// va a darle la funcion para que aparezca lo que esta en el nav que diga open luego de la transition modificada a 0
jQuery("header .container nav").toggleClass("open");

jQuery(".hamb i").toggleClass("fa-times");

});

jQuery("header .container nav a").click(function(){

    jQuery("header .container nav").removeClass("open");

    jQuery(".hamb i").removeClass("fa-times");


   var Nue = jQuery(this).attr("href");

    jQuery("html, body").animate({
        "scrollTop": jQuery(Nue).offset().top
    })
})
}