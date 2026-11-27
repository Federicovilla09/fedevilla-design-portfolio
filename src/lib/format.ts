/** 1 → "01", 2 → "02"… (completa con ceros a la izquierda hasta tener 2 dígitos) */
export function twoDigits(number: number) {
  return String(number).padStart(2, "0");
}
