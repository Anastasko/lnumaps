<template>

<div>
  <dynamic-form typeName="cityItem" title="Form" :id="id"></dynamic-form>
</div>

</template>

<script>
import DynamicForm from '../DynamicForm'

export default {
  components: {
    'dynamic-form': DynamicForm
  },
  data: () => ({
    id: null
  }),
  created () {
    this.id = +this.$route.params.id
  }
}
</script>

<style>

</style>
