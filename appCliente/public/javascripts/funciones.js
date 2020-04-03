$(function() {
  $('#buscar').click(function(){
    var datoBuscar = $("#datoBuscar").val();
    var tbodytabla = $("#tabla");
    $.ajax({
      url:'http://localhost:3000/estudiante/listar/' + datoBuscar,
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){

        tbodytabla.empty();

        for(var i = 0; i < respuesta.response.length; i++){
          tbodytabla.append('<tr><td>' + 
              respuesta.response[i].nombre + '</td><td>' +
              respuesta.response[i].ap_paterno + '</td><td>' +
              respuesta.response[i].ap_materno + '</td><td>' +
              respuesta.response[i].promedio + '</td><td>' +
              respuesta.response[i].esc_procedencia + '</td><td>' +
              respuesta.response[i].fecha_egreso + '</td><td>' +
              respuesta.response[i].curp + '</td></tr>');
        }
        console.log(respuesta);
      },
      error: function(er){
        alert("No corre.");
      }
    });
  });
});

$(function() {
  $('#btnDelete').click(function() {
    var nombre = $('#deleteNombre').val();
    var apellidoP = $('#deletePaterno').val();
    var apellidoM = $('#deleteMaterno').val();
    //alert(nombre+apellidoP+apellidoM);
    $.ajax({
      url:'http://localhost:3000/estudiante/delete',
      data:{
         nombre : nombre,
         ap_paterno : apellidoP,
         ap_materno : apellidoM
      },
      type:'DELETE',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType:'json',
      success:function(respuesta){
        alert("Alumno eliminado.");
        location.reload();
      },
      error:function(er){
        alert("Alumno no eliminado.");
      }
    });
  });
});

$(function() {
  $('#listaEstudiantes').ready(function(){
    var tabla = $('#listaEstudiantes');
    //alert(tabla);
    $.ajax({
      url:'http://localhost:3000/estudiante/listarAlfa',
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        //alert("Entra");
        for(var i = 0; i < respuesta.response.length; i++){
          tabla.append('<tr><td>' +
              respuesta.response[i].nombre + '</td><td>' +
              respuesta.response[i].ap_paterno + '</td><td>' + 
              respuesta.response[i].ap_materno + '</td></tr>');
        }
        console.log(respuesta);
      },
      error: function(er){
        alert("Error");
      }
    })
  });
});

$(function() {//--------------------------------------
  $('#opcionesAlumnos').ready(function(){
    var tabla = $('#selectAlumno');
    //alert(tabla);
    $.ajax({
      url:'http://localhost:3000/estudiante/listarAlfa',
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        //alert("Entra");
        for(var i = 0; i < respuesta.response.length; i++){
          tabla.append('<option value="' + respuesta.response[i].id_est + '">' +
              respuesta.response[i].nombre + " " + respuesta.response[i].ap_paterno + " " + respuesta.response[i].ap_materno + '</option>');
        }
        console.log(respuesta);
      },
      error: function(er){
        alert("Error");
      }
    })
  });
});

$(function() {
  $('#formulario').ready(function(){
    var tabla = $('#id_aca');
    //alert(tabla);
    $.ajax({
      url:'http://localhost:3000/estudiante/verEscuelas',
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        //alert("Entra");
        for(var i = 0; i < respuesta.response.length; i++){
          tabla.append('<option value="' + respuesta.response[i].id_aca + '">' +
              respuesta.response[i].esc_procedencia + '</option>');
        }
        console.log(respuesta);
      },
      error: function(er){
        alert("Error");
      }
    })
  });
});

$(function() {
  $('#formulario').ready(function(){
    var tabla = $('#id_per');
    //alert(tabla);
    $.ajax({
      url:'http://localhost:3000/estudiante/verPersonas',
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        //alert("Entra");
        for(var i = 0; i < respuesta.response.length; i++){
          tabla.append('<option value="' + respuesta.response[i].id_per + '">' +
              respuesta.response[i].nombre + " " + respuesta.response[i].ap_paterno + " " + respuesta.response[i].ap_materno + '</option>');
        }
        console.log(respuesta);
      },
      error: function(er){
        alert("Error");
      }
    })
  });
});

$(function() {
  $('#tablaMuni').ready(function(){
    var tabla = $('#tablaMuni');
    //alert(tabla);
    $.ajax({
      url:'http://localhost:3000/estudiante/listarMuni',
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        //alert("Entra");
        for(var i = 0; i < respuesta.response.length; i++){
          tabla.append('<tr><td>' +
              respuesta.response[i].nombre + '</td><td>' +
              respuesta.response[i].ap_paterno + '</td><td>' + 
              respuesta.response[i].ap_materno + '</td><td>' +
              respuesta.response[i].municipio + '</td></tr>');
        }
        console.log(respuesta);
      },
      error: function(er){
        alert("Error");
      }
    })
  });
});

