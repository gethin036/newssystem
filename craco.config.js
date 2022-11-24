const CracoLessPlugin = require('craco-less')
const path = require('path')

const resolve = url => path.join(__dirname, url)

module.exports = {
  devServer: {
    open: false
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
