<template>

  <gmap-marker
    v-if="loaded"
    :position="marker.position"
    :icon="icon"
    :clickable="true"
    :draggable="false"
    @click="$emit('choose')">
  </gmap-marker>

</template>

<script>
import cachedDownloader from '../utils/cachedDownloader'

export default {
  props: ['marker'],
  data () {
    return {
      icon: '',
      loaded: false
    }
  },
  async created () {
    this.icon = await this.iconUrl(this.marker.kind)
    this.icon = this.icon.replace('data:text/plain', 'data:image/png')
    this.loaded = true
  },
  methods: {
    async iconUrl (kind) {
      let kin = await this.$store.dispatch('itemKind/find', kind.id)
      let ico = await this.$store.dispatch('androidIcon/find', kin.androidIcon.id)
      return cachedDownloader.get(ico.hdpi.url)
    }
  }
}
</script>
