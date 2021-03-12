import { AppState } from '../AppState'
import { api } from './AxiosService'

class PokemonService {
  async getAll() {
    const res = await api.get('pokemon')
    AppState.pokemon = res.data.results
    console.log(res)
  }

  async setActivePokemon(pokemonData) {
    const res = await api.get(`pokemon/${pokemonData.name}`)
    AppState.activePokemon = res.data
    console.log(res)
  }
}

export const pokemonService = new PokemonService()
