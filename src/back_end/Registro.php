<?php
    class Registro{
        public function registro(){
            $json_data = (file_get_contents('../dbinfo.json'));
            $db_data = json_decode($json_data);
            $conn = new mysqli($db_data->host, $db_data->user, $db_data->password, $db_data->dbname);
    
            $query = "INSERT INTO teste(nome) VALUES ('Marinho')";
            $conn->query($query);
            $conn->close();
        } 
    }
   
?>