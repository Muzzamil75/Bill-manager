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


