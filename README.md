
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>

<body>
    <nav class="navbar navbar-expand-md fixed-top custom-navbar">
        <a class="navbar-brand logo" href="#">🎄 Christmas Countdown</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon nav-icon">☰</span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#countdown">Countdown</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#gifts">Grab Your Gift</a>
                </li>
            </ul>
        </div>
    </nav>

    <div id="countdown" class="countdown-container d-flex align-items-center">
        <div class="overlay"></div>
        <div class="container text-center content">
            <h2>⏳ Countdown to Christmas</h2>

            <p class="filler-text mx-auto">
                The most joyful season of the year is almost here.
                Let’s count every second to Christmas magic 🎅✨
            </p>

            <div class="d-flex justify-content-center flex-wrap mt-4">
                <div class="time-box">
                    <span id="days">00</span>
                    <p class="time-label">Days</p>
                </div>
                <div class="time-box">
                    <span id="hours">00</span>
                    <p class="time-label">Hours</p>
                </div>
                <div class="time-box">
                    <span id="minutes">00</span>
                    <p class="time-label">Minutes</p>
                </div>
                <div class="time-box">
                    <span id="seconds">00</span>
                    <p class="time-label">Seconds</p>
                </div>
            </div>

            <p id="christmas-message"></p>
        </div>
    </div>

    <div id="gifts" class="gift-container d-flex align-items-center">
        <div class="overlay"></div>
        <div class="container text-center content">
            <h2>🎁 Grab Your Christmas Gift</h2>

            <p class="filler-text mx-auto">
                Click the button below and unwrap a festive surprise
                designed to bring joy and warmth 🎄🎁
            </p>

            <button id="giftBtn" class="gift-btn mb-4">
                Open My Gift 🎁
            </button>

            <div class="gift-result">
                <img id="giftImage" class="img-fluid rounded d-none random-image" src="" alt="Christmas Gift" />
                <p id="giftDesc" class="gift-description mt-3"></p>
            </div>
        </div>
    </div>

    <div class="footer text-center">
        <p class="footer-title">🎄 Wishing You a Merry Christmas🎅✨</p>
        <p class="footer-subtitle">May your life be filled with joy, peace, and success.</p>
    </div>

</body>

</body>

</html>
