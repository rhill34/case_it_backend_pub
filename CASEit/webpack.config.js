const path = require('path');

module.exports = {
    entry: {
        app: ['babel-polyfill',
            './src/app.js']
        
    },
    output: {
        path: path.resolve(__dirname, 'functions'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }            
            }]
        }]
    }
}