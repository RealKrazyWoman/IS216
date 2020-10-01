<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$food_item_name = "";
$chef = "Gordon Ramsay";

if( isset($_GET["f"]) ) {
    // Retrieve food item name from the query string
    $food_item_name = $_GET["f"];
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "You need to supply a food item name!")
    );
    exit;
}


// Intentionally sleep - so that it simulates cooking
sleep(7);

$date = new DateTime(null, new DateTimeZone('Asia/Singapore'));

$food_item = array(
    "name" => $food_item_name,
    "chef" => $chef,
    "delivery_datetime" => $date->format('Y-m-d H:i:sP')
);


// set response code - 200 OK
http_response_code(200);

// show products data in json format
echo json_encode($food_item);

?>