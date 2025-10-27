export function registerPugHelpers(globals = {}) {
  return {
    ...globals,
    uppercase: (value = '') => String(value).toUpperCase(),
  }
}
