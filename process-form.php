<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Виконайте код для відправки електронної пошти на вашу пошту тут
    // Використайте, наприклад, функцію mail() або сторонню бібліотеку, таку як PHPMailer

    // Приклад з використанням mail():
    $to = "dimasukgaborak@gmail.com";
    $subject = "New Email";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    echo "success";
} else {
    echo "error";
}

