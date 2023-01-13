
    var mapContainer = document.querySelector('.map'),  
        mapOption = { 
        center: new kakao.maps.LatLng(35.171181, 129.127175), 
        level: 4
        };

        var map = new kakao.maps.Map(mapContainer, mapOption); 

        var markerPosition  = new kakao.maps.LatLng(35.171181, 129.127175); 

        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);

