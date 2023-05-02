<?php

    header("Access-Control-Allow-Origin: *");
    date_default_timezone_set('Asia/Bangkok');
    $DATE = date("Ymd");
    $TIME = date("Hi");
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "react_basic";

    $dbdata = array();

    // Create connection
    $con = new mysqli($servername, $username, $password, $db);

    // Check connection
    if ($con->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    //echo "Connected successfully";

?>