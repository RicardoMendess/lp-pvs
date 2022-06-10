<template>
  <div class="prato-verde-page">
    <div class="columns-12 flex-row justify-around">
      <div class="container px-6">
        <div class="columns-1">
          <LogoComponent></LogoComponent>
        </div>
        <div class="columns-7 flex">
          <GroupButtonsHeader></GroupButtonsHeader>
        </div>
        <div class="columns-4">
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GroupButtonsHeader from '~/components/molecules/GroupButtonsHeader.vue'
import LogoComponent from '~/components/atoms/Logo.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    GroupButtonsHeader,
    LogoComponent
  }
})
</script>
