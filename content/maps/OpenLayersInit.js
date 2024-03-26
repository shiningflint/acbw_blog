(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Need to convert from EPSG:4326 projection standard to EPSG:3857
    const center = ol.proj.transform([139.61035, 35.50178], "EPSG:4326", "EPSG:3857");

    var map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: "mainMap",
      view: new ol.View({
      center: center,
      zoom: 15
      })
    });
  });
})();
