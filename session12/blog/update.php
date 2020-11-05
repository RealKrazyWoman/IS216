<?php

require_once 'common.php';

$status = false;
//var_dump($_POST);

if( isset($_POST['id']) && isset($_POST['subject']) && isset($_POST['entry']) && isset($_POST['mood']) ) {
    $id = $_POST['id'];
    $subject = $_POST['subject'];
    $entry = $_POST['entry'];
    $mood = $_POST['mood'];

    $dao = new PostDAO();
    $status = $dao->update($id, $subject, $entry, $mood);
}


?>
<html>
<body>
    <?php
        if( $status ) {
            echo "<h1>Update was successful!</h1>";
            echo "Click <a href='display.php'>here</a> to return to Main Page";
        }
        else {
            echo "<h1>Update was NOT successful!</h1>";
        }
    ?>
</body>
</html>