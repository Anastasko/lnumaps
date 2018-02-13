<template>

  <md-autocomplete :value="findSelected" @md-changed="changed" @md-selected="selected1" :md-options="options">
    <label>{{label}}</label>

    <template slot="md-autocomplete-item" slot-scope="{ item, term }">
      <md-highlight-text :md-term="term">{{ item.text }}</md-highlight-text>
    </template>

    <template slot="md-autocomplete-empty" slot-scope="{ term }">
      No items matching "{{ term }}" were found. <a @click="createNew(term)">Create a new</a> one!
    </template>

  </md-autocomplete>

</template>

<script>
export default {
  props: ['value', 'label', 'options'],
  data: function () {
    return {
      selected: this.value
    }
  },
  computed: {
    findSelected () {
      let result = ''
      if (this.selected) {
        this.options.forEach(o => {
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
    selected1 (item) {
      this.selected = {
        id: item.id
      }
    },
    changed (text) {
      if (!text) {
        this.selected = null
      }
    }
  }
}
</script>
