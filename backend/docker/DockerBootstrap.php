<?php
$HOST=getenv('DB_HOST');
$USERNAME=getenv('DB_USERNAME');
$PASSWORD=getenv('DB_PASSWORD');
$DATABASE=getenv('DB_DATABASE');
$TRY_NUMBERS=0;
$MAX_TRIES=60;

while(1) {
    if ($TRY_NUMBERS==$MAX_TRIES) die("Max number of tries reached");
    try {
        $conn = new PDO("mysql:host=$HOST;dbname=$DATABASE", $USERNAME, $PASSWORD);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        system("clear");
        echo "Connected successfully\n\n";

        if (!file_exists(".env")) system("cp .env.development .env");
        if (file_exists(".env")) system("php /app/artisan key:generate");

        system("php /app/artisan migrate");
        system("php /app/artisan serve --host=0.0.0.0");
        break;
    } catch(PDOException $e) {
        // echo "Connection failed: " . $e->getMessage();
        system("clear");
        $TRY_NUMBERS += 1;
        system("echo \"Trying to reach the database server $TRY_NUMBERS/$MAX_TRIES\"");
        sleep(2);
    }
}
?>
