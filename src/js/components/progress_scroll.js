window.onscroll = function() {progress_scroll()};

function progress_scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = Math.round( (winScroll / height) * 100);
  $('#myBar').text(scrolled + '%');
  $('#round_progress').attr('stroke-dashoffset',  Math.abs(scrolled*(314/100)-314) );
  if (scrolled > 90){
  	$('.js-back-to-top_img').show();
  	$('#myBar').hide();
  }else {
  	$('#myBar').show();
  	$('.js-back-to-top_img').hide();
  }
}