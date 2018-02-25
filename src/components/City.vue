<template>

  <gmap-map
    :center="center"
    :zoom="15"
    class="my-map"
    @click="info.open = false">
      <gmap-info-window :options="info.options" :position="info.pos" :opened="info.open" @closeclick="info.open=false">
        <router-link :to="`/cityItem/edit/${info.id}`">
            <md-icon class="goto">input</md-icon>
        </router-link>
        {{info.content}}
      </gmap-info-window>
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="choose(m, true)">
      </gmap-marker>
  </gmap-map>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    let lviv = {
      lat: 49.838,
      lng: 24.021
    }
    return {
      lviv,
      center: lviv,
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
  computed: {
    ...mapGetters(['markers'])
  },
  async created () {
    await this.$store.dispatch('search', {
      context: 'cityItem'
    })
    this.$store.watch(state => state.searchSelected, (selected) => {
      if (selected) {
        let marker = this.markers.find(m => m.id === +selected.id)
        this.choose(marker, false)
      }
    })
    let id = this.$route.params.id
    if (id) {
      this.navigate({id})
    }
  },
  watch: {
    '$route.params': function (to) {
      if (to.id && !to.preventNavigation) {
        this.navigate(to)
      }
    }
  },
  methods: {
    choose (m, preventNavigation) {
      this.openInfoWindow(m)
      this.$router.push({
        name: 'city',
        params: {
          id: m.id,
          preventNavigation
        }
      })
    },
    navigate (selected) {
      let marker = this.markers.find(m => m.id === +selected.id)
      this.center = marker.position
      this.openInfoWindow(marker)
    },
    openInfoWindow (m) {
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
