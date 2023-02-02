window.onload = function () {
    LoadDatos();
    datoPersonal();
}
function randomFoto() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {

            document.getElementById("fotoThumb").src = data.results[0].picture.large;
    
        }
    });
}

function infoPersona() {
    document.getElementById("tarjetaPersonal").style.background = 'rgb(33, 112, 241)';
    $.ajax({
        url: '../json/info.json',
        dataType: 'json',
        success: function(data) {

            data2 = JSON.stringify(data);
            //document.getElementById("test").innerHTML = data2;
    
            
            document.getElementById("tituloTarjeta").innerHTML = " Datos Principales: ";
            document.getElementById("tarj1").innerHTML = "Nombre de usuario:    " + data.results[0].login.username;
            document.getElementById("tarj2").innerHTML = "E-mail:    " + data.results[0].email;
            document.getElementById("tarj3").innerHTML = "Time Zone:    " + data.results[0].location.timezone.description + ", " + data.results[0].location.timezone.offset;
            document.getElementById("tarj4").innerHTML = "Celular / Tel:    " + data.results[0].cell;
            
            colorP(1);
            
        }
    });
    
};


function datoPersonal() {
    document.getElementById("tarjetaPersonal").style.background = 'rgb(83, 42, 241)';
    $.ajax({
        url: '../json/info.json',
        dataType: 'json',
        success: function(data) {

            data2 = JSON.stringify(data);
            //document.getElementById("test").innerHTML = data2;
   
           
            document.getElementById("tituloTarjeta").innerHTML = " Datos Personales: ";
            document.getElementById("tarj1").innerHTML = "Género:    " + data.results[0].gender;
            document.getElementById("tarj2").innerHTML = "Nombre:    " + data.results[0].name.title + " " + data.results[0].name.first;
            document.getElementById("tarj3").innerHTML = "Apellido:    " + data.results[0].name.last;
            document.getElementById("tarj4").innerHTML = "Nacionalidad: " + data.results[0].nat;

            colorP(1);
           
           
        }
    });
}

function lugarPersona() {
    document.getElementById("tarjetaPersonal").style.background = 'rgb(33, 182, 181)';
    $.ajax({
        url: '../json/info.json',
        dataType: 'json',
        success: function(data) {

            data2 = JSON.stringify(data);
            //document.getElementById("test").innerHTML = data2;
    
            
            document.getElementById("tituloTarjeta").innerHTML = " Datos Residencia: ";
            document.getElementById("tarj1").innerHTML = "Provincia y Ciudad:    " + data.results[0].location.state + ", " + data.results[0].location.city;
            document.getElementById("tarj2").innerHTML = "País:    " + data.results[0].location.country;
            document.getElementById("tarj3").innerHTML = "Código Postal:    " + data.results[0].location.postcode;
            document.getElementById("tarj4").innerHTML = "Calle:    " + data.results[0].location.street.name +", " + data.results[0].location.street.number;
            
            colorP(2);
        }
    });
}

function objetivoPersona() {
    document.getElementById("tarjetaPersonal").style.background = 'rgb(33, 82, 111)';
    $.ajax({
        url: '../json/info.json',
        dataType: 'json',
        success: function(data) {

            data2 = JSON.stringify(data);
            //document.getElementById("test").innerHTML = data2;
    
            
            document.getElementById("tituloTarjeta").innerHTML = " Objetivos: ";
            document.getElementById("tarj1").innerHTML = "- " + data.results[0].aim.one;
            document.getElementById("tarj2").innerHTML = "- " + data.results[0].aim.two;
            document.getElementById("tarj3").innerHTML = "- " + data.results[0].aim.three;
            document.getElementById("tarj4").innerHTML = "- " + data.results[0].aim.four;
            
            colorP(1);
        }
    });
}


function colorP(valor) { //valor 1 para letra clara y distinto de 1 para letra oscura

    if (valor ===1) {
        document.getElementById("tarj1").style.color = 'rgb(228, 248, 231)';
        document.getElementById("tarj2").style.color = 'rgb(228, 248, 231)';
        document.getElementById("tarj3").style.color = 'rgb(228, 248, 231)';
        document.getElementById("tarj4").style.color = 'rgb(228, 248, 231)';
    }
    else
    {
        document.getElementById("tarj1").style.color = 'rgb(20, 20, 20)';
        document.getElementById("tarj2").style.color = 'rgb(20, 20, 20)';
        document.getElementById("tarj3").style.color = 'rgb(20, 20, 20)';
        document.getElementById("tarj4").style.color = 'rgb(20, 20, 20)';
    }
}

function LoadDatos() {
    $.ajax({
        url: '../json/info.json',
        dataType: 'json',
        success: function(data) {

            data2 = JSON.stringify(data);
            //document.getElementById("test").innerHTML = data2;

            document.getElementById("tituloTarjeta2").innerHTML = "Experiencia";
            document.getElementById("pexperiencia").innerHTML = data.results[0].experience;
        }
    });
}
