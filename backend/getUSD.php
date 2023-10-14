<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$filename = 'currency.json';

if (file_exists($filename)) {
    $jsonContent = json_decode(file_get_contents($filename), true);
    if (isset($jsonContent['rate'])) {
        $currentRate = $jsonContent['rate'];
    } else {
        $currentRate = 0;
    }
    echo json_encode(['rate' => $currentRate]);
} else {
    echo json_encode(['rate' => 0]);
}
