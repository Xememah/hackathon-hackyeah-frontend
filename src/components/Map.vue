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
import DataService from '../service.js'

export default {
  data() {
    return {
      markers: {},
    }
  },
  mounted: function () {
    this.initMap()
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

      // Try HTML5 geolocation.
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
          console.log('geolocation not supported 1')
          // handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
          console.log('geolocation not supported 2')
          // Browser doesn't support Geolocation
          // handleLocationError(false, infoWindow, map.getCenter());
      }
    },
    populateMarkers: function () {

    }
  }
}
</script>