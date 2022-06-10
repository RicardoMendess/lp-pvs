<template>
    <div>
      <div class="columns-2">
        <buttonInicio></buttonInicio>
      </div>
      <div class="columns-3">
        <buttonQuemSomos></buttonQuemSomos>
      </div>
      <div class="columns-2">
        <buttonContato></buttonContato>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonContato from '../atoms/ButtonContato.vue'
import ButtonInicio from '../atoms/ButtonInicio.vue'
import ButtonQuemSomos from '../atoms/ButtonQuemSomos.vue'

export default Vue.extend({
  name: 'GroupButtonsHeader',
  components: {
    ButtonInicio,
    ButtonQuemSomos,
    ButtonContato
  }
})
</script>
