export const regex = {
  isHexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  isRGB: /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/,
  sliceHexToRGB: /.{1,2}/g
}