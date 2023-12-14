ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32717").setExtent([280546.373517, 8915709.387923, 1482782.495852, 9680857.235822]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_departamento_1 = new ol.format.GeoJSON();
var features_departamento_1 = format_departamento_1.readFeatures(json_departamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_departamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departamento_1.addFeatures(features_departamento_1);
var lyr_departamento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_departamento_1, 
                style: style_departamento_1,
                interactive: true,
    title: 'departamento<br />\
    <img src="styles/legend/departamento_1_0.png" /> AMAZONAS<br />\
    <img src="styles/legend/departamento_1_1.png" /> ANCASH<br />\
    <img src="styles/legend/departamento_1_2.png" /> APURIMAC<br />\
    <img src="styles/legend/departamento_1_3.png" /> AREQUIPA<br />\
    <img src="styles/legend/departamento_1_4.png" /> AYACUCHO<br />\
    <img src="styles/legend/departamento_1_5.png" /> CAJAMARCA<br />\
    <img src="styles/legend/departamento_1_6.png" /> CALLAO<br />\
    <img src="styles/legend/departamento_1_7.png" /> CUSCO<br />\
    <img src="styles/legend/departamento_1_8.png" /> HUANCAVELICA<br />\
    <img src="styles/legend/departamento_1_9.png" /> HUANUCO<br />\
    <img src="styles/legend/departamento_1_10.png" /> ICA<br />\
    <img src="styles/legend/departamento_1_11.png" /> JUNIN<br />\
    <img src="styles/legend/departamento_1_12.png" /> LA LIBERTAD<br />\
    <img src="styles/legend/departamento_1_13.png" /> LAMBAYEQUE<br />\
    <img src="styles/legend/departamento_1_14.png" /> LIMA<br />\
    <img src="styles/legend/departamento_1_15.png" /> LORETO<br />\
    <img src="styles/legend/departamento_1_16.png" /> MADRE DE DIOS<br />\
    <img src="styles/legend/departamento_1_17.png" /> MOQUEGUA<br />\
    <img src="styles/legend/departamento_1_18.png" /> PASCO<br />\
    <img src="styles/legend/departamento_1_19.png" /> PIURA<br />\
    <img src="styles/legend/departamento_1_20.png" /> PUNO<br />\
    <img src="styles/legend/departamento_1_21.png" /> SAN MARTIN<br />\
    <img src="styles/legend/departamento_1_22.png" /> TACNA<br />\
    <img src="styles/legend/departamento_1_23.png" /> TUMBES<br />\
    <img src="styles/legend/departamento_1_24.png" /> UCAYALI<br />\
    <img src="styles/legend/departamento_1_25.png" /> <br />'
        });
var format_PasivosAmbientales_2 = new ol.format.GeoJSON();
var features_PasivosAmbientales_2 = format_PasivosAmbientales_2.readFeatures(json_PasivosAmbientales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_PasivosAmbientales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasivosAmbientales_2.addFeatures(features_PasivosAmbientales_2);cluster_PasivosAmbientales_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PasivosAmbientales_2
});
var lyr_PasivosAmbientales_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PasivosAmbientales_2, 
                style: style_PasivosAmbientales_2,
                interactive: true,
                title: '<img src="styles/legend/PasivosAmbientales_2.png" /> PasivosAmbientales'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_departamento_1.setVisible(true);lyr_PasivosAmbientales_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_departamento_1,lyr_PasivosAmbientales_2];
lyr_departamento_1.set('fieldAliases', {'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', 'Foto': 'Foto', });
lyr_PasivosAmbientales_2.set('fieldAliases', {'ORDEN': 'ORDEN', 'PASIVO': 'PASIVO', 'DISTRITO': 'DISTRITO', 'PROVINCIA': 'PROVINCIA', 'DEPARTAMEN': 'DEPARTAMEN', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'ZONA': 'ZONA', 'CLASE': 'CLASE', 'RESOLUCION': 'RESOLUCION', 'NEAR_FID': 'NEAR_FID', 'NEAR_DIST': 'NEAR_DIST', });
lyr_departamento_1.set('fieldImages', {'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', 'Foto': 'TextEdit', });
lyr_PasivosAmbientales_2.set('fieldImages', {'ORDEN': 'TextEdit', 'PASIVO': 'TextEdit', 'DISTRITO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'ZONA': 'TextEdit', 'CLASE': 'TextEdit', 'RESOLUCION': 'TextEdit', 'NEAR_FID': 'Range', 'NEAR_DIST': 'TextEdit', });
lyr_departamento_1.set('fieldLabels', {'NOMBDEP': 'inline label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', 'Foto': 'no label', });
lyr_PasivosAmbientales_2.set('fieldLabels', {'ORDEN': 'inline label', 'PASIVO': 'no label', 'DISTRITO': 'no label', 'PROVINCIA': 'no label', 'DEPARTAMEN': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', 'ZONA': 'no label', 'CLASE': 'no label', 'RESOLUCION': 'no label', 'NEAR_FID': 'no label', 'NEAR_DIST': 'no label', });
lyr_PasivosAmbientales_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});