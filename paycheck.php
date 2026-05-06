<?php
$hours = isset($_POST['hours']) ? $_POST['hours'] : 0;
$rate = isset($_POST['rate']) ? $_POST['rate'] : 0;
$pay = $hours * $rate;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Paycheck Results</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<!-- Custom Cursor -->
<div class="cursor"></div>

<!-- Navbar -->
<ul class="navbar">
  <li><a href="index.html">Home</a></li>
  <li><a href="projects.html">PHP Projects</a></li>
  <li><a href="about.html">About</a></li>
</ul>

<div class="container">
    <h2>Paycheck Results</h2>

    <div class="problem">
        <p><strong>Hours Worked:</strong> <?php echo $hours; ?></p>
        <p><strong>Rate of Pay:</strong> $<?php echo number_format($rate, 2); ?></p>
        <p><strong>Total Pay:</strong> $<?php echo number_format($pay, 2); ?></p>
    </div>

    <div class="button-container">
        <button onclick="location.href='paycheck.html'">Go Back</button>
    </div>
</div>

<script src="cursor.js"></script>

</body>
</html>