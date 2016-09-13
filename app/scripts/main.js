(function() {
	// Function to find the location of the user
	function findLocation() {
		// If there geolocation is not supported, return
		if (!navigator.geolocation) return;

		// The element to update with the location (the input field in this case)
		var output = $('#address');

		// The success callback function if the location is retrieved
		function success(position) {
			// Access the latitude and longitude that are returned
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;

			// Use the Google Maps Geocoding API's reverse geocoding to grab an address from the lat and long
			// Your own API key is required from google
			fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=YOUR_API_KEY').then(function(response) {
				// Convert the response to a JSON object and return it
				// This will be an array of objects containing address information
				return response.json();
			}).then(function(results) {
				// Update the value of our input field with the formatted_address property
				// from the first object in array
				output.val(results.results[0].formatted_address);
			});
		}

		// If the location cannot be retrieved, alert the user
		// On mobile, this could be because their location services are turned off
		function error() {
			alert('Sorry; we couldn\'t find your location. Please make sure your location services (GPS) are enabled.');
		}

		// Call the HTML5 geolocation API and pass in our success and error callback functions
		// Also pass in our object with options: enableHighAccuracy may cause geolocating to take longer,
		// but should return a more accurate result. Timeout is the maximum length of time allowed
		// before the error handler is called (default is infinity). MaximumAge is the oldest a cached
		// location is allowed to be before the actual current location must be fetched. Setting to 0
		// forces the geolocater to fetch the actual current location
		navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true, timeout: 30000, maximumAge: 0});
	}

	// Call findLocation
	findLocation();
})();