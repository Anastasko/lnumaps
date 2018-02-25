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
    }
  },
  mounted () {
    let that = this
    d3.xml(config.host + '/uploads/maps/main_f2.svg',
      function (error, documentFragment) {
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
          // that.hideMenu = true;
          let transform = d3.event.transform
          // that.transform = transform;
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
