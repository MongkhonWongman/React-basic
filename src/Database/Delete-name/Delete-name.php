<?php

    include '../Config/Config.php';

    $SEQ = $_GET['Seq'];

    $DELETE = "DELETE FROM `user_inf` WHERE u_seq = '$SEQ';";
    $con -> query($DELETE);

?>