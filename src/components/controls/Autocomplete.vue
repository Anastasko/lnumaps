<template>

  <md-autocomplete :md-options="options">
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
      selected: null
    }
  },
  methods: {
    createNew (text) {
      console.log(text)
    }
  }
}
</script>
