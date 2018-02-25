<template>

<div style="padding: 10px">


    <form novalidate class="md-layout" @submit.prevent="validate">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{title}}</div>
          </md-card-header>

          <md-card-content>

            <div v-for="field in fields" :key="field.id">
              <component :is="input(field)" v-bind="inputData(field)" v-model="item[field.name]"></component>
            </div>

          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button @click="$router.go(-1)">НАЗАД</md-button>
            <md-button type="submit" class="md-primary" :disabled="sending">{{ submitButtonText }}</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="saved">Saved!</md-snackbar>
      </form>

</div>

</template>

<script>
import { mapGetters } from 'vuex'
import Input from './controls/Input'
import Checkbox from './controls/Checkbox'
import Autocomplete from './controls/Autocomplete'

export default {
  props: ['typeName', 'title', 'id'],
  data: () => ({
    sending: false,
    saved: false,
    item: {}
  }),
  async created () {
    if (this.id) {
      this.item = await this.$store.dispatch(this.typeName + '/find', {id: this.id})
    }
  },
  computed: {
    ...mapGetters(['domain']),
    type () {
      return this.domain.find(t => t.name === this.typeName) || {}
    },
    fields () {
      return (this.type.fields || []).filter(field => field.kind !== 'COLLECTION')
    },
    submitButtonText () {
      if (!this.item) {
        return 'СТВОРИТИ'
      }
      return 'ЗБЕРЕГТИ'
    }
  },
  methods: {
    input (field) {
      if (this.primitive(field.type)) {
        return 'form-input'
      }
      return 'form-autocomplete'
    },
    inputData (field) {
      let data = {
        label: field.label
      }
      if (!this.primitive(field.type)) {
        data.options = []
      }
      return data
    },
    primitive (arg) {
      let x = this.domain.find(t => t.id === arg.id)
      return x.kind === 'PRIMITIVE'
    },
    post () {
      this.sending = true
      this.saved = true
    },
    validate () {
      this.post()
    }
  },
  components: {
    'form-input': Input,
    'form-checkbox': Checkbox,
    'form-autocomplete': Autocomplete
  }
}
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
