const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  // Entry point into the application.
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    // Other modules like the 'url-loader' will prepend the value of the
    // 'publicPath' property to the urls that is generates.
    // Other loaders will also use this property to generate URLs.
    publicPath: 'build/'
  },
  module: {
    // Load specific modules based on the filename and extension.
    rules: [
      {
        // Uset this loader for every matching file.
        use: 'babel-loader',
        // Matching filename extensions.
        test: /\.js$/,
      },
      {
        // Style should be passed thru both style and css loaders.
        /* NOTE: Order matters! The loaders are applied from [right to left].
         * therefore the css-loader will first load the data and the style-loader
         * will process it.
         */
        //use: ['style-loader', 'css-loader'],
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          // Apply the loaders.
          // If a loader requires specific options, use an Object with the loader and options
          // properties.
          {
            loader: 'url-loader',
            // If an image is larger than 40000 bites, saved it in a separate file.
            // If an image is smaller than 40000 bites, save the data as part of the bundle.
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
