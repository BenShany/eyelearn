//הטמעת סרטון YOUTUBE - API:

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var player2;
var player3;
var player4;

function onYouTubeIframeAPIReady() {
    //סרטון תומך לפרק TOBII
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'hh3HgovkbTE',
        playerVars: { 'rel': 0 }
    });

    //סרטון תומך למתודות מחקר UX
    player2 = new YT.Player('player2', {
        height: '390',
        width: '640',
        videoId: 'zFMgpxG-chM',
        playerVars: { 'rel': 0 }
    });

    //סרטון תומך הגדרות מחקר UX
    player3 = new YT.Player('player3', {
        height: '390',
        width: '640',
        videoId: 'A2DdLAxvBiU',
        playerVars: { 'rel': 0 }
    });

    //סרטון תומך ניתוח DATA 
    player4 = new YT.Player('player4', {
        height: '390',
        width: '640',
        videoId: 'zTfQh0zbBWM',
        playerVars: { 'rel': 0 }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function pauseVideo() {
    player.pauseVideo();
}
function playVideo() {
    player.playVideo();
}
function stopVideo() {
    player.stopVideo();
}
function getPlayerState() {
    return player.getPlayerState();
}

//הגדרות פופ אפ באינפוגרפיקה

jQuery(function ($) {
    var pop = $('.map-popup');
    pop.click(function (e) {
        e.stopPropagation();
    });

    $('a.marker').click(function (e) {
        $(".xpop").show();
        e.preventDefault();
        e.stopPropagation();
        $(this).next('.map-popup').toggleClass('open');
        $(this).parent().siblings().children('.map-popup').removeClass('open');
    });

    $('.xpop').click(function (e) {
        $(pop).hide();
    });

    $('a.marker').click(function (e) {
        $(pop).show();
    });

    $(document).click(function () {
        pop.removeClass('open');
    });

    pop.each(function () {
        var w = $(window).outerWidth(),
            edge = Math.round(($(this).offset().left) + ($(this).outerWidth()));
        if (w < edge) {
            $(this).addClass('edge');
        }
    });
});

//קוד לאקורדיון
$(document).ready(function () {

    $("#accordion").accordion();
    $("#box").datepicker();
});
