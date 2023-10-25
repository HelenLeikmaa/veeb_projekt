let mapAPIKey = "AklPMjCptsG_biLxowUqJwJ0hl6CPOCPzZ5Am-MHlrf9EkXhfgpEWZDTF_yIfU8Q";

var map, infobox;


function GetMap() {

    "use strict";
    let centerPoint = new Microsoft.Maps.Location(58.38104, 26.71992);

    map = new Microsoft.Maps.Map("#map", {

        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 14,
        mapTypeId: Microsoft.Maps.MapTypeId.grayscale,
        disablePanning: true

    });

    infobox = new Microsoft.Maps.Infobox(centerPoint, {
        title: 'Visit us',
        description: 'Narva maantee 18, 51009 Tartu Email: delta@ut.ee Tel: +372 737 6363',
        showCloseButton: false
    });

    infobox.setMap(map);


}
