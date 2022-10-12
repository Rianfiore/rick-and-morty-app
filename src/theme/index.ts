import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
    primaryColor: {
      dark: '#004000',
      base: '#006400',
      light: '#5cad4a',
      lightTransparent: 'rgb(92, 173, 74, 0.5)',
      unfocused: 'rgba(0, 100, 0, 0.5)',
    },
    secondaryColor: {
      dark: '#dddddd',
      base: '#efefef',
      high: '#ffffff'
    },
    neutralColor: {
      dark: '#dddddd',
      base: '#efefef',
      high: '#ffffff'
    },
    dropShadowColor20: 'rgb(0, 0, 0, 0.2)',
    dropShadowColor50: 'rgba(0,0,0, 0.5)',
    backgroundGalaxy: 'url("/images/galaxy-inverse.jpg")',
    backgroundPortal: 'url("/images/portal.png")',
    backgroundPortalFilter: 'brightness(65%) contrast(200%)',
    backgroundMain: 'url("/images/main-background.jpg")'

}

export const darkTheme: DefaultTheme = {
  primaryColor: {
    dark: '#dddddd',
    base: '#efefef',
    light: '#fff',
    lightTransparent: 'rgb(255, 255, 255, 0.5)',
    unfocused: 'rgba(239, 239, 239, 0.5)',
  },
  secondaryColor: {
    dark: '#004000',
    base: '#006400',
    high: '#5cad4a'
  },
  neutralColor: {
    dark: '#000000',
    base: '#1a1a1a',
    high: '#2d2d2d',
  },
  dropShadowColor20: 'rgb(0, 0, 0, 0.2)',
  dropShadowColor50: 'rgba(0,0,0, 0.5)',
  backgroundGalaxy: 'url("/images/galaxy.jpg")',
  backgroundPortal: 'url("/images/portal-inverse.png")',
  backgroundPortalFilter: 'brightness(50%) contrast(120%)',
  backgroundMain: 'url("/images/main-background-inverse.jpg")'

  
}