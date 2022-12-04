<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'bansari');
define('DB_PASS', '123456');
define('DB_NAME', 'bakery_order');

$conection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if($conection->connect_erro) {
    die ('Connection Failed' .$conection->connect_error);
}
<h1>echo'connected'</h1>
?>