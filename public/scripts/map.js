//ATTRACTIONS

// cnTower = {
//   positon
// }
const log = console.log;
let markers = []

let pointOfInterests = {
  2: {
    map_id: 3,
    name: "Whelan's Gate",
    description: "They make good burgers",
    price: 3,
    position: {lat: 43.6553, lng: -79.4564 },
    contentString: `<h1>ID2</h1><form action="/action_page.php" method="get">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <input type="submit" value="Submit">
    </form>`
  },
  3: {
    map_id: 3,
    name: "Banjara",
    description: "They make good tikka masala",
    price: 3,
    position: {lat: 43.6801, lng: -79.3439 },
    contentString: `<h1>ID3</h1><form action="/action_page.php" method="get">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <input type="submit" value="Submit">
    </form>`
  },
  4: {
    map_id: 3,
    name: "Bagel House",
    description: "They make good bagels",
    price: 3,
    position: {lat: 43.6787, lng: -79.3582 },
    contentString: `<h1>ID4</h1><form action="/action_page.php" method="get">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <input type="submit" value="Submit">
    </form>`
  },
  5: {
    map_id: 3,
    name: "Chinese Dumplings",
    description: "They make good dumplings",
    price: 3,
    position: {lat: 43.6906, lng: -79.3456 },
    contentString: `<h1>ID5</h1><form action="/action_page.php" method="get">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <input type="submit" value="Submit">
    </form>`
  }
}




const contentString =`<form action="/action_page.php" method="get">
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname"><br><br>
<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname"><br><br>
<input type="submit" value="Submit">
</form>`

let tempId = 1;

function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.6532, lng: -79.3832 },
    zoom: 13,
  });

// CN TOWER
  // new google.maps.Marker({
  //   position: { lat: 43.6426, lng: -79.3871 },
  //   map :map,
  //   title: "Hello World!",
  // });

  // new google.maps.Marker({
  //   position: { lat: 43.6801, lng: -79.3321 },
  //   map :map,
  //   title: "another marker!",
  // });

  const renderAllMapMarkers = () => {
    for (let key in pointOfInterests) {
      position = pointOfInterests[key]
      addMarker(position)
    }
  }

  renderAllMapMarkers()

  map.addListener("click", (event) => {
    const latLngObject = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }
    let name = "";
    let description = "";
    let price = 0;
    const markerObject = {
      map_id: 3, // get current map id
      name,
      description,
      price,
      position: latLngObject,
      contentString: `
      <h1>${tempId}</h1>
      <form action="/processForm" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" value=${name} name="name" placeholder="Name of Restaurant"><br><br>
      <label for="description">Description:</label>
      <textarea id="description" value=${description} name="description"></textarea><br><br>
      <label for="price">Price:</label>
      <input type="number" id="price" value=${price} name="price"><br><br>
      <input type="submit" id="${tempId}_submit" value="Save Marker">
      </form>
      `
    }

    addMarker(markerObject);
    log('lat():',markers[0].position.lat())
    log('event.latLng----->', event.latLng)

    $("#mainForm").slideDown("slow")
    $("#list").append(`<li>${event.latLng} <button type="button">Delete</button</li>`)
    console.log('markers--->', markers)
  });






  // function to add markers to map
  function addMarker(position) {
    log('position:', position)
    const marker = new google.maps.Marker({
      position: position.position,
      map,
    });
    let latFromClick = marker.position.lat()
    let lngFromClick = marker.position.lng()
    log('position from addMarker:',marker.position.lng())


    pointOfInterests[tempId] = {
      map_id: 3, // get current map id
      name: "",
      description: "",
      price: 0,
      position: {lat: latFromClick, lng: lngFromClick }
    }

    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: position.contentString,
      });
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: true,
      });

    })
    // infowindow.open()
    tempId ++
    markers.push(marker);
    log('pointOfInterests:', pointOfInterests)
  }


  // Sets the map on all markers in the array.
  // How is this being run
  function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }
  // console.log('markers--->', markers)

}
