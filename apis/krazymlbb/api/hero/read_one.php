<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
// include database and object files
include_once '../config/database.php';
include_once '../objects/Hero.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
// prepare product object
$hero = new Hero($db);
  
// set ID property of record to read
$hero->id = isset($_GET['id']) ? $_GET['id'] : die();
  
// read the details of product to be edited
$hero->readOne();
  
if($hero->name != null) {
    // create array
    $item = array(
        "id" => $hero->id,
        "name" => $hero->name,
        "class" => $hero->class,

        "purchase" => [
            "battlepoint_cost" => $hero->battlepoint_cost,
            "diamond_cost" => $hero->diamond_cost
        ],

        "stats" => [
            "movement_speed" => $hero->movement_speed,
            "physical_attack" => $hero->physical_attack,
            "physical_defense" => $hero->physical_defense,
            "magic_power" => $hero->magic_power,
            "armor" => $hero->armor,
            "magic_resistance" => $hero->magic_resistance,
            "hp" => $hero->hp,
            "mana" => $hero->mana,
            "attack_speed" => $hero->attack_speed,
            "hp_regen_rate" => $hero->hp_regen_rate,
            "mana_regen_rate" => $hero->mana_regen_rate
        ],
        
        "img_profile_url" => $hero->img_profile_url,
        "description" => html_entity_decode($hero->description)
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($item);
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user item does not exist
    echo json_encode(array("message" => "Item does not exist."));
}
?>