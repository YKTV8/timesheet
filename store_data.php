<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the 'clockInTime' and 'clockOutTime' values are present in the POST data
    if (isset($_POST['clockInTime']) && isset($_POST['clockOutTime'])) {
        $clockInTime = $_POST['clockInTime'];
        $clockOutTime = $_POST['clockOutTime'];

        // Perform any necessary data validation or sanitization here

        // Process the data (e.g., store it in a database or write to a file)
        // Replace the following lines with your desired data storage logic
        $data = "Clock In: $clockInTime\nClock Out: $clockOutTime";
        file_put_contents('timesheet.txt', $data);

        // Send a response back to the frontend
        echo 'Data stored successfully.';
    } else {
        // Handle missing data error
        echo 'Error: Missing clock-in or clock-out time.';
    }
} else {
    // Handle invalid request method error
    echo 'Error: Invalid request method.';
}
?>
