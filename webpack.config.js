var path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'js'),
    entry: './app',
    output: {
        filename: 'build/bundle.js'
    },
    resolve: {
        modulesDirectories: ['.', 'node_modules'],
    }
}
