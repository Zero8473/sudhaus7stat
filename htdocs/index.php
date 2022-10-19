<?php
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="css/main.css" rel="stylesheet" type="text/css">
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>-->
    <script src="JS/toggle.js"></script>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sudhaus7 - Agentur für starke Kommunikation</title>
</head>
<body>
    <header>
        <figure class="logo col-6">
            <img src="images/S7Logo.png" alt="sudhaus7">
        </figure>
        <div id="header-nav" class="col-6">
                <ul>
                    <li><a href="">Agentur</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
        </div>
        <div class="toolbar">
            <figure><img src="images/phone.png" alt="phone icon"></figure>
            <figure><img src="images/mail.png" alt="mail icon"></figure>
            <figure><img src="images/facebook.png" alt="facebook icon"></figure>
            <figure><img src="images/instagram.png" alt="instagram icon"></figure>
        </div>
    </header>

    <div class="animated brauerei-background">
        <div class="container-header">
            <p class="header">Agentur für starke Kommunikation</p>
        </div>
        <div class="container-subheader">
            <p class="subheader">Stuttgart - Wien</p>
        </div>
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




</body>
</html>

