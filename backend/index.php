<?php
// Путь к папке PHPMailer-master
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Включение всех ошибок
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo 'Invalid JSON';
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPDebug = 2;
    $mail->Host = 'mailbe05.hoster.by';
    $mail->SMTPAuth = true;
    $mail->Username = 'postmaster@cdekk.by';
    $mail->Password = 'qie4zeYgh1!';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('postmaster@cdekk.by', 'cdekk.by');
    $mail->addAddress('viktormoskalev07@gmail.com', 'admin');

    $mail->Subject = isset($data['subject']) ? $data['subject'] : 'Call request rhome.by';

    $htmlBody = "<h1>Эмейл с rhome.by</h1><ol>";
    foreach ($data as $key => $value) {
        $htmlBody .= "<li><b>$key</b>: $value</li>";
    }
    $htmlBody .= "</ol>";

    $mail->isHTML(true);
    $mail->Body = $htmlBody;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
