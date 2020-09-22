<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objects/Star.php';
  
// utilities
$utilities = new Utilities();
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$star = new Star($db);
  
// query products
$stmt = $star->readPaging($from_record_num, $records_per_page);
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
  
  
    // include paging
    $total_rows = $star->count();
    $page_url = "{$home_url}star/read_paging.php?";
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