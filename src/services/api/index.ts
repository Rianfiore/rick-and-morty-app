import { CharactersPage, Character } from "recoil/api/atoms/types";
import axios from "axios";

const apiConfig = {
  baseURL: "https://rickandmortyapi.com/api",
};

const endpoints = {
  character: `${apiConfig.baseURL}/character`,
  location: `${apiConfig.baseURL}/location`,
  episode: `${apiConfig.baseURL}/episode`,
};

const getDirectly = async (url: string) => {
  const response = await axios.get(url);
  const data = await response.data;

  return data;
};

const getCharacter = async (params: string = "") => {
  const response = await axios.get(`${endpoints.character}${params}`);
  const data = await response.data;

  return data;
};

const getLocation = async (params: string = "") => {
  const response = await axios.get(`${endpoints.location}${params}`);
  const data = await response.data;

  return data;
};

const getEpisode = async (params: string = "") => {
  const response = await axios.get(`${endpoints.episode}${params}`);
  const data = await response.data;

  return data;
};

export const api = { getCharacter, getEpisode, getLocation, getDirectly };
