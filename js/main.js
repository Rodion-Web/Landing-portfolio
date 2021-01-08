$(document).ready(function(){
// hide #back-top first
$("#back-top").hide();
 
// fade in #back-top
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$('#back-top').fadeIn();
} else {
$('#back-top').fadeOut();
}
});
// scroll body to 0px on click
$('#back-top a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 400);
return false;
});
});
});
$(document).ready(function(){
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
          window.location.hash = hash;
        });
      } 
    });
  });