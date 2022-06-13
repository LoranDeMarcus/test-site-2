export function isObjectEmpty(object) {
  return Boolean(object && typeof object === 'object') && !Object.keys(object).length
}
