<?php

$recepient = "diabbet@gmail.com";
$sitename = "Название сайта";

$email = trim($_POST["email"]);
$code = trim($_POST["region"]);
$phone = trim($_POST["phone"]);
$telegram = trim($_POST["telegram"]);
$message = "email: $email \nPhone: $code $phone \nТекст: $telegram";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");