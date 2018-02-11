<template>

    <md-checkbox v-model="checked" class="md-primary">{{label}}</md-checkbox>

</template>

<script>
export default {
  props: ['value', 'label'],
  data: function () {
    return {
      checked: this.value
    }
  },
  watch: {
    checked (val) {
      this.$emit('input', val)
    }
  }
}
</script>
