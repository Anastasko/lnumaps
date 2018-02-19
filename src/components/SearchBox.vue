<template>

  <div class="md-toolbar-section-end">

    <md-button class="md-icon-button" @click="search = !search">
      <md-icon>search</md-icon>
    </md-button>

    <Autocomplete v-if="search" :options="$store.state.search" class="search-box"></Autocomplete>

  </div>

</template>

<script>
import Autocomplete from './controls/Autocomplete'

export default {
  data () {
    return {
      search: false
    }
  },
  components: {
    Autocomplete
  }
}
</script>

<style>

.search-box input {
  color: white !important;
  -webkit-text-fill-color: white !important;
}
.search-box.md-field.md-theme-default:after {
    background-color: #ffffffdd !important;
}

</style>
