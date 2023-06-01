
$(document).ready(function() {
    $(document).on('contextmenu', function(e) {
        e.preventDefault();
    });
});


$(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('nav').slideToggle('slow', function() {
        $(this).toggleClass('active');
      });
    });
  });
  
  $(document).ready(function() {
    $('.close-button').click(function() {
      $('nav').slideToggle('slow', function() {
        $(this).removeClass('active');
      });
    });
  });  

$(document).ready(function() {
    var nav = $("nav");
    var navOffsetTop = nav.offset().top;
    var lastScrollTop = 0;

    $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    var scrollDirection = scrollPos > lastScrollTop ? "down" : "up";
    lastScrollTop = scrollPos;

    if (scrollDirection === "down" && scrollPos >= navOffsetTop) {
        nav.addClass("sticky");
    } else {
        nav.removeClass("sticky");
    }
    });

    // Add animation classes when adding and removing "sticky" class
    nav.on("transitionrun", function(event) {
    if (event.originalEvent.propertyName === "top" && nav.hasClass("sticky")) {
        nav.addClass("sticky-enter");
    }
    });

    nav.on("transitionend", function(event) {
    if (event.originalEvent.propertyName === "top" && nav.hasClass("sticky")) {
        nav.removeClass("sticky-enter");
        nav.addClass("sticky-enter-active");
    }
    });

    nav.on("transitionrun", function(event) {
    if (event.originalEvent.propertyName === "top" && !nav.hasClass("sticky")) {
        nav.addClass("sticky-leave");
    }
    });

    nav.on("transitionend", function(event) {
    if (event.originalEvent.propertyName === "top" && !nav.hasClass("sticky")) {
        nav.removeClass("sticky-leave");
        nav.addClass("sticky-leave-active");
    }
    });
});

$(document).ready(function() {
    var texts=["UI & UX DESIGNER","WEB DESIGNER"] // Array of texts to cycle through
    var currentIndex = 0; // Current index of the text in the array

    function rotateText() {
        var rotateElement = $('.rotate'); // Get the element with class "rotate"
        var currentText = texts[currentIndex]; // Get the current text from the array

        rotateElement.fadeOut(500, function() {
            rotateElement.text(currentText); // Update the text within the element
        }).fadeIn(500);

        currentIndex = (currentIndex + 1) % texts.length; // Update the index for the next text
    }
    setInterval(rotateText, 3000); // Call rotateText every 2 seconds (adjust the timing as needed)
});

// $(document).ready(function() {
//     var currentSection = 1;
//     var totalSections = 5;

//     var intervalId = setInterval(function() {
//         currentSection++;
//         if (currentSection <= totalSections) {
//         $('html, body').animate({
//             scrollTop: $('.section-' + currentSection).offset().top
//         }, 1200);
//         } else {
//         clearInterval(intervalId);
//         }
//     }, 6000);
// });


$(document).ready(function() {
    $('.box-container').addClass('visible');
});
const change = src => {
    document.getElementById('main').src = src
}


$(document).ready(function() {
    $(".card").click(function() {
        var imageUrl = $(this).find("img").attr("src");
        $(".popup-image").attr("src", imageUrl);
        $(".popup-overlay").fadeIn();
    });

    $(".popup-overlay").click(function() {
        $(".popup-overlay").fadeOut();
    });
});