<template>
  <div class="container-fluid">
    <div class="row justify-content-between">
      <div class="col-4">
        <ul v-for="pokemonData in state.pokemon" :key="pokemonData.name" :pokemon="pokemonData">
          <li @click="setActivePokemon(pokemonData)">
            {{ pokemonData.name }}
          </li>
        </ul>
      </div>
      <div class="col-5">
        <ActivePokemon />
      </div>
      <div class="col-3">
        <ul>
          <li>
            I Hate it Here
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed, onMounted } from '@vue/runtime-core'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'Pokemon',
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.pokemon)
    })
    onMounted(async() => {
      await pokemonService.getAll()
    })
    return {
      state,
      async setActivePokemon(pokemonData) {
        await pokemonService.setActivePokemon(pokemonData)
      }
    }
  }
}
</script>

<style>

</style>
