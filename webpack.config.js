var path = require("path")
module.exports = {
  mode: 'none',
  entry: "./public/main.tsx",

  output: {
    path: path.join(__dirname, '/public'),
    filename: 'index_bundle.tsx'
  },

  devServer: {
    contentBase: "./public",
    hot: true,
  },
 resolve:{
   alias:{
     "react-native":"react-native-web"
   }
 },
  module: {
    rules: [{
      test: /\.tsx|.ts$/,
      include: path.resolve('./public/main.tsx'),
      exclude: /node_modules/,
        loader: 'babel-loader',
    }] 
  }

}




  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       include: path.resolve('./public/main.tsx'),
  //       loaders: ['babel-loader','es2015','env','react'],
  //       query : {
  //         presets: ['env', 'stage-0', 'react', 'es2015']
  //       }
  //     }
  //   ]
  // }
//   module: {
//     loaders: [{
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime'],
//         include: path.resolve('./public/main.tsx'),
//     }
//   ]


// }

// loaders: [{
//   test: /\.(js|jsx)$/,
//   loaders: ['react-hot', 'babel?' + JSON.stringify({
//     cacheDirectory: true,
//     plugins: [
//       'transform-runtime',
//       'transform-decorators-legacy'
//     ],
//     presets: ['es2015', 'react', 'stage-0'],
//     env: {
//       production: {
//         presets: ['react-optimize']
//       }
//     }
//   }), 'eslint'],
//   include: path.resolve('./public/main.tsx'),

//   exclude: /node_modules/
// }
// ]






