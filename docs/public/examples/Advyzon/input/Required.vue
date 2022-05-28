<template>
  <div class="q-pa-md required">
    <q-input outlined v-model="text" label="Required">
    </q-input>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>
