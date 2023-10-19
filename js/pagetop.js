$(function () {
  $('.pagetop-icon').css('display', 'none');

  $(window).scroll(function(){

    let window_height = $(window).height();
    console.log('window height:' + window_height);

    let scroll_position = $(window).scrollTop();
    console.log('scroll position:' + scroll_position);

    if (window_height / 2 < scroll_position){
      $('.pagetop-icon').css('display', 'block');
  } else {
    $('.pagetop-icon').css('display', 'none');
  }
  });

$('pagetop-icon').on('click', function(){
  $('body,html').animate({
    scrollTop: 0
  }, 500);

});
});