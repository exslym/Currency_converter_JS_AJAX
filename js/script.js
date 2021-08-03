/*jshint esversion: 6 */
let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
	let request = new XMLHttpRequest();

	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	// status (404)
	// statusText (Not Found)
	// responseText / response (server response text)
	// readyState (current state of the request):
	// 0 - UNSENT
	// 1 - OPENED
	// 2 - HEADERS_RECEIVED
	// 3 - LOADING
	// 4 - DONE

	request.addEventListener('readystatechange', function () {
		if (request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);

			inputUsd.value = inputRub.value / data.usd;
		} else {
			inputUsd.value = 'Something go wrong!';
		}
	});
});
