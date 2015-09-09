$(document).ready(function() {
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var number = +$('#query').val();
 
		// make sure section is empty before clearing
		if (!$('section').is(':empty')) $('section').html('');

		// make sure span is empty before clearing message
		if (!$('span').is(':empty')) $('span').html('');

		// check if number is integer
		if (number % 1 === 0) {
			appendFizzBuzz(number);
		} else {
			$('span').append('Input must be an integer.');
		}

	});
});
 
/**
 * This function pushes the results to the page
 *
 * @param integer
 * @return void
 */
 var appendFizzBuzz = function (n) {
	for (var i = 1; i <= n; i++) {

		// Check if 'i' is divisible by both 3 and 5
		if (i % 15 === 0) {
			$('section').append('FizzBuzz');

		// Check if 'i' is divisible by 3
		} else if (i % 3 === 0) {
			$('section').append('Fizz');

		// Check if 'i' is divisible by 5
		} else if (i % 5 === 0) {
			$('section').append('Buzz');

		// If none of the above, print 'i'
		} else {
			$('section').append(i);
		}

		// Add a line break after each iteration of the for loop
		$('section').append('<br />');
	}
};