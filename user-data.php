<?php
// Database connection
$host = "localhost";
$user = "root";
$password = ""; // Replace with your database password
$dbname = "usermanagement";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch user data (adjust the query based on your login mechanism or session variable)
$userId = 11; // Replace this with the dynamic user ID, e.g., from a session variable
$sql = "SELECT firstName, lastName, email FROM users WHERE id = $userId";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    echo json_encode($user);
} else {
    echo json_encode(["error" => "User-YOTA"]);
}

$conn->close();
?>