$(function() {
  $('#tablaProm').ready(function(){
    var tabla = $('#tablaProm');
    //alert(tabla);
    $.ajax({
      url:'http://localhost:3000/estudiante/listarProm',
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        //alert("Entra");
        for(var i = 0; i < respuesta.response.length; i++){
          tabla.append('<tr><td>' +
              respuesta.response[i].nombre + '</td><td>' +
              respuesta.response[i].ap_paterno + '</td><td>' + 
              respuesta.response[i].ap_materno + '</td><td>' +
              respuesta.response[i].promedio + '</td></tr>');
        }
        console.log(respuesta);
      },
      error: function(er){
        alert("Error");
      }
    })
  });
});

$(function() {
  $('#tablaEsc').ready(function(){
    var tabla = $('#tablaEsc');
    //alert(tabla);
    $.ajax({
      url:'http://localhost:3000/estudiante/listarEsc',
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        //alert("Entra");
        for(var i = 0; i < respuesta.response.length; i++){
          tabla.append('<tr><td>' +
              respuesta.response[i].nombre + '</td><td>' +
              respuesta.response[i].ap_paterno + '</td><td>' + 
              respuesta.response[i].ap_materno + '</td><td>' +
              respuesta.response[i].esc_procedencia + '</td></tr>');
        }
        console.log(respuesta);
      },
      error: function(er){
        alert("Error");
      }
    })
  });
});

$(function() {
  $('#borrarMenor').click(function(){
    $.ajax({
      url:'http://localhost:3000/estudiante/Eliminando',
      data:{},
      type:'PUT',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        location.reload();
        alert("Se han eliminado los alumnos con promedio menor a 7.")
      },
      error: function(er){
        alert("Error");
      }
    })
  });
});

//http://localhost:3000/estudiante/verPersonas

$(function() {
  $('#btnNuevo').click(function() {
    var nombre = $('#nombre').val();
    var ap_paterno = $('#ap_paterno').val();
    var ap_materno = $('#ap_materno').val();
    var sexo = $('#sexo').val();
    var tel = $('#tel').val();
    var celular = $('#celular').val();
    var calle = $('#calle').val();
    var numero = $('#numero').val();
    var municipio = $('#municipio').val();
    var colonia = $('#colonia').val();
    var estado = $('#estado').val();
    var pais = $('#pais').val();
    var cp = $('#cp').val();
    var curp = $('#curp').val();
    var fecha_nacimiento = $('#fecha_nacimiento').val();
    var tipo_sangre = $('#tipo_sangre').val();
    var nss = $('#nss').val();
    var alergias = $('#alergias').val();
    var estatus = $('#estatus').val();
    var email = $('#email').val();
    var id_per = $('#id_per').val();
    var id_aca = $('#id_aca').val();
    
    $.ajax({
      url:'http://localhost:3000/estudiante/nuevo',
      data:{
         nombre : nombre,
         ap_paterno : ap_paterno,
         ap_materno : ap_materno,
         sexo : sexo,
         tel : tel,
         email : email,
         celular : celular,
         calle : calle,
         numero : numero,
         municipio : municipio,
         colonia : colonia,
         estado : estado,
         pais : pais,
         cp : cp,
         curp : curp,
         fecha_nacimiento : fecha_nacimiento,
         estatus : estatus,
         tipo_sangre : tipo_sangre,
         nss : nss,
         alergias : alergias,
         id_per : id_per,
         id_aca : id_aca,

      },
      type:'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType:'json',
      success:function(respuesta){
        alert("Alumno agregado.");
        location.reload();
      },
      error:function(er){
        alert("Alumno no eliminado.");
      }
    });
  });
});

$(function() {
  $('#selectAlumno').change(function(){
    var id = $('#selectAlumno').val();
    //alert(id);
    var calle = $('#calle');
    var numero = $('#numero');
    var municipio = $('#municipio');
    var colonia = $('#colonia');
    var estado = $('#estado');
    var pais = $('#pais');
    var cp = $('#cp');
    $.ajax({
      url:'http://localhost:3000/estudiante/direccion/' + id,
      data:{},
      type:'GET',
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(respuesta){
        calle.val(respuesta.response[0].calle);
        numero.val(respuesta.response[0].numero);
        municipio.val(respuesta.response[0].municipio);
        colonia.val(respuesta.response[0].colonia);
        estado.val(respuesta.response[0].estado);
        pais.val(respuesta.response[0].pais);
        cp.val(respuesta.response[0].cp);
      },
      error: function(er){
        alert("Error");
      }
    })
   });
});

$(function() {
  $('#btnEditar').click(function() {
    var calle = $('#calle').val();
    var numero = $('#numero').val();
    var municipio = $('#municipio').val();
    var colonia = $('#colonia').val();
    var estado = $('#estado').val();
    var pais = $('#pais').val();
    var cp = $('#cp').val();
    var id = $('#selectAlumno').val();
    //alert(nombre+apellidoP+apellidoM);
    $.ajax({
      url:'http://localhost:3000/estudiante/actualizar',
      data:{
         id: id,
         calle : calle,
         numero : numero,
         municipio : municipio,
         colonia : colonia,
         estado : estado,
         pais : pais,
         cp : cp
      },
      type:'PUT',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType:'json',
      success:function(respuesta){
        alert("Información cambiada");
        location.reload();
      },
      error:function(er){
        alert("Error.");
      }
    });
  });
});