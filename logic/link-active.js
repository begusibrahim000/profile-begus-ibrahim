// logic link active - by Begus Ibrahim
if(window.document.title == 'Home | Begus Ibrahim') {
	$('.link-about').removeClass('active')
	$('.link-folio').removeClass('active')
	$('.link-services').removeClass('active')
}else if(window.document.title == 'About | Begus Ibrahim') {
	$('.link-home').removeClass('active')
	$('.link-folio').removeClass('active')
	$('.link-services').removeClass('active')
}else if(window.document.title == 'Folio | Begus Ibrahim') {
	$('.link-home').removeClass('active')
	$('.link-about').removeClass('active')
	$('.link-services').removeClass('active')
}else if(window.document.title == 'Services | Begus Ibrahim') {
	$('.link-home').removeClass('active')
	$('.link-about').removeClass('active')
	$('.link-folio').removeClass('active')
}