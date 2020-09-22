<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/core.php';
include_once '../config/database.php';
include_once '../objects/Star.php';
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$star = new Star($db);

$stmt = '';
$num = '';
// get search query
if( isset($_GET["g"]) && isset($_GET["n"]) ) {
    // Gender and Name
    $stmt = $star->search_by_gender_name($_GET["g"], $_GET["n"]);

}
elseif( isset($_GET["g"]) && !isset($_GET["n"]) ) {
    // Gender only
    $stmt = $star->search_by_gender($_GET["g"]);
}
elseif( !isset($_GET["g"]) && isset($_GET["n"]) ) {
    // Name only
    $stmt = $star->search_by_name($_GET["n"]);
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "Query parameters are not set. No results.")
    );
    exit;
}
  
// See query count
$num = $stmt->rowCount();
  
// check if more than 0 record found
if($num > 0) {
  
    // products array
    $result_arr = array();
    $result_arr["records"] = array();
  
    while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
  
        $item = array(
            "id" => $id,
            "gender" => $gender,
            "fullname" => $fullname,
            "photo_background_url" => $photo_background_url,
            "photo_profile_url" => $photo_profile_url,
            "quote" => html_entity_decode($quote),
            "wikipedia_url" => $wikipedia_url,
            "imdb_url" => $imdb_url
        );
  
        array_push($result_arr["records"], $item);
    }

    // Add info node (1 per response)
    $date = new DateTime(null, new DateTimeZone('Asia/Singapore'));
    $result_arr["info"] = array(
        "author" => "Krazy Woman",
        "response_datetime_singapore" => $date->format('Y-m-d H:i:sP')
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // show products data
    echo json_encode($result_arr);
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "No items found.")
    );
}
?>