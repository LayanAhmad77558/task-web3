<?php
include 'db.php';

if (isset($_POST['id'])) {
    $id = intval($_POST['id']);  
    $stmt = $conn->prepare("DELETE FROM poses WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Deleted!";
    } else {
        echo "No record deleted.";
    }

    $stmt->close();
} else {
    echo "ID not set.";
}
?>
