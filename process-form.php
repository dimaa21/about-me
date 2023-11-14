<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Тут виконайте логіку відправлення електронного листа, наприклад, використовуючи функцію mail().

    // Приклад:
    $to = "dimasukgaborak@gmail.com";
    $subject = "Нове повідомлення від $name";
    $headers = "From: $email";
    $body = "Повідомлення від $name:\n\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Дякуємо! Ваше повідомлення успішно відправлено.";
    } else {
        echo "Помилка при відправці повідомлення. Спробуйте ще раз.";
    }
} else {
    echo "Невірний метод запиту.";
}


