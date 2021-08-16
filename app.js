// function initMap() {
//   let options = {
//     zoom: 8,
//     center: {
//       lat: 42.3601,
//       lng: -71.0589,
//     },
//   };

//   const map = new google.maps.Map(document.getElementById("map"), options);

//   function addMArker(props) {
//     //    add marker
//     let marker = new google.maps.Marker({
//       position: props.coords,
//       map: map,
//     });
//     // check marker
//     if (props.icon) {
//       marker.setIcon(props.icon);
//     }

//     // check content
//     if (props.content) {
//       let infoWindow = new google.maps.InfoWindow({
//         content: props.content,
//       });

//       marker.addListener("click", () => {
//         infoWindow.open(map, marker);
//       });
//     }
//   }

//   addMArker({
//     coords: { lat: 42.4668, lng: -70.9495 },
//     icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//   });
//   addMArker({
//     coords: { lat: 42.8584, lng: -70.9301 },
//     content: "<i>heloo boi</i>",
//   });
//   addMArker({ coords: { lat: 42.7762, lng: -71.0773 } });
// }

function initMap() {
  let options = {
    zoom: 8,
    center: {
      lat: 42.3601,
      lng: -71.0589,
    },
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  //   add random marker
  google.maps.event.addListener(map, "click", (e) => {
    // console.log(e, "🤷‍♀️🤷‍♀️🤷‍♀️");
    addMArker({ coords: e.latLng });
  });

  function addMArker(props) {
    //    add marker
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });
    // check marker
    if (props.icon) {
      marker.setIcon(props.icon);
    }

    // check content
    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
  }

  const ARR = [
    {
      coords: { lat: 42.4668, lng: -70.9495 },
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    },
    {
      coords: { lat: 42.8584, lng: -70.9301 },
      content: "<i>heloo boi</i>",
    },
    { coords: { lat: 42.7762, lng: -71.0773 } },
  ];

  ARR.forEach((mark) => addMArker(mark));
}
