const { join } = require('path')

module.exports = [
  {
    ext: 'cjs', format: 'cjs'
  },
  {
    ext: 'js', format: 'umd',
  },
  {
    ext: 'mjs', format: 'es'
  }
].map(
  ({ ext, format, name = 'index' }) => ({
    input: join(__dirname, 'index.js'),
    output: {
      file: join(__dirname, 'dist', [ 'index', ext ].join('.')),
      format,
      exports: 'auto',
      name: 'sampleSize',
      strict: false,
      sourcemap: true,
      sourcemapFile: join(__dirname, [ 'index', ext, 'map' ].join('.')),
      preferConst: true
    }
  })
)
