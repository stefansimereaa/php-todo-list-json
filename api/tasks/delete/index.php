<?php
// Recupero 1' indirizzo del file che simula il database
$database_path = __DIR__ . '/../../../api/database/tasks.json';
// leggo il contenuto JSON
$json_data = file_get_contents($database_path);
// Lo converto in un array PHP
$tasks = json_decode($json_data, true);

$id = $_POST['id'] ?? null;
if ($id) {
    $updated_tasks = [];
    foreach ($tasks as $task) {
        if ($task['id'] != $id)
            $updated_tasks[] = $task;
    }
    $task = json_encode($updated_tasks);
    file_put_contents($database_path, $task);
}
echo $task;
