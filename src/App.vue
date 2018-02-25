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
          <router-link to="/city">
            <md-list-item href="#">
              <md-icon>pin_drop</md-icon>
              <span class="md-list-item-text">Місто</span>
            </md-list-item>
          </router-link>

          <router-link to="/corps">
            <md-list-item href="#">
              <md-icon>business</md-icon>
              <span class="md-list-item-text">Корпуси</span>
            </md-list-item>
          </router-link>

        </md-list>
      </md-app-drawer>

      <md-app-content class="app-content">
        <router-view></router-view>
        <loading v-if="$store.getters.loading"></loading>
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
  .md-app-toolbar {
    min-height: 48px;
  }
  .md-app-content {
    padding: 0;
    height: calc(100vh - 48px)
  }
  .md-toolbar-section-end {
    height: 48px;
  }
</style>

<script>
import SearchBox from './components/SearchBox'
import Loading from './components/Loading'
import cachedDownloader from './utils/cachedDownloader'

export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  }),
  async created () {
    this.$store.dispatch('domain/fetch')
    this.$store.dispatch('itemKind/fetch')
    this.$store.dispatch('androidIcon/fetch').then(icons => {
      icons.forEach(icon => {
        cachedDownloader.download(icon.hdpi.url)
      })
    })
  },
  components: {
    'search-box': SearchBox,
    'loading': Loading
  }
}
</script>
