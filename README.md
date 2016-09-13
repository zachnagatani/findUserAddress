# findUserAddress
A simple input field that is populated with the user's address using HTML5 Geolocation and Google Maps Geocoding API's reverse geocoding.

## Explanation
This is simply a demo of how to fetch a user's current (human-readable) address, say to pre-populate a form or some sort of div. HTML5's Geolocation functionality returns a latitude and longitude. This lat and long are then used to make a call to the Google Maps Geocoding API, and utilize's its reverse geocoding to turn that lat and long into a human readable address.

## Usage
1. Go get your Google Maps API key [here](https://developers.google.com/maps/documentation/geocoding/get-api-key)
2. Download or copy and paste app/scripts/main.js and place it in your own project.
3. Update the `var output = $('#address')` variable with your own input's id. Vanilla JS's `document.getElementById('address')` can also be used. 
4. In our fetch, jQuery's `.val()` is used to update the input; if updating a div, please use jQuery's `.html()`, and if using Vanilla JS, other properties will have to be used, such as `.value` or `.innerHTML`.
5. Whatever input or div you specified as your output will be updated with the user's address (assuming everything resolved correctly!)
