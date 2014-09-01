$(document).ready(function() {


var t = $('table');
t.addClass('classy');

var btn = $('#submitter');

btn.on('click', function (evt) {
	evt.preventDefault();

	var name = $('[name="eventName"]').val();
	var day = $('[name="eventDay"]').val();

	console.log('clicked button!');

	if(name.length) {
		console.log('name is ' + name);
	} else {
		console.error('no name!');
	}

	console.log(day);

	if(day > 0) {
		console.log('day is ' + day);
	} else {
		console.error('no day!');
		return;
	}

	console.log($($('td')[0]).append);

	var offset = 1;

	$($('td')[offset + (day-1)]).append('<span class="event">' + name + '</span>');

});

});