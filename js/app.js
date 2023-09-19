//Make a loaded that shows for 3 second before the page loads
$(window).on('load', function() {
    setInterval(function() {
        $(".loader").fadeOut("slow");
        loadGithubPage();
        removeopacity();
    }, 2000);
});

function loadGithubPage() {
    $(".github-readme-stats").fadeIn("slow");
    $( ".github-readme-stats" ).animate({
        marginLeft: "40%",
    }, 1000);
}

function removeopacity() {
    $( ".github-readme-stats-image" ).animate({
        opacity: 1,
    }, 2500);
}

// add rgb animated border
$(document).ready(function() {
    var red = 0;
    var reddiff = 1;
    var startRed = true;
    var green = 0;
    var greendiff = 1;
    var startGreen = false;
    var blue = 0;
    var bluediff = 1;
    var startBlue = false;
    setInterval(function() {
        if (startRed) {
            red = reddiff + red;
            if (red >= 255) {
                reddiff = reddiff * -1;
                startGreen = !startGreen;
            } else if (red <= 0) {
                reddiff = reddiff * -1;
                startGreen = !startGreen;
            }
        }

        if (startGreen) {
            green = greendiff + green;
            if (green >= 255) {
                greendiff = greendiff * -1;
                startBlue = !startBlue;
            } else if (green <= 0) {
                greendiff = greendiff * -1;
                startBlue = !startBlue;
            }
        }

        if (startBlue) {
            blue = bluediff + blue;
            if (blue >= 255) {
                bluediff = bluediff * -1;
                startRed = !startRed;
            } else if (blue <= 0) {
                bluediff = bluediff * -1;
                startRed = !startRed;
            }
        }
        console.log(red, green, blue);
        $(".github-readme-stats-image").css("border", "2px solid rgb(" + red + "," + green + "," + blue);
    }, 1);
});