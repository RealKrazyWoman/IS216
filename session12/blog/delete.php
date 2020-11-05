<?php

require_once 'common.php';

$id = '';
$dao = new PostDAO();

if( isset($_GET['id']) ) {
    $id = $_GET['id'];
    $post_object = $dao->get($id); // Get a Post object
}

?>
<html>
<body>

    <form action='delete.php' method='POST'>

    <?php

        // Case 1 - came to delete.php from display.php
        if( !isset($_POST['confirm']) ) {

            echo "
                <input type='hidden' name='id' value='{$post_object->getID()}'>
            ";

            echo "
                <table border='1'>

                    <tr>
                        <td>Subject</td>
                        <td>{$post_object->getSubject()}</td>
                    </tr>

                    <tr>
                        <td>Entry</td>
                        <td>{$post_object->getEntry()}</td>
                    </tr>

                    <tr>
                        <td>Mood</td>
                        <td>{$post_object->getMood()}</td>
                    </tr>

                    <tr>
                        <td>Create Timestamp</td>
                        <td>{$post_object->getCreateTimestamp()}</td>
                    </tr>

                    <tr>
                        <td>Update Timestamp</td>
                        <td>{$post_object->getUpdateTimestamp()}</td>
                    </tr>

                </table>
            ";

            echo "
                <br>
                <input type='submit' name='confirm' value='Confirm Delete'>
            ";
        }
        // Case 2 - came to delete.php from delete.php (user clicked on SUBMIT button)
        // This time, we want to go ahead with deleting this Post in post table
        else {
            $id = $_POST['id'];
            $status = $dao->delete($id); // Get delete status TRUE/FALSE

            // Success
            if( $status ) {
                echo "<h3>Delete was successful</h3>";
            }
            // Fail
            else {
                echo "<h3>Delete was NOT successful</h3>";
            }
        }
    ?>

    </form>

    <hr>
    Click <a href='display.php'>here</a> to return to Main Page

</body>
</html>