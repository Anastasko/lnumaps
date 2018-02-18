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
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Місто</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Корпуси</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
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
import config from '@/config'
import SearchBox from './components/SearchBox'

export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  }),
  created () {
    fetch(config.api)
      .then(response => response.json())
      .then(t => {
        this.tss = t
      })
  },
  components: {
    'search-box': SearchBox
  }
}
</script>
