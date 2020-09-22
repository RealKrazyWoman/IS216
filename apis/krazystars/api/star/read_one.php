<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
// include database and object files
include_once '../config/database.php';
include_once '../objects/Star.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
// prepare product object
$star = new Star($db);
  
// set ID property of record to read
$star->id = isset($_GET['id']) ? $_GET['id'] : die();
  
// read the details of product to be edited
$star->readOne();
  
if($star->fullname != null) {
    // create array
    $item = array(
        "id" => $star->id,
        "gender" => $star->gender,
        "fullname" => $star->fullname,
        "photo_background_url" => $star->photo_background_url,
        "photo_profile_url" => $star->photo_profile_url,
        "quote" => html_entity_decode($star->quote),
        "wikipedia_url" => $star->wikipedia_url,
        "imdb_url" => $star->imdb_url
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