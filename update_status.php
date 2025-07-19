<?php
include 'db.php';

if (isset($_POST['id'])) {
    $id = intval($_POST['id']);
    $stmt = $conn->prepare("UPDATE poses SET status = 0 WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Status updated to 0";
    } else {
        echo "Failed to update status";
    }

    $stmt->close();
} else {
    echo "ID not provided";
}
?>
