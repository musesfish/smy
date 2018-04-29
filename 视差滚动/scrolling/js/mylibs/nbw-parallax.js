/*
 JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo
 Demo: Recreating the Nikebetterworld.com Parallax Demo
 Author: Ian Lunn / modifications by Russ Maschmeyer
 Author URL: http://www.ianlunn.co.uk/ and http://www.strangenative.com
 Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/ and
 Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

 License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 */

if (screen.width > 1024) {

    $(document).ready(function() { //when the document is ready...

        // save selectors as variables to increase performance
        var $window = $(window);

        var $BG2a 	= $('#intro');						//text
        var $BG3a 	= $('#intro-her');					//Chris Silas Neal
        var $BG3b 	= $('#intro-her').find('.b');		//
        var $BG3c 	= $('#intro-her').find('.c');		//
        var $BG3d 	= $('#intro-her').find('.d');		//
        var $BG3e 	= $('#intro-her').find('.frame');	//frame
        var $BG4a 	= $('#about-her');					//text
        var $BG5a 	= $('#intro-him');					//Frank Stockton
        var $BG5b	= $('#intro-him').find('.b');		//
        var $BG5c 	= $('#intro-him').find('.c');		//
        var $BG5d 	= $('#intro-him').find('.frame');	//frame
        var $BG6a 	= $('#about-him');					//text
        var $BG7a 	= $('#discovery');					//Nicholas Felton
        var $BG7b 	= $('#discovery').find('.b');		//
        var $BG7c 	= $('#discovery').find('.frame');	//frame
        var $BG8a 	= $('#first-meet');					//text
        var $BG9a 	= $('#star-crossed');				//Sam Weber
        var $BG9b 	= $('#star-crossed').find('.b');	//
        var $BG9c 	= $('#star-crossed').find('.frame');//frame
        var $BG10a 	= $('#the-road');					//text
        var $BG11a 	= $('#waiting');					//Josh Cochran
        var $BG11b 	= $('#waiting').find('.b');			//
        var $BG11c 	= $('#waiting').find('.c');			//
        var $BG11d 	= $('#waiting').find('.frame');		//frame
        var $BG12a 	= $('#first-date');					//text
        var $BG13a 	= $('#closed');						//Gilbert Ford
        var $BG13b 	= $('#closed').find('.b');			//
        var $BG13c 	= $('#closed').find('.c');			//
        var $BG13d 	= $('#closed').find('.frame');		//frame
        var $BG14a 	= $('#more-dates');					//text
        var $BG15a 	= $('#falling-in-love');			//Jason Kernevich
        var $BG15b 	= $('#falling-in-love').find('.b');	//
        var $BG15c 	= $('#falling-in-love').find('.c');	//
        var $BG15d 	= $('#falling-in-love').find('.d');	//
        var $BG15e 	= $('#falling-in-love').find('.frame');	//frame
        var $BG16a 	= $('#new-adventures');				//text
        var $BG17a 	= $('#high-seas');					//Chris Buzelli
        var $BG17b 	= $('#high-seas').find('.frame');	//frame
        var $BG18a 	= $('#changes');					//text
        var $BG19a 	= $('#new-lives');					//Grady McFerrin
        var $BG19b 	= $('#new-lives').find('.b');		//
        var $BG19c 	= $('#new-lives').find('.c');		//
        var $BG19d 	= $('#new-lives').find('.frame');	//frame
        var $BG20a 	= $('#moving-in');					//text
        var $BG21a 	= $('#big-move');					//Alex Eben Meyer
        var $BG21b 	= $('#big-move').find('.b');		//
        var $BG21c 	= $('#big-move').find('.c');		//
        var $BG21d 	= $('#big-move').find('.d');		//
        var $BG21e 	= $('#big-move').find('.e');		//
        var $BG21f 	= $('#big-move').find('.f');		//
        var $BG21g 	= $('#big-move').find('.frame');	//frame
        var $BG22a 	= $('#epiphany');					//text
        var $BG23a 	= $('#jessica');					//Neil Swaab
        var $BG23b 	= $('#jessica').find('.b');			//
        var $BG23c 	= $('#jessica').find('.c');			//
        var $BG23d 	= $('#jessica').find('.d');			//
        var $BG23e 	= $('#jessica').find('.e');			//
        var $BG23f 	= $('#jessica').find('.frame');		//frame
        var $BG24a 	= $('#the-ring');					//text
        var $BG25a 	= $('#broke');						//Jennifer Daniel
        var $BG25b 	= $('#broke').find('.b');			//
        var $BG25c 	= $('#broke').find('.c');			//
        var $BG25d 	= $('#broke').find('.frame');		//frame
        var $BG26a 	= $('#the-plan');					//text
        var $BG27a 	= $('#it-happened');				//Jessica Hische
        var $BG27b 	= $('#it-happened').find('.b');		//
        var $BG28a 	= $('#set-up');						//text
        var $BG29a 	= $('#park');						//Gina + Matt
        var $BG29b 	= $('#park').find('.b');			//
        var $BG29c 	= $('#park').find('.c');			//
        var $BG29d 	= $('#park').find('.d');			//
        var $BG29e 	= $('#park').find('.frame');		//frame
        var $BG30a 	= $('#yes');						//text
        var $BG31a 	= $('#restaurant');					//James Gulliver Hancock
        var $BG31b 	= $('#restaurant').find('.b');		//
        var $BG31c 	= $('#restaurant').find('.frame');	//frame
        var $BG32a 	= $('#waiting-inside');				//text
        var $BG33a 	= $('#friends');					//Jillian Tamaki
        var $BG33b 	= $('#friends').find('.frame');		//frame


        // other variables
        var windowHeight = $window.height();
        var windowWidth = $window.width();
        var panelHeight = $window.height();
        var panelWidth = $window.width();
        var positionOfBackground = (windowHeight/2) - (windowWidth/2);
        var pos = $window.scrollTop(); //position of the scrollbar
        //var mainPanel = $BG3a;
        var vertShift = 0;
        var horShift = 0;

        // detect mobile
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i) ? true : false;
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i) ? true : false;
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) ? true : false;
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
            }
        };

        // apply the class "inview" to panels in view
        $('section').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("inview");
            } else {
                $(this).removeClass("inview");
            }
        });


        // if the browser window is resized...
        function Reposition(){
            windowHeight = $window.height(); // get new height
            windowWidth = $window.width(); // get new width

            // set the panel height
            if (windowHeight > 800) {
                panelHeight = 800;
            } else {
                panelHeight = windowHeight;
            }
            if ( isMobile.any() ) {
                panelHeight = 800;
            }
            $('.panel, .text').css('height', panelHeight);


            // set the panel width
            if (windowWidth > 1000) {
                panelWidth = 1000;
            } else {
                panelWidth = windowWidth;
            }
            horShift = (windowWidth - panelWidth) * .5;

            // place things
            $('.story').css('margin-top', (panelHeight * .5) - 210 ); // interstitial stories
            $('.credit').css('margin-top', panelHeight - 50);

            // figure out background size offset for middle placement
            positionOfBackground = (windowHeight / 2) - 500;

            // scroll controller
            if (windowHeight > 800) {
                vertShift = ((windowHeight - panelHeight) / 2);
            } else {
                vertShift = 0;
            }
            $('body').css('padding-top', vertShift);

            // hack: unbind first in case we already bound, then bind or re-bind the localScroll plugin
            $('#navigation').unbind('click').unbind('.localScroll');
            $('#navigation').localScroll({lazy:true, duration:2000, offset:-(vertShift)});
        }


        // Swap out next and prev href links and credit text
        function ChangeLinks(){
            // $('#credit').html(mainPanel.attr('artist'));
            // $('#credit').attr('href', mainPanel.attr('href'));
        }

        // Called every pixel scrolled. Sets position of the background image element
        /*arguments:
         orientation = alignment of bg image
         x = horizontal position of background
         windowHeight = height of the viewport
         pos = position of the scrollbar
         adjuster = adjust the position of the background
         inertia = how fast the background moves in relation to scrolling
         */
        function CalculateShift(valign, halign, pos, adjuster, vinertia, hinertia){

            var returnValue = '';
            var returnY = '';
            var returnX = '';

            // for vertical shift
            switch (valign) {
                case "top":
                    //returnY = (-((panelHeight + pos) - adjuster) * vinertia) + "px";
                    returnY = (-((panelHeight + pos) - adjuster) * -vinertia) + "px";
                    break;
                case "middle":
                    //returnY = ((-((panelHeight + pos) - adjuster) * vinertia) + positionOfBackground)  + "px";
                    returnY = ((-((panelHeight + pos) - adjuster) * -vinertia) + positionOfBackground)  + "px";
                    break;
                case "bottom":
                    //returnY = ((-((panelHeight + pos) - adjuster) * vinertia) + (positionOfBackground * 2)) + "px";
                    returnY = ((-((panelHeight + pos) - adjuster) * -vinertia) + (positionOfBackground * 2)) + "px";
                    break;
                case "static":
                    returnY = 50 + "%";
                    break;
                default: ;//alert('defaulted');
            }

            // for horizontal shift
            switch (halign) {
                case "right":
                    returnX = horShift * 2 + (((panelHeight + pos) - adjuster) * hinertia) + "px";
                    break;
                case "center":
                    returnX = horShift + (((panelHeight + pos) - adjuster) * hinertia) + "px";
                    break;
                case "left":
                    returnX = (((panelHeight + pos) - adjuster) * hinertia) + "px";
                    break;
                case "static":
                    returnX = 50 + "%";
                    break;
                default: ;//alert('defaulted');
            }

            //put the string together & return it
            returnValue = returnX + ' ' + returnY;
            return returnValue;
        }

        // Called when window is scrolled or resized
        function Move(){
            if($BG2a.hasClass("inview")){ // Intro - text
                $BG2a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG3a.hasClass("inview")){ // Intro Her - Chris Neal
                $BG3a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 2),  .9, 0)}); // city
                $BG3b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 2),  .6, 0), 'height': panelHeight}); // stars
                $BG3c.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 2),  .3, 0), 'height': panelHeight}); // moon
                $BG3d.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 2), -1.2, 0), 'height': panelHeight}); // »À
                $BG3e.css({'height': panelHeight}); // frame
            }

            if($BG4a.hasClass("inview")){ // About Her - text
                $BG4a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG5a.hasClass("inview")){ // Intro Him - Frank Stockton
                $BG5a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 4), .3, 0)}); // lights
                $BG5b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 4), .6, 0), 'height': panelHeight}); // russ
                $BG5c.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 4),  -1.2, 0), 'height': panelHeight}); // microphone
                $BG5d.css({'height': panelHeight}); // frame
            }

            if($BG6a.hasClass("inview")){ // About Him - text
                $BG6a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG7a.hasClass("inview")){ // Discovery - Nick Felton
                $BG7a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 6),  .2, 0)});
                $BG7b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 6), -.2, 0), 'height': panelHeight});
                $BG7c.css({'height': panelHeight}); // frame
            }

            if($BG8a.hasClass("inview")){ // First Meet - text
                $BG8a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG9a.hasClass("inview")){ // Star Crossed - Sam Weber
                $BG9a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 8), .6, 0)}); //jessica
                $BG9b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 8), -2, 0), 'height': panelHeight});
                $BG9c.css({'height': panelHeight}); // frame
            }

            if($BG10a.hasClass("inview")){ // The Road - text
                $BG10a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG11a.hasClass("inview")){ // Waiting - Josh Cochran
                var cuePos = (panelHeight * 9) - vertShift;

                if (pos <= cuePos-100) {
                    $BG11b.css({'height': panelHeight, 'background-position': '-500px, 0'}); // the hordes
                    $('#waiting').find('.wait').css('opacity', 0);
					$BG11c.css({'height': panelHeight, 'background-position': '500px, 0'}); // the hordes
                    $('#waiting').find('.wait').css('opacity', 0);
                } else {
                    $BG11b.css({'height': panelHeight, 'background-position': '-20px, 0'});
                    $('#waiting').find('.wait').css('opacity', 1);
					$BG11c.css({'height': panelHeight, 'background-position': '-20px, 0'});
                    $('#waiting').find('.wait').css('opacity', 1);
                }

                $BG11d.css({'height': panelHeight}); // frame
            }

            if($BG12a.hasClass("inview")){ // First Date - text
                $BG12a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG13a.hasClass("inview")){ // Closed - Gilbert Ford
                $BG13a.css({'height': panelHeight}); //scene
                $BG13b.css({'backgroundPosition': CalculateShift('bottom', 'static', pos, (panelHeight * 12), .1, 0), 'height': panelHeight}); //snow1
                $BG13c.css({'backgroundPosition': CalculateShift('bottom', 'static', pos, (panelHeight * 12), -.2, 0), 'height': panelHeight}); //snow2
				$BG13d.css({'height': panelHeight}); // frame
            }

            if($BG14a.hasClass("inview")){ // More Dates - text
                $BG14a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG15a.hasClass("inview")){ // Falling in Love - Jason Kernevich
                $BG15a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 14),  .6, 0)});
                $BG15b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 14), -.3, 0), 'height': panelHeight});
                $BG15c.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 14), 1.2, 0), 'height': panelHeight});
                $BG15d.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 14),  .6, 0), 'height': panelHeight});
                $BG15e.css({'height': panelHeight}); // frame
            }


            if($BG16a.hasClass("inview")){ // New Adventures - text
                $BG16a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG17a.hasClass("inview")){ // High Seas - Chris Buzelli
                $BG17a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 16), .6, 0), 'height': panelHeight});
                $BG17b.css({'height': panelHeight}); // frame
            }

            if($BG18a.hasClass("inview")){ // Changes - text
                $BG18a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG19a.hasClass("inview")){ // New Lives - Grady McFerrin
                var cuePos = $BG19a.offset();
                cuePos = cuePos.top - vertShift;

                if (pos <= cuePos) {
                    $BG19a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 18),  -1, 0)}); // radio
                    $BG19b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 18),   0, 0), 'height': panelHeight}); // heads
                    $BG19c.css({'backgroundPosition': CalculateShift('bottom', 'static', pos, (panelHeight * 18), 1.4, 0), 'height': panelHeight}); // letters
                } else {
                    $BG19a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 18),   1, 0)}); // radio
                    $BG19b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 18),   1, 0), 'height': panelHeight}); // heads
                    $BG19c.css({'backgroundPosition': CalculateShift('bottom', 'static', pos, (panelHeight * 18),   1, 0), 'height': panelHeight}); // letters
                }

                $BG19d.css({'height': panelHeight}); // frame
            }

            if($BG20a.hasClass("inview")){ // Moving In - text
                $BG20a.css({'backgroundPosition': 'center'}); // text
            }


            if($BG21a.hasClass("inview")){ // The Big Move - Alex Eben Meyer
                $BG21a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 20), .6,   0)}); // background
                $BG21b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 20), .8,   0), 'height': panelHeight}); // moon
                $BG21c.css({'backgroundPosition': CalculateShift('middle', 'center', pos, (panelHeight * 20), .6, -.1), 'height': panelHeight}); // city
                $BG21d.css({'backgroundPosition': CalculateShift('middle', 'center', pos, (panelHeight * 20), .6,  .7), 'height': panelHeight}); // taxi
                $BG21e.css({'backgroundPosition': CalculateShift('middle', 'center', pos, (panelHeight * 20), .6,  .4), 'height': panelHeight}); // j + r
                $BG21f.css({'backgroundPosition': CalculateShift('middle', 'center', pos, (panelHeight * 20), .6, -.5), 'height': panelHeight}); // building
                $BG21g.css({'height': panelHeight}); // frame
            }

            if($BG22a.hasClass("inview")){ // Epiphany - text
                $BG22a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG23a.hasClass("inview")){ // Jessica! - Neil Swaab
                $BG23a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 22),  .6, 0)}); // office
                $BG23b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 22), -.2, 0), 'height': panelHeight}); // bubble 1
                $BG23c.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 22),  .1, 0), 'height': panelHeight}); // bubble 2
                $BG23d.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 22),  .6, 0), 'height': panelHeight}); // vignette
                $BG23e.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 22),  .6, 0), 'height': panelHeight}); // epiphany!
                $BG23f.css({'height': panelHeight}); // frame

                // fade in vignette and epiphany bubble
                var cuePos = $BG23a.offset();
                cuePos = cuePos.top - vertShift - 40;

                if (pos >= cuePos) {
                    $BG23d.css('opacity', '100');
                    $BG23e.css('opacity', '100');
                }

                // reset
                if (pos <= cuePos) {
                    $BG23d.css('opacity', '0');
                    $BG23e.css('opacity', '0');
                }

            }

            if($BG24a.hasClass("inview")){ // The Ring - text
                $BG24a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG25a.hasClass("inview")){ // Broke - Jennifer Daniel
                var vertPos = $BG25a.offset().top - vertShift;
                var horPos = $BG25a.offset().left;

                if (pos >= vertPos) {
                    $BG25a.css({'backgroundPosition': CalculateShift('middle', 'center', pos, (panelHeight * 24), 2.2, -.6)});
                    $BG25b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 24),   0,   0), 'height': panelHeight});
                    $BG25c.css({'backgroundPosition': CalculateShift('middle', 'center', pos, (panelHeight * 24), 2.2, -.6), 'height': panelHeight});
                } else {
                    $BG25a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 24), -.2, 0)});
                    $BG25b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 24), -.2, 0), 'height': panelHeight});
                    $BG25c.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 24), -.2, 0), 'height': panelHeight});
                }

                $BG25d.css({'height': panelHeight}); // frame
            }

            if($BG26a.hasClass("inview")){ // The Plan - text
                $BG26a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG27a.hasClass("inview")){ // It Happened - Jessica Hische
                $BG27b.css({'height': panelHeight});
            }

            if($BG28a.hasClass("inview")){ // Set Up - text
                $BG28a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG29a.hasClass("inview")){ // Park - Gina + Matt
                $BG29a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 28),   .1, 0)});
                $BG29b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 28),   .3, 0), 'height': panelHeight});
                $BG29c.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 28), -1.1, 0), 'height': panelHeight});
                $BG29d.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 28),   .3, 0), 'height': panelHeight});
                $BG29e.css({'height': panelHeight}); // frame
            }

            if($BG30a.hasClass("inview")){ // Yes - text
                $BG30a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG31a.hasClass("inview")){ // Restaurant - James Gulliver Hancock
                $BG31a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 30), .8, 0)});
                $BG31b.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 30), .6, 0), 'height': panelHeight});
                $BG31c.css({'height': panelHeight}); // frame
            }

            if($BG32a.hasClass("inview")){ // Waiting Inside - text
                $BG32a.css({'backgroundPosition': 'center'}); // text
            }

            if($BG33a.hasClass("inview")){ // Friends - Jillian Tamaki
                $BG33a.css({'backgroundPosition': CalculateShift('middle', 'static', pos, (panelHeight * 32), .6, 0)});

                $BG33b.css({'height': panelHeight}); // frame
            }
        }

        Reposition(); //Reposition various elements appropriately for the window size

        $window.resize(function(){ //if the user resizes the window...
            Reposition();
            Move();
        });

        $window.scroll(function(){
            if ( isMobile.any() ) {
                // do nothing
            } else {
                pos = $window.scrollTop();
                Move();
            }
        });

    });

} else {

    $(document).ready(function() { //when the document is ready...

        // alert('Visit the site out on your desktop or laptop to see it in all it\'s glory');

        // save selectors as variables to increase performance
        var $window = $(window);

        // other variables
        var windowHeight = $window.height();
        var windowWidth = $window.width();
        $('.panel').css('height', windowWidth);
        $('.panel, .story').css('background-size', windowWidth);

        window.onorientationchange = function() {
            var windowHeight = $window.height();
            var windowWidth = $window.width();
            $('.panel').css('height', windowWidth);
            $('.panel, .story').css('background-size', windowWidth);
            $('#it-happened').css('height', windowWidth * .65);
        }
    });

}