<template>
  <div ref="map" class="my-map" id="map">

  </div>
</template>

<script>
import * as d3 from 'd3'
import config from '@/config'

export default {
  data () {
    return {
      map: null
    }
  },
  async mounted () {
    let that = this
    this.map = await this.$store.dispatch('map/find', this.$route.params.id)
    this.$store.commit('requestStarted')
    d3.xml(config.host + this.map.image.url,
      function (error, documentFragment) {
        that.$store.commit('requestCompleted')
        if (error) {
          console.log(error)
          return
        }
        console.log(documentFragment)
        let svgNode = documentFragment.getElementsByTagName('svg')[0]
        that.appendSVG(svgNode)
      })
  },
  methods: {
    appendSVG (svgNode) {
      let that = this
      this.svg = d3.select('#map')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .call(d3.zoom().on('zoom', function () {
          let transform = d3.event.transform
          that.svg.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')')
          d3.selectAll('.map-item').attr('r', that.mapItemRadius / transform.k)
        })).append('g')
      let node = that.svg.node()
      node.appendChild(svgNode)
    }
  }
}
</script>

<style>
#map {
  height: calc(100vh - 48px);
}
</style>
