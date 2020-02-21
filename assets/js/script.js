$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$('document').ready(function () { 

    class Icono {
        constructor(label) {
            this._label = label;
        }

    }
    var icono1 = new Icono("<a href='#'><i class='fab fa-github-square fa-3x'></i></a>");
    var icono2 = new Icono("<a href='#'><i class='fab fa-linkedin fa-3x'></i></a>");
    var icono3 = new Icono("<a href='#'><i class='fab fa-twitter-square fa-3x'></i></a>");
    var icono4 = new Icono("<a href='#'><i class='fab fa-facebook-square fa-3x'></i></a>");

    var iconos = [icono1, icono2, icono3, icono4];


    for (var i = 0; i < iconos.length; i++) {


        $("#Iconos").prepend(iconos[i]._label);
        
    }


});