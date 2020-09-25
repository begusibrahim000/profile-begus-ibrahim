$(document).ready(function() {
	$('#myRoundabout').roundabout({
		shape: 'square',
		minScale: 0.93,
		maxScale: 1,
		easing:'easeOutExpo',
		clickToFocus:'true',
		focusBearing:'0',
		duration:800,
		reflect:true
	})
})