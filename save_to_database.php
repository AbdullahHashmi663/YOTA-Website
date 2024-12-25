<?php
// Database connection details
$host = 'localhost'; // Replace with your host
$dbname = 'usermanagement'; // Replace with your database name
$username = 'root'; // Replace with your database username
$password = ''; // Replace with your database password

try {
    // Establish database connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Check if POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Debug incoming data
    error_log("Incoming POST data: " . file_get_contents('php://input'));

    $input = json_decode(file_get_contents('php://input'), true);

    // Validate and sanitize input
    $user_id = htmlspecialchars($input['user_id'] ?? null); // Ensure this is provided (e.g., from session)
    $full_name = htmlspecialchars($input['fullName'] ?? '');
    $degree = htmlspecialchars($input['degree'] ?? '');
    $department = htmlspecialchars($input['department'] ?? '');
    $semester = htmlspecialchars($input['semester'] ?? '');
    $cgpa = floatval($input['cgpa'] ?? 0);
    $portfolio = htmlspecialchars($input['portfolio'] ?? '');
    $experience = htmlspecialchars($input['experience'] ?? '');

    if (empty($full_name) || empty($degree) || empty($department)) {
        http_response_code(400);
        echo json_encode(['error' => 'Required fields are missing']);
        exit;
    }
    

    // Insert data into applicants table
    $sql = "INSERT INTO applicants (user_id, full_name, degree, department, semester, cgpa, portfolio, experience)
            VALUES (:user_id, :full_name, :degree, :department, :semester, :cgpa, :portfolio, :experience)";
    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute([
            ':user_id' => $user_id,
            ':full_name' => $full_name,
            ':degree' => $degree,
            ':department' => $department,
            ':semester' => $semester,
            ':cgpa' => $cgpa,
            ':portfolio' => $portfolio,
            ':experience' => $experience,
        ]);
        echo json_encode(['message' => 'Application submitted successfully!']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
}
?>
