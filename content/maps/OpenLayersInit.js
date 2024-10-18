(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const layerConfig = [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ];

    // Need to convert from EPSG:4326 projection standard to EPSG:3857
    const center = ol.proj.transform([139.61035, 35.50178], "EPSG:4326", "EPSG:3857");

    const viewConfig = new ol.View({ center: center, zoom: 15 })

    const lineColor = '#c84d4b';

    // this is the vector style
    const style = {
      'Point': new ol.style.Style({
        image: new ol.style.Circle({
          fill: new ol.style.Fill({
            color: 'rgba(255,255,0,0.4)',
          }),
          radius: 2,
          stroke: new ol.style.Stroke({
            color: '#ff0',
            width: 1,
          }),
        }),
      }),
      'LineString': new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: lineColor,
          width: 3,
        }),
      }),
      'MultiLineString': new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: lineColor,
          width: 3,
        }),
      }),
    };

    // url: '/maps/workout-2023-12-09_12-25-_.gpx',
    // This is example for GPX file
    const vector = new ol.layer.Vector({
      source: new ol.source.Vector({
        url: '/maps/workout-2023-06-26_21-09.gpx',
        format: new ol.format.GPX(),
      }),
      style: function (feature) {
        return style[feature.getGeometry().getType()];
      },
    });

    const layerConfig2 = [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      vector
    ];

    const map = new ol.Map({
      layers: layerConfig2,
      target: "mainMap",
      view: new ol.View({
        // center: [-7916041.528716288, 5228379.045749711],
        center: center,
        zoom: 16,
      }),
    });

    vector.getSource().on('addfeature', function(){
      map.getView().fit(vector.getSource().getExtent());
      map.getView().setZoom(map.getView().getZoom() - 1);
    });

    // This is the real one
    // const map = new ol.Map({
    //   layers: layerConfig,
    //   target: "mainMap",
    //   view: viewConfig,
    // });
  });
})();
