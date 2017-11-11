// initialize our map
var map = L.map('map', {
    center:[ -1.375152,  37.995220],//center map to kitui
    zoom:16 //set the zoom level
});

//add openstreet baselayer to the map 
var OpenStreetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//add marker/point and bind popup with detail

//L.marker([-1.096928, 37.015351]).bindPopup("point").addTo(map);

// define a blank geoJSON Layer
var points = L.geoJSON(null,{
	onEachFeature:function(feature,layer){
		//bind popup with builidngs name
		//you can do this to any attribute of the geojson data
		layer.bindPopup(feature.properties.Name);
	}
});

//get the geojson data with ajax, and add it to the blank layer we created
$.getJSON('.../data/Poplatedpoints.geojson',function(data){
	points.addData(data);
});

// finally add the layer to the map
points.addTo(map);
