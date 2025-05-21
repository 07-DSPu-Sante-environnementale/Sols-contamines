var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Municipalits_1 = new ol.format.GeoJSON();
var features_Municipalits_1 = format_Municipalits_1.readFeatures(json_Municipalits_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalits_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalits_1.addFeatures(features_Municipalits_1);
var lyr_Municipalits_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipalits_1, 
                style: style_Municipalits_1,
                popuplayertitle: 'Municipalités',
                interactive: false,
                title: '<img src="styles/legend/Municipalits_1.png" /> Municipalités'
            });
var format_tatdelarhabilitationdessolscontamins_2 = new ol.format.GeoJSON();
var features_tatdelarhabilitationdessolscontamins_2 = format_tatdelarhabilitationdessolscontamins_2.readFeatures(json_tatdelarhabilitationdessolscontamins_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tatdelarhabilitationdessolscontamins_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tatdelarhabilitationdessolscontamins_2.addFeatures(features_tatdelarhabilitationdessolscontamins_2);
var lyr_tatdelarhabilitationdessolscontamins_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tatdelarhabilitationdessolscontamins_2, 
                style: style_tatdelarhabilitationdessolscontamins_2,
                popuplayertitle: 'État de la réhabilitation des sols contaminés',
                interactive: true,
    title: 'État de la réhabilitation des sols contaminés<br />\
    <img src="styles/legend/tatdelarhabilitationdessolscontamins_2_0.png" /> Terminée<br />\
    <img src="styles/legend/tatdelarhabilitationdessolscontamins_2_1.png" /> Non terminée<br />\
    <img src="styles/legend/tatdelarhabilitationdessolscontamins_2_2.png" /> Non nécessaire<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Municipalits_1.setVisible(true);lyr_tatdelarhabilitationdessolscontamins_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Municipalits_1,lyr_tatdelarhabilitationdessolscontamins_2];
lyr_Municipalits_1.set('fieldAliases', {'MUS_VA_SUP': 'MUS_VA_SUP', 'MUS_NO_IND': 'MUS_NO_IND', 'MUS_DE_IND': 'MUS_DE_IND', 'MUS_CO_GEO': 'MUS_CO_GEO', 'MUS_CO_DES': 'MUS_CO_DES', 'MUS_NM_MUN': 'MUS_NM_MUN', 'MUS_NM_NMC': 'MUS_NM_NMC', 'MUS_CO_MRC': 'MUS_CO_MRC', 'MUS_NM_MRC': 'MUS_NM_MRC', 'MUS_CO_REG': 'MUS_CO_REG', 'MUS_NM_REG': 'MUS_NM_REG', 'MUS_NM_AGG': 'MUS_NM_AGG', 'MUS_CO_COM': 'MUS_CO_COM', 'MUS_NM_COM': 'MUS_NM_COM', 'MUS_DA_CON': 'MUS_DA_CON', 'MUS_CO_MOD': 'MUS_CO_MOD', 'MUS_DA_MOD': 'MUS_DA_MOD', 'MUS_CO_SOU': 'MUS_CO_SOU', 'MUS_CO_REF': 'MUS_CO_REF', 'MUS_CO_VER': 'MUS_CO_VER', 'ID': 'ID', });
lyr_tatdelarhabilitationdessolscontamins_2.set('fieldAliases', {'fid': 'fid', 'No fiche': 'No fiche', 'Nom du dos': 'Dossier', 'Adresse': 'Adresse', 'MRC': 'MRC', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nature - E': 'Nature des contaminants - Eau souterraine', 'Nature - S': 'Nature des contaminants - Sol', 'État de l': 'État de l', 'Statut': 'État de la réhabilitation', 'Année ter': 'Année terminée', 'Date de cr': 'Date de cr', });
lyr_Municipalits_1.set('fieldImages', {'MUS_VA_SUP': 'TextEdit', 'MUS_NO_IND': 'TextEdit', 'MUS_DE_IND': 'TextEdit', 'MUS_CO_GEO': 'TextEdit', 'MUS_CO_DES': 'TextEdit', 'MUS_NM_MUN': 'TextEdit', 'MUS_NM_NMC': 'TextEdit', 'MUS_CO_MRC': 'TextEdit', 'MUS_NM_MRC': 'TextEdit', 'MUS_CO_REG': 'TextEdit', 'MUS_NM_REG': 'TextEdit', 'MUS_NM_AGG': 'TextEdit', 'MUS_CO_COM': 'TextEdit', 'MUS_NM_COM': 'TextEdit', 'MUS_DA_CON': 'DateTime', 'MUS_CO_MOD': 'TextEdit', 'MUS_DA_MOD': 'DateTime', 'MUS_CO_SOU': 'TextEdit', 'MUS_CO_REF': 'TextEdit', 'MUS_CO_VER': 'TextEdit', 'ID': 'TextEdit', });
lyr_tatdelarhabilitationdessolscontamins_2.set('fieldImages', {'fid': 'TextEdit', 'No fiche': 'TextEdit', 'Nom du dos': 'TextEdit', 'Adresse': 'TextEdit', 'MRC': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nature - E': 'TextEdit', 'Nature - S': 'TextEdit', 'État de l': 'TextEdit', 'Statut': 'TextEdit', 'Année ter': 'TextEdit', 'Date de cr': 'DateTime', });
lyr_Municipalits_1.set('fieldLabels', {'MUS_VA_SUP': 'no label', 'MUS_NO_IND': 'no label', 'MUS_DE_IND': 'no label', 'MUS_CO_GEO': 'no label', 'MUS_CO_DES': 'no label', 'MUS_NM_MUN': 'no label', 'MUS_NM_NMC': 'no label', 'MUS_CO_MRC': 'no label', 'MUS_NM_MRC': 'no label', 'MUS_CO_REG': 'no label', 'MUS_NM_REG': 'no label', 'MUS_NM_AGG': 'no label', 'MUS_CO_COM': 'no label', 'MUS_NM_COM': 'no label', 'MUS_DA_CON': 'no label', 'MUS_CO_MOD': 'no label', 'MUS_DA_MOD': 'no label', 'MUS_CO_SOU': 'no label', 'MUS_CO_REF': 'no label', 'MUS_CO_VER': 'no label', 'ID': 'no label', });
lyr_tatdelarhabilitationdessolscontamins_2.set('fieldLabels', {'fid': 'hidden field', 'No fiche': 'header label - visible with data', 'Nom du dos': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'MRC': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Nature - E': 'header label - always visible', 'Nature - S': 'header label - always visible', 'État de l': 'hidden field', 'Statut': 'header label - visible with data', 'Année ter': 'header label - visible with data', 'Date de cr': 'hidden field', });
lyr_tatdelarhabilitationdessolscontamins_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});