var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "/dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              scss: "vue-style-loader!css-loader!sass-loader", // <style lang="scss">
              sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax" // <style lang="sass">
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          { loader: "babel-loader" }
        ],
        exclude: /node_modules/
      },
  	  {
    		test: /\.css$/,
    		use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
  	  },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          { loader: "file-loader", options: { name: "[name].[ext]?[hash]"} }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ])
}
