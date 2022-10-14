import {regex} from "../regex"

export const hexToRGB = (hex: string) => {
  if (!hex.match(regex.isHexColor)) return null
  
  const hexSliced = hex.replace('#', '').match(regex.sliceHexToRGB)

  if(!hexSliced) return null

  const hexConverted = [parseInt(hexSliced[0], 16), parseInt(hexSliced[1], 16), parseInt(hexSliced[2], 16)]

  return `rgb(${hexConverted.join(', ')})`
}