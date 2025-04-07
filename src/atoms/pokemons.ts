import { atom } from 'jotai'
import { Pokemon } from 'types/Pokemon'

export const PokemonsAtom = atom<Pokemon[]>([])
