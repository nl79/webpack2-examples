const path = require('path');
const config = {
  // Entry point into the application.
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
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
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};

module.exports = config;
