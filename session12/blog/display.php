<?php

require_once 'common.php';

$dao = new PostDAO();
$posts = $dao->getAll(); // Get an Indexed Array of Post objects


?>


<html>
<body>

    <?php
        if( count($posts) > 0 ) {

            echo "<h1>My Blog Posts</h1>";

            echo "
                <table border='1'>
                    <tr>
                        <th>ID</th>
                        <th>Create Timestamp</th>
                        <th>Last Update Timestamp</th>
                        <th>Subject</th>
                        <th>Edit Link</th>
                        <th>Delete Link</th>
                    </tr>
            ";

            foreach($posts as $post_object ) {
                echo "
                    <tr>
                        <td>
                            {$post_object->getID()}
                        </td>
                        <td>
                            {$post_object->getCreateTimestamp()}
                        </td>
                        <td>
                            {$post_object->getUpdateTimestamp()}
                        </td>
                        <td>
                            {$post_object->getSubject()}
                        </td>
                        <td>
                            <a href='edit.php?id={$post_object->getID()}'>Edit</a>
                        </td>
                        <td>
                            <a href='delete.php?id={$post_object->getID()}'>Delete</a>
                        </td>
                    </tr>
                ";
            }

            echo "
                </table>
            ";
        }
    ?>

    <a href='add.html'><h3>Add a New Blog Post</h3></a>


</body>
</html>