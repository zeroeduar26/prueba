<?php

    $fullname = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $destinatario = 'zeroeduar26@gmail.com';  //correo al q se enviara el formulario

    $carta = "De: $fullname  \n";
    $carta .="Correo: $email \n";
    $carta .="Telefono: $telefono \n";
    $carta .="Asunto: $asunto \n";
    $carta .="Mensaje: $mensaje";

    /*------------*/
    mail($destinatario, $carta);

¿>