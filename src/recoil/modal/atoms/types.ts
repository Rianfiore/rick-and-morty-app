import { Character } from "recoil/api/atoms/types";

export interface IModalState extends Character {
  isModalOpen: boolean,
  slideDirection: 'prev' | 'none' | 'next',
}