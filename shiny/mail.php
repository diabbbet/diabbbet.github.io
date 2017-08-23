<?php

$recepient = "diabbbet@gmail.com";
$sitename = "Название сайта";

$radius = trim($_POST["radius"]);
$phone = trim($_POST["phone"]);
$message = "Радиус: $radius \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");