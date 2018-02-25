<template>

  <div class="md-toolbar-section-end">

    <md-button class="md-icon-button" @click="toggleSearch">
      <md-icon>search</md-icon>
    </md-button>

    <Autocomplete v-if="$store.state.showSearch" :options="$store.state.search" class="search-box" @input="selected"></Autocomplete>

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
  methods: {
    selected (item) {
      this.$store.commit('search-box-selected', item)
    },
    toggleSearch () {
      this.$store.commit('toggleSearch')
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
