import { atom } from 'recoil';

import {IPaginationState} from "./types"

export const paginationState = atom<IPaginationState>({
  key: 'paginationKey',
  default: {
    totalPages: Array(0).fill(null),
    currentPage: 1,
    currentSearch: null,
    fivePages: [1,2,3,4,5]
  },
});