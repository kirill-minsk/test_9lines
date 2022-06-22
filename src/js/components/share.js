import helpers from '../helpers';
function info_share(){
	var info_share = {
		title: $('.about h1').text(),
		description: $('.about p').text(),
		// img: $('.share_popup_img source').attr('srcset'),
		// url: window.location.href,
		// Заглушка
		url: 'https://ninelines.agency/',
		img: 'https://ninelines.agency/images/slide-thumb2.png',
	}
	return info_share;
}
$('#btnshare_vk').on('click', function(event){
	var info_share_link = info_share()
	window.open("https://vk.com/share.php?url="+info_share_link.url+"&title="+info_share_link.title+"&description="+info_share_link.description.substr(0, 255)+"&image="+info_share_link.img,"sharer","status=0,toolbar=0,width=650,height=500");
})
$('#btnshare_fb').on('click', function(event){
	var info_share_link = info_share()
	window.open("http://www.facebook.com/sharer.php?s=100?&p[url]="+info_share_link.url+"&p[title]="+info_share_link.title+"&p[summary]="+info_share_link.description+"&p[images]="+info_share_link.img);
})
$('#btnshare_tg').on('click', function(event){
	var info_share_link = info_share()
	window.open("https://telegram.me/share/url?url="+info_share_link.url+"&text="+info_share_link.description);
})
function share() {
	$('.edit').bind('click', function() {
	  if ( $('.share_popup').hasClass( "active" )) {
	    $('.share_popup').removeClass( "active" )
	    // $('.share_popup').css("display", "none")
	    helpers.lockScroll(false, helpers.$header.find('.header__menu'), 'header');
	  } else {
	  	$('.share_popup').addClass( "active" )
	    // $('.share_popup').css("display", "flex")
	    helpers.lockScroll(true, helpers.$header.find('.header__menu'), 'header')
	    $('.share_popup').find("#title").focus();
	  }
	});
	$('.close').on('click', function(e) {
		// $('.share_popup').css("display", "none")
		$('.share_popup').removeClass( "active" )
		helpers.lockScroll(false, helpers.$header.find('.header__menu'), 'header');
	});
}
share()
function change_inputs() {
	$('.share_popup #title, .share_popup #description').on('keyup input', function() {
	    var value = $(this).val();
	    var id = "#" + $(this).attr("id")+"_replace";
	    $(id).html(value)
	});
}
change_inputs()