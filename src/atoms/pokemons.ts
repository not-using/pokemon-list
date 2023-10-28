import { atom } from 'recoil'
import { Pokemon } from 'types/Pokemon'

export const PokemonsAtom = atom<Pokemon[]>({
  key: 'pokemons',
  default: [],
})
