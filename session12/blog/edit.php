<?php

require_once 'common.php';

$id = '';
if( isset($_GET['id']) ) {
    $id = $_GET['id'];

    $dao = new PostDAO();
    $post_object = $dao->get($id); // Get a Post object
    //var_dump($post_object);
}

?>
<html>
<body>

    <form action='update.php' method='POST'>

    <?php
        if($post_object) {

            // Hidden Input
            echo "
                <input type='hidden' name='id' value='{$post_object->getID()}'>
            ";

            echo "
                Create Timestamp: {$post_object->getCreateTimestamp()}
                <br>

                Last Update Timestamp: {$post_object->getUpdateTimestamp()}
                <br>
            ";

            echo "
                Subject: <input type='text' name='subject' size='30' value='{$post_object->getSubject()}'>
                <br>
            ";

            echo "
                Entry: <br>
                <textarea name='entry' cols='80' rows='5'>{$post_object->getEntry()}</textarea>
                <br>
            ";

            $selected_happy = '';
            $selected_sad = '';
            $selected_angry = '';

            $mood = $post_object->getMood();
            
            if( $mood == 'Happy' )
                $selected_happy = 'selected';
            else if( $mood == 'Sad' )
                $selected_sad = 'selected';
            else if( $mood == 'Angry' )
                $selected_angry = 'selected';
            
            echo "
                Mood: <select name='mood'>
                        <option value='Happy' $selected_happy>Happy</option>
                        <option value='Sad' $selected_sad>Sad</option>
                        <option value='Angry' $selected_angry>Angry</option>
                      </select>
                <br>
            ";

            echo "
                <br>
                <input type='submit' value='Update Info'>
            ";
        }
    ?>

    </form>

    <hr>
    Click <a href='display.php'>here</a> to return to Main Page

</body>
</html>