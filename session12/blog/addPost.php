<?php
require_once 'common.php';
$status = false;
$result = [];
if( isset($_REQUEST['subject']) && isset($_REQUEST['entry']) && isset($_REQUEST['mood']) ) {
    $subject = $_REQUEST['subject'];
    $entry = $_REQUEST['entry'];
    $mood = $_REQUEST['mood'];

    $dao = new PostDAO();
    $status = $dao->add($subject, $entry, $mood);
}
if ($status)
    $result["status"] = "Post added successfully";
else 
    $result["status"] = "Post was not added";

$postJSON = json_encode($result);
echo $postJSON;
?>


