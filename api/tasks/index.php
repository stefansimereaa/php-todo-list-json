<?php
// Recupero 1' indirizzo del file che simula il database
$database_path = __DIR__ . '/../../api/database/tasks.json';

// leggo il contenuto JSON
$json_data = file_get_contents($database_path);


// Lo converto in un array PHP
$tasks = json_decode($json_data, true);

$task_text = $_POST['task'] ?? null;

if ($task_text) {
    $new_task = [
        'id' => count($tasks) + 1,
        'text' => $task_text,
        'done' => false
    ];


    $tasks[] = $new_task;

    $json_tasks = json_encode($tasks);
    file_put_contents($database_path, $json_tasks);

    header('Content-Type: applications/json');
    echo json_encode($new_task);
} else {

    header('Content-Type: applications/json');

    echo json_encode($tasks);
}
