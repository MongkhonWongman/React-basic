<?php
    include '../Config/Config.php';

    $NAME = $_POST['Name'];

    echo($NAME);

    $ADD = "INSERT INTO `user_inf`(
                        `u_name`
                    ) VALUES (
                        '$NAME'
                    );";
    $con -> query($ADD);

?>