module.exports = {
  classNameSlug: (hash, title) => {
    if (process.env.NODE_ENV === 'production') {
      return hash
    }
    return `${title}_${hash}`
  },
}
