<template>

  <md-field>
    <label>{{label}}</label>
    <md-input :value="value" @input="val => $emit('input', val)"></md-input>
  </md-field>

</template>

<script>
export default {
  props: ['value', 'label']
}
</script>
