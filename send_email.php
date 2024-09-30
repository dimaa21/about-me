<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримати дані з форми
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Перевірка, що всі поля заповнені
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Налаштування електронної пошти
        $to = "d.gaborak21@gmail.com"; // Змініть на свою електронну пошту
        $subject = "New Message from Contact Form";
        $body = "Name: $name\nEmail: $email\nMessage:\n$message";
        $headers = "From: $name <$email>";

        // Надіслати електронну пошту
        if (mail($to, $subject, $body, $headers)) {
            // Якщо успішно надіслано, повертає 200
            http_response_code(200);
            echo "Message sent successfully!";
        } else {
            // Якщо не вдалося надіслати, повертає 500
            http_response_code(500);
            echo "There was an error sending your message.";
        }
    } else {
        // Якщо дані не повні, повертає 400
        http_response_code(400);
        echo "Please fill in all required fields.";
    }
} else {
    // Якщо запит не POST, повертає 405
    http_response_code(405);
    echo "Method not allowed.";
}
?>
