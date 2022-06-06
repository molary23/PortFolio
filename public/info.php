<?php
$data = json_decode(file_get_contents("php://input"), TRUE);
//$requestType = $data['send'] ;

echo json_encode($data);
