<?php

$recepient = "diabbbet@gmail.com";
$sitename = "Название сайта";

$radius = trim($_POST["radius"]);
$width = trim($_POST["label-width"]);
$height = trim($_POST["label-height"]);
$phone = trim($_POST["phone"]);
$message = "Радиус: $radius \nШирина: $width \Высота: $height \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");