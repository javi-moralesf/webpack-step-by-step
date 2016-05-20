var path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'js'),
    entry: './app',
    output: {
        filename: 'build/bundle.js'
    },
    resolve: {
        modulesDirectories: ['.', 'node_modules'],
    },
    module: {
        loaders: [
            {test: /\.html$/, loaders: ['raw'], exclude: /node_modules/},
            {test: /\.css$/, loaders: ['style', 'css']},
            { test: /\.png$/, loader: "url-loader?limit=100000000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    }

};