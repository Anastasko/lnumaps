<template>

  <gmap-map
    :center="lviv"
    :zoom="15"
    class="my-map"
  ></gmap-map>

</template>

<script>
export default {
  data () {
    return {
      lviv: {
        lat: 49.838,
        lng: 24.021
      }
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
