<?php

$recepient = "gridex2018@gmail.com";
$sitename = "gridex.net";

$csvFile = 'myCSVfile.csv';
$csvData = "{$_POST['email']};{$_POST['region']};{$_POST['phone']};{$_POST['telegram']}\n";
file_put_contents( $csvFile, $csvData, FILE_APPEND );

$email = trim($_POST["email"]);
$code = trim($_POST["region"]);
$phone = trim($_POST["phone"]);
$telegram = trim($_POST["telegram"]);
$message = "email: $email \nCode: $code \nPhone:  $phone \ntelegram: $telegram";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");