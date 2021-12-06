<?php
    $destino = "augustoc.98@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;


    mail($destino,"Mensaje de pagina web", $contenido);
    // header("Location:../gracias.html");
?>