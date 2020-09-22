<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objects/Hero.php';
  
// utilities
$utilities = new Utilities();
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$hero = new Hero($db);
  
// query products
$stmt = $hero->readPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();
  
// check if more than 0 record found
if($num > 0) {
  
    // products array
    $result_arr = array();
    $result_arr["records"] = array();
    $result_arr["paging"] = array();
  
    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
  
        $item = array(
            "id" => $id,
            "name" => $name,
            "class" => $class,

            "purchase" => [
                "battlepoint_cost" => $battlepoint_cost,
                "diamond_cost" => $diamond_cost
            ],

            "stats" => [
                "movement_speed" => $movement_speed,
                "physical_attack" => $physical_attack,
                "physical_defense" => $physical_defense,
                "magic_power" => $magic_power,
                "armor" => $armor,
                "magic_resistance" => $magic_resistance,
                "hp" => $hp,
                "mana" => $mana,
                "attack_speed" => $attack_speed,
                "hp_regen_rate" => $hp_regen_rate,
                "mana_regen_rate" => $mana_regen_rate
            ],
            
            "img_profile_url" => $img_profile_url,
            "description" => html_entity_decode($description)
        );
  
        array_push($result_arr["records"], $item);
    }
  
    // include paging
    $total_rows = $hero->count();
    $page_url = "{$home_url}hero/read_paging.php?";
    $paging = $utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $result_arr["paging"] = $paging;

    // Add info node (1 per response)
    $date = new DateTime(null, new DateTimeZone('Asia/Singapore'));
    $result_arr["info"] = array(
        "author" => "Krazy Woman",
        "response_datetime_singapore" => $date->format('Y-m-d H:i:sP')
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($result_arr);
}
else {
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user item does not exist
    echo json_encode(
        array("message" => "No items found.")
    );
}
?>