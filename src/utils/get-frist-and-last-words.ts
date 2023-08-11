export function getFirstAndLastWords(text: string) {
  const text_arr = text.split(' ')
  return `${text_arr[0]} ${text_arr[text_arr.length - 1]}`
}
