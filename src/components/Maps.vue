<template>
<div>
  <md-card>
      <md-card-header>
        <div class="md-title">Головний корпус</div>
      </md-card-header>

      <md-card-content>
        <md-list>

          <router-link v-for="map in maps" :to="`/map/view/${map.id}`" :key="map.id">
            <md-list-item href="#">
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Поверх {{map.floor}}</span>
            </md-list-item>
          </router-link>

        </md-list>
      </md-card-content>

      <md-card-actions>
        <md-button>Edit</md-button>
      </md-card-actions>

    </md-card>
</div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('map/fetch')
  },
  computed: {
    maps () {
      return this.$store.state.map.data.sort((a, b) => a.floor - b.floor)
    }
  }
}
</script>
