<template>
  <div v-if="!state.activePokemon">
    <p v-else="state.activePokemon">
      <img :src="state.activePokemon.sprites.back_default" alt="" srcset="">
      {{ state.activePokemon.name }}
      Height: {{ state.activePokemon.height }} decimeters
      Weight: {{ state.activePokemon.weight }} hectograms
    </p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
export default {
  setup() {
    const state = reactive({
      activePokemon: computed(() => AppState.activePokemon)
    })
    return { state }
  }
}
</script>

<style>

</style>
