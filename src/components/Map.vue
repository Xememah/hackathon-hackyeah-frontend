<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<style>
#map {
  height: calc(100vh - 56px);
  width: 100%;
  background-color: #cc555555;
}
.markers-label {
  font-size: 10px;
  padding-left: 18px;
  font-weight: 700;
}
</style>

<script>
import DataService from '../dataservice.js'

export default {
  data() {
    return {
      offers: {}
    }
  },
  mounted: function () {
    this.initMap()
    this.fetchOffers()
  },
  methods: {
    initMap: function () {
      console.log("initMap()")
      var center = { lat: 50.0646501, lng: 19.9449799 };
      this.map = new google.maps.Map(document.getElementById('map'), {
        gestureHandling: "greedy",
        zoom: 13,
        center: center
      })

      var self = this
      if (navigator.geolocation) {
        this.$emit('in-progress-dialog', true)
        console.log('geo emitted')

        map = this.map
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          console.log(pos)
          
          // this.infoWindow.setPosition(pos);
          // this.infoWindow.setContent('Location found.');
          // this.infoWindow.open(this.map);
          
          map.panTo(pos);
          map.setZoom(15);
          google.maps.event.addListenerOnce(map, 'idle', function(){
              self.$emit('in-progress-dialog', false)
          });
        }, function() {
          console.log('geolocation is not supported 1')
          // handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
          console.log('geolocation is not supported 2')
          // Browser doesn't support Geolocation
          // handleLocationError(false, infoWindow, map.getCenter());
      }
    },
    fetchOffers: function () {
      var dataService = new DataService()
      this.offers = dataService.getOffers().then((s) => {
        this.offers = JSON.parse(s)
        console.log(this.offers)
        this.populateOffers()
      })
    },
    populateOffers: function () {
      console.log('populate init')
      for (let i in this.offers) {
        let item = this.offers[i];
        var tooltip;
        var map = this.map
        
        let latLng = new google.maps.LatLng(item['latitude'], item['longitude']);

        let price = ' zł'
        var color = "#222"
        var opacity = 0.3
        var scale = 7
        var short_date = Number(item['CreatedAt'].substring(8, 10))

        console.log(item['CreatedAt'] + ' : ' + short_date)

        let marker = new MarkerWithLabel({
          position: latLng,
          map: this.map,
          clickable: true,
          title: item['title'],
          labelContent: price,
          labelClass: "markers-label",
          labelAnchor: new google.maps.Point(5, 5),
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: scale,
            strokeWeight: 4,
            strokeColor: "#fff",
            fillColor: color,
            fillOpacity: opacity
          },
        });

        google.maps.event.addListener(marker, 'click', function () {
          map.panTo(this.position);
          if (tooltip) {
            tooltip.close();
          }
          tooltip = new google.maps.InfoWindow({
            content: '<table><tr><td colspan="2"><strong>'+ item['title'] + ' <a href="' + item['link'] + '" target="_blank">(Ogłoszenie)</a></strong></td></tr><tr><td><img src="' + item['thumbnail'] + '"/>' + item['submission_date'] + '</td><td>' + item['short_desc'] + '<br/><hr/><a href="#/s/' + item['hash'] + '" class="btn blue" style="width: 100%" target="_blank">Więcej na Wroflats</a></tr></table>'
          });
          tooltip.open(map, this);
        })
      }
    }
  }
}
</script>