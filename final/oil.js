let mypumpmap = L.map('pumpmapid').setView([28,-94], 7)
let myEarthmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.').addTo(mypumpmap)
let myTopomap = L.tileLayer ('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
let myOpenmap = L.tileLayer ('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png')

let myBasemaps = {
  'Earth map': myEarthmap,
  'Topo map': myTopomap,
  'Open street map': myOpenmap
}

let myLayerStyle = {
  color: 'Brown',
  radius: 3
}

function createPopup (feature, layer)
{
let date = feature.properties.INSTALL
let Id = feature.properties.PLATFORM_I
layer.bindPopup ('<strong>ID:</strong> ' + Id +  '<br><strong>Install date: </strong>' + date)
}

// add all of the GeoJSON data to the empty layer we created
function createCircles (feature, latlng) {
  return L.circleMarker(latlng, myLayerStyle)
}

// create an options object that specifies which function will called on each feature
let myLayerOptions = {
  pointToLayer: createCircles,
  onEachFeature: createPopup
}


// create the GeoJSON layer from the myLayerData object (not shown in this snippet)
L.geoJSON(platform, myLayerOptions).addTo(mypumpmap)

L.control.layers(myBasemaps).addTo(mypumpmap)
