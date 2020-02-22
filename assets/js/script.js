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


    class Cursos {
        constructor(imagen, altimagen, nombre, descripcion, modal) {
            this._imagen = imagen;
            this._altimagen = altimagen;
            this._nombre = nombre;
            this._descripcion = descripcion;
            this._modal = modal;
        }
    }

    var curso1 = new Cursos("assets/img/curso1.png", "curso 1", "CURSO N° 1", "Curso xxxx, año xxx", "Modal-java" );
    var curso2 = new Cursos("assets/img/curso2.png", "curso 2", "CURSO N° 2", "Curso xxxx, año xxx", "Modal-oracle");
    var curso3 = new Cursos("assets/img/curso3.jpg", "curso 3", "CURSO N° 3", "Curso xxxx, año xxx", "Modal-sap");
    var curso4 = new Cursos("assets/img/curso4.png", "curso 4", "CURSO N° 4", "Curso xxxx, año xxx", "Modal-microsoft");
    var curso5 = new Cursos("assets/img/curso5.png", "curso 5", "CURSO N° 5", "Curso xxxx, año xxx", "Modal-google");
    var curso6 = new Cursos("assets/img/curso6.png", "curso 6", "CURSO N° 6", "Curso xxxx, año xxx", "Modal-wordpress");


    var Cursosactivos = [curso3, curso2, curso1];
    var Cursossecundarios = [curso6, curso5, curso4];


    for (var i = 0; i < 3; i++) {


        var texto1 = "<div class='col-md-4'><div class='card card-carrusel' style='width: 98%;'><img src='" + Cursosactivos[i]._imagen + "' class='card-img-top' alt='" + Cursosactivos[i]._altimagen + "'><div class='card-body'><h5 class='card-title'>" + Cursosactivos[i]._nombre + "</h5><p class='card-text'>" + Cursosactivos[i]._descripcion + "</p><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#" + Cursosactivos[i]._modal + "'>Saber más.</button></div></div></div>";
        $("#menu-activo").prepend(texto1);

        
        var texto2 = "<div class='col-md-4'><div class='card card-carrusel' style='width: 98%;'><img src='" + Cursossecundarios[i]._imagen + "' class='card-img-top' alt='" + Cursossecundarios[i]._altimagen + "'><div class='card-body'><h5 class='card-title'>" + Cursossecundarios[i]._nombre + "</h5><p class='card-text'>" + Cursossecundarios[i]._descripcion + "</p><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#" + Cursossecundarios[i]._modal + "'>Saber más.</button></div></div></div>";

        $("#menu-secundario").prepend(texto2);



    }

















});