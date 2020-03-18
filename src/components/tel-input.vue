<template>
    <vue-tel-input v-model="value"></vue-tel-input>
</template>

<script>
import { VueTelInput } from 'vue-tel-input'
import { abstractField } from 'vue-form-generator'

export default {
  name: 'TelephoneInput',
  mixins: [abstractField],
  components: {VueTelInput}
}
</script>
