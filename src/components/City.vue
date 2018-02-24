<template>

  <gmap-map
    :center="lviv"
    :zoom="15"
    class="my-map"
    @click="info.open = false">
      <gmap-info-window :options="info.options" :position="info.pos" :opened="info.open" @closeclick="info.open=false">
        <router-link :to="`cityItem/${info.id}`">
            <md-icon class="goto">input</md-icon>
        </router-link>
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
        id: null,
        pos: null,
        content: '',
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
      this.info.open = true
      this.info.pos = m.position
      this.info.id = m.id
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
  height: calc(100vh - 48px)
}
.my-map .goto {
  opacity: 0.5;
}
.my-map .goto:hover {
  opacity: 0.9;
  cursor: pointer;
}
.gm-style-iw + div {display: none;}
</style>
