<template>

  <md-autocomplete :value="findSelected" @md-changed="changed" @md-selected="select" :md-options="options || []" md-dense :md-fuzzy-search="false">
    <label>{{label}}</label>

    <template slot="md-autocomplete-item" slot-scope="{ item, term }">
      <md-highlight-text :md-term="term">{{ item.text }}</md-highlight-text>
    </template>

    <template slot="md-autocomplete-empty" slot-scope="{ term }">
      Нічого не знайдено для "{{ term }}".
      <span v-if="createLink"> <a @click="createNew(term)" href="#">Створити новий</a>! </span>
    </template>

  </md-autocomplete>

</template>

<script>
export default {
  props: ['value', 'label', 'options', 'createLink'],
  data: function () {
    return {
      selected: null,
      loadedOptions: []
    }
  },
  created () {
    this.options.then(x => {
      this.loadedOptions = x
    })
  },
  mounted () {
    console.log(this.value)
  },
  computed: {
    findSelected () {
      let result = ''
      if (this.selected) {
        this.loadedOptions.forEach(o => {
          if (o.id === this.selected.id) {
            result = o.text
          }
        })
      }
      return result
    }
  },
  watch: {
    selected (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    createNew (text) {
      console.log(text)
    },
    select (item) {
      this.selected = {
        id: item.id
      }
    },
    changed (text) {
      console.log('changed')
      if (!text) {
        this.selected = null
      }
    }
  }
}
</script>
