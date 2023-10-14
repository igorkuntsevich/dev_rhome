<?php
$file_path = 'counters.json';

// Считываем текущие значения счетчиков
$counters = array();
if (file_exists($file_path)) {
    $content = file_get_contents($file_path);
    $decoded_content = json_decode($content, true);
    if (is_array($decoded_content)) {
        $counters = $decoded_content;
    }
}

// Получаем параметр page из запроса
$page = isset($_GET['page']) ? $_GET['page'] : null;

if ($page) {
    if (isset($counters[$page]) && is_array($counters[$page]) && isset($counters[$page]['count'])) {
        echo json_encode(array("count" => $counters[$page]['count']));
    } else {
        echo json_encode(array("count" => 0));
    }
} else {
    echo json_encode(array("count" => 0));
}
?>
