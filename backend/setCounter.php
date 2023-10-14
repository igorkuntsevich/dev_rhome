<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

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

// Получаем IP-адрес клиента
$client_ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';

if ($page) {
    if (!isset($counters[$page]) || !is_array($counters[$page])) {
        // Если счетчик для данной страницы еще не создан или не массив, создаем его
        $counters[$page] = array(
            'count' => 0,
            'ips' => array()
        );
    }

    if (!in_array($client_ip, $counters[$page]['ips'])) {
        // Увеличиваем счетчик и добавляем IP в массив
        $counters[$page]['count']++;
        array_push($counters[$page]['ips'], $client_ip);

        // Сохраняем обновленные счетчики
        file_put_contents($file_path, json_encode($counters));
        echo "Counter for " . $page . " incremented.";
    } else {
        echo "Counter for " . $page . " not incremented. IP already registered.";
    }
} else {
    echo "No page parameter provided.";
}
?>
