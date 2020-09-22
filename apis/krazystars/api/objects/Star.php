<?php
    class Star {
    
        // database connection and table name
        private $conn;
        private $table_name = "star";

   
        // object properties
        public $id;
        public $gender;
        public $fullname;
        public $photo_background_url;
        public $photo_profile_url;
        public $quote;
        public $wikipedia_url;
        public $imdb_url;
    
        // constructor with $db as database connection
        public function __construct($db) {
            $this->conn = $db;
        }

        // read stars
        public function read() {
        
            // select all query
            $query = "SELECT
                            *
                        FROM
                            star";

        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // read one item
        public function readOne() {
        
            // query to read single record
            $query = "SELECT
                            *
                        FROM
                            star
                        WHERE
                            id = ?
                        LIMIT
                            0,1";
        
            // prepare query statement
            $stmt = $this->conn->prepare( $query );
        
            // bind id of product to be updated
            $stmt->bindParam(1, $this->id);
        
            // execute query
            $stmt->execute();
        
            // get retrieved row
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
            // set values to object properties
            $this->gender = $row['gender'];
            $this->fullname = $row['fullname'];
            $this->photo_background_url = $row['photo_background_url'];
            $this->photo_profile_url = $row['photo_profile_url'];
            $this->quote = $row['quote'];
            $this->wikipedia_url = $row['wikipedia_url'];
            $this->imdb_url = $row['imdb_url'];
        }

        // search by gender and name
        public function search_by_gender_name($gender_term, $name_term) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            star
                        WHERE
                            gender = ? AND fullname LIKE ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // sanitize
            $name_term = htmlspecialchars( strip_tags($name_term) );
            $name_term = "%{$name_term}%";
        
            // bind
            $stmt->bindParam(1, $gender_term);
            $stmt->bindParam(2, $name_term);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // search by gender
        public function search_by_gender($search_term) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            star
                        WHERE
                            gender = ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
            
            $search_term = strtoupper($search_term);
            // bind
            $stmt->bindParam(1, $search_term);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // search by name
        public function search_by_name($search_term) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            star
                        WHERE
                            fullname LIKE ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // sanitize
            $search_term = htmlspecialchars( strip_tags($search_term) );
            $search_term = "%{$search_term}%";
        
            // bind
            $stmt->bindParam(1, $search_term);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // read with pagination
        public function readPaging($from_record_num, $records_per_page) {
        
            // select query
            $query = "SELECT
                        *
                        FROM
                            star
                        ORDER BY id
                        LIMIT ?, ?";
        
            // prepare query statement
            $stmt = $this->conn->prepare( $query );
        
            // bind variable values
            $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
            $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);
        
            // execute query
            $stmt->execute();
        
            // return values from database
            return $stmt;
        }

        // used for paging
        public function count() {
            $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
        
            $stmt = $this->conn->prepare( $query );
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
            return $row['total_rows'];
        }
    }
?>