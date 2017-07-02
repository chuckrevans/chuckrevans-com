// Map
//////////////////////////////////
/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "projection": "miller",

  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },
  "zoomControl": {
		"zoomControlEnabled": false,
		"homeButtonEnabled": false,
		"panEventsEnabled": false
	},
// 15A892
  "areasSettings": {
    "unlistedAreasColor": "#15A892"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
    // Europe
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Stockholm",
      "latitude": 59.3293,
      "longitude": 18.0686
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Copenhagen",
      "latitude": 55.6761,
      "longitude": 12.5683
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Paris",
      "latitude": 48.8566,
      "longitude": 2.3522
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Barcelona",
      "latitude": 41.3851,
      "longitude": 2.1734
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ibiza",
      "latitude": 39.0200,
      "longitude": 1.4821
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Munich",
      "latitude": 48.1351,
      "longitude": 11.5820
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Amsterdam",
      "latitude": 52.3702,
      "longitude": 4.8952
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "London",
      "latitude": 51.5074,
      "longitude": -0.1278
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Riga",
      "latitude": 56.9496,
      "longitude": 24.1052
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Venica",
      "latitude": 45.4408,
      "longitude": 12.3155
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Rome",
      "latitude": 41.9028,
      "longitude": 12.4964
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Pula",
      "latitude": 44.8666,
      "longitude": 13.8496
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Hvar",
      "latitude": 43.1729,
      "longitude": 16.4411
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Dubrovnik",
      "latitude": 42.6507,
      "longitude": 18.0944
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Reykjavik",
      "latitude": 64.1265,
      "longitude": -21.8174
    }, {
    // Asia
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Goa",
      "latitude": 15.2993,
      "longitude": 74.1240
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Bangalore",
      "latitude": 12.9716,
      "longitude": 77.5946
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Chennai",
      "latitude": 13.0827,
      "longitude": 80.2707
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Shanghai",
      "latitude": 31.2304,
      "longitude": 121.4737
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Hong Kong",
      "latitude": 22.3964,
      "longitude": 114.1095
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Macau",
      "latitude": 22.1987,
      "longitude": 113.5439
    }, {
    // North America
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ensenada",
      "latitude": 31.8667,
      "longitude": -116.5964
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Macau",
      "latitude": 22.1987,
      "longitude": 113.5439
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "San Francisco",
      "latitude": 37.7749,
      "longitude": -122.4194
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Eugene",
      "latitude": 44.0521,
      "longitude": -123.0868
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Chicago",
      "latitude": 41.8781,
      "longitude": -87.6298
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Boston",
      "latitude": 42.3601,
      "longitude": -71.0589
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Chatham",
      "latitude": 41.6821,
      "longitude": -69.9598
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Nantucket",
      "latitude": 41.2835,
      "longitude": -70.0995
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Atlanta",
      "latitude": 33.7490,
      "longitude": -84.3880
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Las Vegas",
      "latitude": 36.1699,
      "longitude": -115.1398
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Oxford",
      "latitude": 34.3665,
      "longitude": -89.5192
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Maui",
      "latitude": 20.7984,
      "longitude": -156.3319
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "New Orleans",
      "latitude": 29.9511,
      "longitude": -90.0715
    }, {
    // Africa
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Marrakesh",
      "latitude": 31.6295,
      "longitude": -7.9811
    }  ]
  }
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}