<?php

    include '../Config/Config.php';

    $DETAIL = $con -> query("SELECT * FROM user_inf;");

    while ( $row = $DETAIL -> fetch_assoc()) {

        $dbdata[] = $row;

    }

    echo json_encode($dbdata);

?>