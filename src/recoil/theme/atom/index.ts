import { atom } from 'recoil';

import {ThemeType} from "./types";

export const themeState = atom<ThemeType>({
  key: 'themeKey',
  default: false
});