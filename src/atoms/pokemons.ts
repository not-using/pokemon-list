import { atom } from 'jotai'
import { type Pokemon } from 'types/Pokemon'

export const PokemonsAtom = atom<Pokemon[]>([])
