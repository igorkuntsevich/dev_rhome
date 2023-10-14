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

// Убираем IP-адреса из ответа
foreach ($counters as $page => $data) {
    if (is_array($data) && isset($data['count'])) {
        $cleanedCounters[$page] = array("count" => $data['count']);
    }
}

echo json_encode($cleanedCounters);
?>
