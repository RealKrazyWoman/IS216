<?php
require_once 'common.php';

$id = '';
$dao = new PostDAO();
$status = false;
if( isset($_GET['id']) ) {
    $id = $_GET['id'];
    $post_object = $dao->get($id); // Get a Post object

    if (isset($post_object)) { // Delete if the object exists
        $status = $dao->delete($id); // Get delete status TRUE/FALSE
    }
}

if ($status)
    $result["status"] = "Post deleted successfully";
else 
    $result["status"] = "Post was not deleted";

$postJSON = json_encode($result);
echo $postJSON;
?>

