var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Voting_Precincts_1 = new ol.format.GeoJSON();
var features_Voting_Precincts_1 = format_Voting_Precincts_1.readFeatures(json_Voting_Precincts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voting_Precincts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voting_Precincts_1.addFeatures(features_Voting_Precincts_1);
var lyr_Voting_Precincts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Voting_Precincts_1, 
                style: style_Voting_Precincts_1,
                interactive: true,
                title: 'Voting_Precincts'
            });
var format_AlamancePrecnt125Rand_2 = new ol.format.GeoJSON();
var features_AlamancePrecnt125Rand_2 = format_AlamancePrecnt125Rand_2.readFeatures(json_AlamancePrecnt125Rand_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlamancePrecnt125Rand_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlamancePrecnt125Rand_2.addFeatures(features_AlamancePrecnt125Rand_2);
var lyr_AlamancePrecnt125Rand_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlamancePrecnt125Rand_2, 
                style: style_AlamancePrecnt125Rand_2,
                interactive: true,
    title: 'AlamancePrecnt125Rand<br />\
    <img src="styles/legend/AlamancePrecnt125Rand_2_0.png" /> DEM<br />\
    <img src="styles/legend/AlamancePrecnt125Rand_2_1.png" /> LIB<br />\
    <img src="styles/legend/AlamancePrecnt125Rand_2_2.png" /> REP<br />\
    <img src="styles/legend/AlamancePrecnt125Rand_2_3.png" /> UNA<br />'
        });

lyr_GoogleMap_0.setVisible(true);lyr_Voting_Precincts_1.setVisible(true);lyr_AlamancePrecnt125Rand_2.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_Voting_Precincts_1,lyr_AlamancePrecnt125Rand_2];
lyr_Voting_Precincts_1.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'prec_id': 'prec_id', 'enr_desc': 'enr_desc', 'county_nam': 'county_nam', 'of_prec_id': 'of_prec_id', 'county_id': 'county_id', 'st_areasha': 'st_areasha', 'st_perimet': 'st_perimet', });
lyr_AlamancePrecnt125Rand_2.set('fieldAliases', {'county_id': 'county_id', 'county_des': 'county_des', 'voter_reg_': 'VoterID', 'last_name': 'Last Name', 'first_name': 'First Name', 'middle_nam': 'Middle Nm', 'name_suffi': 'Name Suffix', 'voter_stat': 'Voter Stat', 'res_street': 'Street Name', 'field_10': 'field_10', 'res_city_d': 'City', 'state_cd': 'state_cd', 'zip_code': 'Zip', 'full_phone': 'full_phone', 'registr_dt': 'registr_dt', 'race_code': 'Race', 'ethnic_cod': 'Ethnic', 'party_cd': 'Party', 'gender_cod': 'Gender', 'birth_year': 'Birth Yr', 'drivers_li': 'drivers_li', 'precinct_a': 'Precinct', 'cong_dist_': 'Cong Dist', 'super_cour': 'super_cour', 'judic_dist': 'judic_dist', 'nc_senate_': 'Senate', 'nc_house_a': 'House', 'dist_1_abb': 'dist_1_abb', 'dist_1_des': 'dist_1_des', 'vtd_abbrv': 'vtd_abbrv', 'vtd_desc': 'vtd_desc', 'YRAND': 'YRAND', 'XRAND': 'XRAND', });
lyr_Voting_Precincts_1.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'prec_id': 'TextEdit', 'enr_desc': 'TextEdit', 'county_nam': 'TextEdit', 'of_prec_id': 'TextEdit', 'county_id': 'Range', 'st_areasha': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AlamancePrecnt125Rand_2.set('fieldImages', {'county_id': 'Hidden', 'county_des': 'Hidden', 'voter_reg_': 'TextEdit', 'last_name': 'TextEdit', 'first_name': 'TextEdit', 'middle_nam': 'TextEdit', 'name_suffi': 'TextEdit', 'voter_stat': 'TextEdit', 'res_street': 'TextEdit', 'field_10': 'Hidden', 'res_city_d': 'TextEdit', 'state_cd': 'Hidden', 'zip_code': 'TextEdit', 'full_phone': 'Hidden', 'registr_dt': 'DateTime', 'race_code': 'TextEdit', 'ethnic_cod': 'TextEdit', 'party_cd': 'TextEdit', 'gender_cod': 'TextEdit', 'birth_year': 'TextEdit', 'drivers_li': 'Hidden', 'precinct_a': 'TextEdit', 'cong_dist_': 'Hidden', 'super_cour': 'Hidden', 'judic_dist': 'Hidden', 'nc_senate_': 'TextEdit', 'nc_house_a': 'TextEdit', 'dist_1_abb': 'Hidden', 'dist_1_des': 'Hidden', 'vtd_abbrv': 'Hidden', 'vtd_desc': 'Hidden', 'YRAND': 'Hidden', 'XRAND': 'Hidden', });
lyr_Voting_Precincts_1.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'prec_id': 'no label', 'enr_desc': 'no label', 'county_nam': 'no label', 'of_prec_id': 'no label', 'county_id': 'no label', 'st_areasha': 'no label', 'st_perimet': 'no label', });
lyr_AlamancePrecnt125Rand_2.set('fieldLabels', {'voter_reg_': 'inline label', 'last_name': 'inline label', 'first_name': 'inline label', 'middle_nam': 'no label', 'name_suffi': 'no label', 'voter_stat': 'inline label', 'res_street': 'inline label', 'res_city_d': 'inline label', 'zip_code': 'inline label', 'registr_dt': 'inline label', 'race_code': 'inline label', 'ethnic_cod': 'inline label', 'party_cd': 'no label', 'gender_cod': 'inline label', 'birth_year': 'inline label', 'precinct_a': 'inline label', 'nc_senate_': 'inline label', 'nc_house_a': 'inline label', });
lyr_AlamancePrecnt125Rand_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});