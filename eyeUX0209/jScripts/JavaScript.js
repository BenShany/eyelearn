
var cardOpen = false;



//הצגת והסתרה של הדיבים
var lastopen = null;

function myFunc2(index) {
   
    var myId = document.getElementById(index);
    var display = getComputedStyle(myId).display;
    if (lastopen == null) {
        myId.style.display = "block";
    }
    else {
        stopVideo(lastopen);
        lastopen.style.display = "none";
        myId.style.display = "block";
    }
    lastopen = myId;
    cardOpen = true;
}
//עצירת וידיאו כשנסגר הדיב שלו
var stopVideo = function (element) {
    var iframe = element.querySelector('iframe');
    var video = element.querySelector('video');
    if (iframe !== null) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if (video !== null) {
        video.pause();
    }
};

//scroll - behavior: smooth for all browser
scroll_start = $(document).scrollTop();

$(document).ready(function () {
    
    var scroll_start = 0;
    
    var startchange1 = $('#tobii');
    var startchange2 = $('#methods');
    var startchange3 = $('#dataInfografic');
    var startchange4 = $('#divAbout');
    var startchange5 = $('#tobbiVideo1');
    var offset1 = startchange1.offset();
    var offset2 = startchange2.offset();
    var offset3 = startchange3.offset();
    var offset4 = startchange4.offset();
    var offset5 = startchange5.offset();
    

    if (startchange1.length) {
        if (cardOpen == true) {
            offset1 += 400;
        }
            $(document).scroll(function () {
                scroll_start = $(document).scrollTop();
                if (scroll_start > offset1.top && scroll_start < offset2.top ||scroll_start == offset1.top ) {
                    $(".navChange1").css('background-color', '#f0f0f0');
                } else {
                    $('.navChange1').css('background-color', 'transparent');
                }
            });
        offset1 = startchange1.offset();
    }

    if (startchange2.length) {
        $(document).scroll(function () {
            scroll_start = $(document).scrollTop();
            if (scroll_start > offset2.top && scroll_start < offset3.top || scroll_start == offset2.top) {
                $(".navChange2").css('background-color', '#f0f0f0');
            } else {
                $('.navChange2').css('background-color', 'transparent');
            }
        });
    }

    if (startchange3.length) {
        $(document).scroll(function () {
            scroll_start = $(document).scrollTop();
            if (scroll_start > offset3.top && scroll_start < offset4.top || scroll_start == offset3.top) {
                $(".navChange3").css('background-color', '#f0f0f0');
            } else {
                $('.navChange3').css('background-color', 'transparent');
            }
        });
    }
    if (startchange4.length) {
        $(document).scroll(function () {
            scroll_start = $(document).scrollTop();
            if (scroll_start > offset4.top || scroll_start == offset4.top) {
                $(".navChange4").css('background-color', '#f0f0f0');
            } else {
                $('.navChange4').css('background-color', 'transparent');
            }
        });
    }

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});