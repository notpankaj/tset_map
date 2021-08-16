const myLatLng = { lat: 38.3461, lng: -0.4907 };

const myOptions = {
  center: myLatLng,
  zoom: 7,
  mapTypeId: new google.maps.MapTypeId.ROADMAP(),
};

// create map

var map = new google.maps.Map(document.getElementById("map"), myOptions);

var directionsService = new google.maps.DirectionsService();

var directionsDislay = new google.maps.DirectionsRenderer();

// bind the directionRenderer to map

directionsDislay.setMap(map);

function clacRoute() {
  var request = {
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.unitSystem.IMPEREAL,
  };

  //pass the req to route method
  directionsService.route(request, (result, status) => {
    if (status == google.maps.DirectionsStatus.OK) {
      //   get time and distance
      const output = document.getElementById("output");

      output.innerHTML =
        "<div> From :" +
        document.getElementById("from").value +
        " TO : " +
        document.getElementById("to") +
        "<br> duration:" +
        result.routes[0].legs[0].duration.text +
        "</div>";

      //display route
      directionsDislay.setDirections(result);
    } else {
      // delete route from map
      directionsDislay.setDirections({ routes: [] });

      // center the map again
      map.setCenter(myLatLng);

      //show error message
      output.innerHTML = "<div> COunt not find </div>";
    }
  });
}

// create autocomplete for  input

var options = {
  types: ["(cities)"],
};

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.autocomplete(input2, options);
