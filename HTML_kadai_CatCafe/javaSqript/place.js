function mapInit() {
    var centerPosition = new google.maps.LatLng(35.656956, 139.695518);
    var option = {
        zoom : 18,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    //地図本体描画
    var googlemap = new google.maps.Map(document.getElementById("mapField"), option);
}
 
    mapInit();