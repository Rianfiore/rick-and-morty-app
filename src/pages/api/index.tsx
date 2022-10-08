//Libs
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

//Types and Interfaces
import { EndpointsType } from 'types/api'

const apiConfig = {
  baseUrl: 'https://rickandmortyapi.com/api',
  endpoints: {
    character: '/character',
    episode: '/episode',
    location: '/location'
  }
}

export async function ApiWithEndpoint (endpoint: EndpointsType) {

  const getEndpoint = apiConfig.endpoints[endpoint]
  const {isLoading, error, data} = useQuery([endpoint], () => axios.get(`${apiConfig.baseUrl}${getEndpoint}`).then(res => res.data))
  
  return {isLoading, error, data}
}

export async function ApiDirectly (url: string) {

  const {isLoading, error, data} = useQuery([url], () => axios.get(url).then(res => res.data))
  
  return {isLoading, error, data}
}