import { atom } from 'recoil';

import {IModalState} from "./types"

export const modalState = atom<IModalState>({
  key: 'modalKey',
  default: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created:'',
    isModalOpen: false
  },
});