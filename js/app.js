$(window).on('load', function() {
    setTimeout(function() {
        $(".word" ).animate({
            marginLeft: "100%",
        }, 1000);
        $(".word").fadeOut("slow");
        $(".overlay").fadeOut("slow");
        loadGithubPage();
        removeopacity();
    }, 2500);
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
        $(".github-readme-stats-image").css("border", "2px solid rgb(" + red + "," + green + "," + blue);
    }, 1);
});


function Ticker( elem ) {
	elem.lettering();
	this.done = false;
	this.cycleCount = 5;
	this.cycleCurrent = 0;
	this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~'.split('');
	this.charsCount = this.chars.length;
	this.letters = elem.find( 'span' );
	this.letterCount = this.letters.length;
	this.letterCurrent = 0;

	this.letters.each( function() {
		var $this = $( this );
		$this.attr( 'data-orig', $this.text() );
		$this.text( '-' );
	});
}

Ticker.prototype.getChar = function() {
	return this.chars[ Math.floor( Math.random() * this.charsCount ) ];
};

Ticker.prototype.reset = function() {
	this.done = false;
	this.cycleCurrent = 0;
	this.letterCurrent = 0;
	this.letters.each( function() {
		var $this = $( this );
		$this.text( $this.attr( 'data-orig' ) );
		$this.removeClass( 'done' );
	});
	this.loop();
};

Ticker.prototype.loop = function() {
	var self = this;

	this.letters.each( function( index, elem ) {
		var $elem = $( elem );
		if( index >= self.letterCurrent ) {
			if( $elem.text() !== ' ' ) {
				$elem.text( self.getChar() );
				$elem.css( 'opacity', Math.random() );
			}
		}
	});

	if( this.cycleCurrent < this.cycleCount ) {
		this.cycleCurrent++;
	} else if( this.letterCurrent < this.letterCount ) {
		var currLetter = this.letters.eq( this.letterCurrent );
		this.cycleCurrent = 0;
		currLetter.text( currLetter.attr( 'data-orig' ) ).css( 'opacity', 1 ).addClass( 'done' );
		this.letterCurrent++;
	} else {
		this.done = true;
	}

	if( !this.done ) {
		requestAnimationFrame( function() {
			self.loop();
		});
	} else {
		setTimeout( function() {
			self.reset();
		}, 750 );
	}
};

words = $( '.word' );
words.each( function() {
    var thiselem = $( this ),
    ticker = new Ticker( thiselem ).reset();
    thiselem.data( 'ticker', ticker );
});