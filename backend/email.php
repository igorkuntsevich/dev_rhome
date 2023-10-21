<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

// Получение JSON из POST-запроса
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

// Проверка валидности JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    echo 'Invalid JSON';
    exit;
}

// Загрузка библиотеки PHPMailer и настройка параметров
require 'PHPMailer-5.2-stable/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'mailbe04.hoster.by';
$mail->SMTPAuth = true;
$mail->Username = 'postmaster@rhome.by';
$mail->Password = '*******';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('postmaster@rhome.by', 'rhome.by');
$mail->addAddress('neonchilkk@gmail.com', 'admin');
$mail->Subject = isset($data['subject']) ? $data['subject'] : 'Call request rhome.by';


// Преобразование массива данных в HTML
$htmlBody = "<h1>Эмейл с rhome.by</h1><ol>";

foreach ($data as $key => $value) {

        $htmlBody .= "<li><b>$key</b>: $value</li>";

}
 $htmlBody .="</ol>";


$mail->isHTML(true);
$mail->Body = $htmlBody;

if (!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
