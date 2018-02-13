<template>
  <div class="box">
    Components
{{$store.state.count}}
    <form-input label="Input" v-model="model.input"> </form-input>

    <form-checkbox label="Checkbox" v-model="model.checkbox"> </form-checkbox>

    <form-autocomplete label="Autocomplete" v-model="model.autocomplete.data" :options="model.autocomplete.options"></form-autocomplete>


<pre>{{model}}</pre>
  </div>
</template>

<script>
import Input from './controls/Input'
import Checkbox from './controls/Checkbox'
import Autocomplete from './controls/Autocomplete'

export default {
  data: function () {
    return {
      model: {
        input: '123',
        checkbox: true,
        autocomplete: {
          data: {
            id: 5
          },
          options: [{
            id: 5,
            text: 'Five'
          }, {
            id: 7,
            text: 'Seven'
          }]
        }
      }
    }
  },
  components: {
    'form-input': Input,
    'form-checkbox': Checkbox,
    'form-autocomplete': Autocomplete
  }
}
</script>

<style>
.box {
  margin: 10px;
}
</style>
