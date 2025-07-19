<?php
include 'db.php';

$result = mysqli_query($conn, "SELECT * FROM poses ORDER BY id DESC");
$poses = [];

while ($row = mysqli_fetch_assoc($result)) {
    $poses[] = $row;
}

echo json_encode($poses);
?>
