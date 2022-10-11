import { atom } from 'recoil';

import {CharactersPage} from "./types"

export const pageState = atom<CharactersPage | null | undefined>({
  key: 'pageKey',
  default: null,
});