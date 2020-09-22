<?php
    class Hero {
    
        // database connection and table name
        private $conn;
        private $table_name = "hero";
   
        // object properties
        public $id;
        public $name;
        public $class;
        public $battlepoint_cost;
        public $diamond_cost;
        public $movement_speed;
        public $physical_attack;
        public $physical_defense;
        public $magic_power;
        public $armor;
        public $magic_resistance;
        public $hp;
        public $mana;
        public $attack_speed;
        public $hp_regen_rate;
        public $mana_regen_rate;
        public $img_profile_url;
        public $description;
            
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
                            hero";

        
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
                            hero
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

            /*
                public $id;
                public $name;
                public $class;
                public $battlepoint_cost;
                public $diamond_cost;
                public $movement_speed;
                public $physical_attack;
                public $physical_defense;
                public $magic_power;
                public $armor;
                public $magic_resistance;
                public $hp;
                public $mana;
                public $attack_speed;
                public $hp_regen_rate;
                public $mana_regen_rate;
                public $img_profile_url;
                public $description;
            */
        
            // set values to object properties
            $this->name = $row['name'];
            $this->class = $row['class'];
            $this->battlepoint_cost = $row['battlepoint_cost'];
            $this->diamond_cost = $row['diamond_cost'];
            $this->movement_speed = $row['movement_speed'];
            $this->physical_attack = $row['physical_attack'];
            $this->physical_defense = $row['physical_defense'];
            $this->magic_power = $row['magic_power'];
            $this->armor = $row['armor'];
            $this->magic_resistance = $row['magic_resistance'];
            $this->hp = $row['hp'];
            $this->mana = $row['mana'];
            $this->attack_speed = $row['attack_speed'];
            $this->hp_regen_rate = $row['hp_regen_rate'];
            $this->mana_regen_rate = $row['mana_regen_rate'];
            $this->img_profile_url = $row['img_profile_url'];
            $this->description = $row['description'];
        }

        // search by class
        public function search_by_class($search_term) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            hero
                        WHERE
                            class = ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
                
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
                            hero
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