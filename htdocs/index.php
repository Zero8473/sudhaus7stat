<?php
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="CSS/main.css" rel="stylesheet" type="text/css">
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>-->
    <script src="JavaScript/toggle.js"></script>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sudhaus7 - Agentur für starke Kommunikation</title>
</head>
<body>
    <header>
        <?php require_once './content/header.php'?>
    </header>

    <div class="animated brauerei-background">
        <?php require_once './content/background.php'?>
    </div>

    <div class="campaign-container">
        <?php require_once './content/campaign.php'; ?>
    </div>

    <div class="introduction-container">
        <?php require_once './content/introduction.php'?>
    </div>

    <div class="variety-section-container">
        <?php require_once './content/variety.php'?>
    </div>

    <div class="gallery-container fade-in-left anim-slow">
        <?php require_once './content/gallery.php'?>
    </div>

    <div class="news-container">
        <?php require_once './content/news.php'?>
    </div>

    <div class="contact-container">
        <?php require_once './content/contact.php'?>
    </div>

    <div class="footer-container">
        <?php require_once './content/service.php'?>
    </div>




</body>
</html>

