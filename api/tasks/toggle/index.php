<?php

$database_path = __DIR__ . '/../../../api/database/tasks.json';

$json_data = file_get_contents($database_path);

$tasks = json_decode($json_data, true);

$id = $_POST['id'] ?? null;
if ($id) {
    $updated_tasks = [];
    foreach ($tasks as $task) {
        if ($task['id'] == $id) $task['done'] = !$task['done'];
        $updated_tasks[] = $task;
    }
    $task = json_encode($updated_tasks);
    file_put_contents($database_path, $task); // Correggi questa riga
}
echo $task; // Poiché stai restituendo solo le attività aggiornate, cambia questa riga in "echo $task;"
