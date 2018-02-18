<template>

  <gmap-map
    :center="lviv"
    :zoom="15"
    class="my-map"
    @click="info.open = false">
      <gmap-info-window :options="info.options" :position="info.pos" :opened="info.open" @closeclick="info.open=false">
        {{info.content}}
      </gmap-info-window>
      <gmap-marker
        :key="index"
        v-for="(m, index) in $store.getters.markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(m)">
      </gmap-marker>
  </gmap-map>

</template>

<script>
export default {
  data () {
    return {
      lviv: {
        lat: 49.838,
        lng: 24.021
      },
      info: {
        open: false,
        content: '',
        pos: null,
        options: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        }
      }
    }
  },
  created () {
    this.$store.dispatch('search', {
      context: 'cityItem'
    })
  },
  methods: {
    toggleInfoWindow (m) {
      this.info.pos = m.position
      this.info.open = true
      this.info.content = m.infoText
    }
  }
}
</script>

<style>
.box {
  margin: 10px;
}
.my-map {
  width: 100%;
  height: calc(100vh - 50px)
}
</style>
