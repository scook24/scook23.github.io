let mypumpmap = L.map('pumpmapid').setView([30,-98], 4)
let myEarthmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.').addTo(mypumpmap)
let myTopomap = L.tileLayer ('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
let myOpenmap = L.tileLayer ('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png')

let myBasemaps = {
  'Earth map': myEarthmap,
  'Topo map': myTopomap,
  'Open street map': myOpenmap
}
L.control.layers(myBasemaps).addTo(mypumpmap)

L.geoJSON(platform).addTo(mypumpmap)
