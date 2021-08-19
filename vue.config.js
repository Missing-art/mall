module.export = {
    // 声明要配置路径
    configureWebpack: {
        resolve: {
          // extensions: [], //这个内部已经自己配置过
          alias: {
            //   内部已经将 src 配置为 @
            // 现在自己为其它路径进行配置
            'assets': 'src/assets',
            'common': 'src/common',
            'components': 'src/components',
            'network': 'src/network',
            'views': 'src/views'
          }
        }
    }
}