<?php
$filename = 'currency.json';
$message = '';
$currentRate = 0;

if (file_exists($filename)) {
    $jsonContent = json_decode(file_get_contents($filename), true);
    $currentRate = isset($jsonContent['rate']) ? $jsonContent['rate'] : 0;
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'];
    $rate = $_POST['rate'];

    if ($password === '123454321') {
        file_put_contents($filename, json_encode(['rate' => $rate]));
        $message = "Курс валюты успешно обновлен.";
        $currentRate = $rate;
    } else {
        $message = "Неверный пароль.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Установка курса валюты</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        label {
            min-width:120px;
            display:inline-block;
            font-weight: bold;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
            border-radius: 4px;
        }
        .info {
            font-size: 18px;
            color: #555;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Введите курс доллара</h1>

    <div class="info">Текущий курс: <?php echo $currentRate; ?></div>

    <form method="POST">
        <div style="margin:10px 0">
            <label for="password">Пароль:</label>
            <input type="password" id="password" name="password">
        </div>
        <div>
            <label for="rate">Курс доллара:</label>
            <input type="text" id="rate" name="rate">
        </div>
        <div>
            <button type="submit">Сохранить</button>
        </div>
    </form>

    <?php
    if ($message) {
        echo "<div class='info'>$message</div>";
    }
    ?>
</div>

</body>
</html>
