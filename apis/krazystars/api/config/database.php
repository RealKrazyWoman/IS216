<?php

class Database {

    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "krazystars";
    private $username = "root";
    private $password = "root"; // MAMP "root", WAMP empty string
    private $port = 3306; // Check in PHPMyAdmin for port number
    public $conn;

    // get the database connection
    public function getConnection() {

        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";port=" . $this->port, 
                $this->username, 
                $this->password);

            $this->conn->exec("set names utf8");
        }
        catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}

?>