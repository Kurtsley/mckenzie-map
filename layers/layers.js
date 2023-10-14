ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:102100").setExtent([-11572862.775433, 6018389.480312, -11427594.633947, 6134886.067562]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_resilist_1 = new ol.format.GeoJSON();
var features_resilist_1 = format_resilist_1.readFeatures(json_resilist_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_resilist_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_resilist_1.addFeatures(features_resilist_1);
var lyr_resilist_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_resilist_1, 
                style: style_resilist_1,
                interactive: true,
                title: '<img src="styles/legend/resilist_1.png" /> resilist'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_resilist_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_resilist_1];
lyr_resilist_1.set('fieldAliases', {'ADDRESS': 'ADDRESS', 'HOUSENUM': 'HOUSENUM', 'STRNAME': 'STRNAME', 'BUILDING': 'BUILDING', 'UNIT': 'UNIT', 'FLOOR': 'FLOOR', 'ROOM': 'ROOM', 'SEAT': 'SEAT', 'LOC': 'LOC', 'LANDMARK': 'LANDMARK', 'TYPE': 'TYPE', 'CITY': 'CITY', 'POSTALCOMM': 'POSTALCOMM', 'ZIPCODE': 'ZIPCODE', 'XCoord': 'XCoord', 'YCoord': 'YCoord', 'GEOANGLE': 'GEOANGLE', });
lyr_resilist_1.set('fieldImages', {'ADDRESS': '', 'HOUSENUM': '', 'STRNAME': '', 'BUILDING': '', 'UNIT': '', 'FLOOR': '', 'ROOM': '', 'SEAT': '', 'LOC': '', 'LANDMARK': '', 'TYPE': '', 'CITY': '', 'POSTALCOMM': '', 'ZIPCODE': '', 'XCoord': '', 'YCoord': '', 'GEOANGLE': '', });
lyr_resilist_1.set('fieldLabels', {'ADDRESS': 'inline label', 'HOUSENUM': 'no label', 'STRNAME': 'no label', 'BUILDING': 'no label', 'UNIT': 'no label', 'FLOOR': 'no label', 'ROOM': 'no label', 'SEAT': 'no label', 'LOC': 'no label', 'LANDMARK': 'no label', 'TYPE': 'inline label', 'CITY': 'inline label', 'POSTALCOMM': 'no label', 'ZIPCODE': 'inline label', 'XCoord': 'inline label', 'YCoord': 'inline label', 'GEOANGLE': 'no label', });
lyr_resilist_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});