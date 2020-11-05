<?php

class Post {
    private $id;
    private $create_timestamp;
    private $update_timestamp;
    private $subject;
    private $entry;
    private $mood;

    public function __construct($id, $create_timestamp, $update_timestamp, $subject, $entry, $mood) {
        $this->id = $id;
        $this->create_timestamp = $create_timestamp;
        $this->update_timestamp = $update_timestamp;
        $this->subject = $subject;
        $this->entry = $entry;
        $this->mood = $mood;
    }

    public function getID() {
        return $this->id;
    }

    public function getCreateTimestamp() {
        return $this->create_timestamp;
    }

    public function getUpdateTimestamp() {
        return $this->update_timestamp;
    }

    public function getSubject() {
        return $this->subject;
    }

    public function getEntry() {
        return $this->entry;
    }

    public function getMood() {
        return $this->mood;
    }

}

?>