<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>

        <search-box></search-box>

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <h5 class="md-title">LNU Compass</h5>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>pin_drop</md-icon>
            <span class="md-list-item-text">Місто</span>
          </md-list-item>

          <md-list-item>
            <md-icon>business</md-icon>
            <span class="md-list-item-text">Корпуси</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
        <loading v-if="$store.state.loading"></loading>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 100vh;
  }
  .md-drawer {
    width: 230px;
    max-width: 70vw;
  }
  .md-app-content {
    padding: 0;
  }
</style>

<script>
import SearchBox from './components/SearchBox'
import Loading from './components/Loading'

export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  }),
  components: {
    'search-box': SearchBox,
    'loading': Loading
  }
}
</script>
