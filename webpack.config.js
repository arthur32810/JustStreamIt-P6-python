const path = require('path');

module.exports = {
  entry: './assets/js/files/main.js',  // Votre point d'entrée qui importera tous les autres fichiers
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'assets/js'),
    publicPath: '/assets/js/'
  },
  mode: 'development',  // Changez en 'production' pour la version finale
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    open: true,
  }
};