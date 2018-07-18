<?php

$recepient = "support@silkroadmining.io";
$sitename = "silkroadmining.io";

$csvFile = 'myCSVfile.csv';
$csvData = "{$_POST['email']}";
file_put_contents( $csvFile, $csvData, FILE_APPEND );

$email = trim($_POST["email"]);
$message = "email: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");