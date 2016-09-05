module.exports = {
    entry: {
        test:    './js/spec/all.spec.js',
    },
    output: {
        path: __dirname + '/js',
        publicPath: "/js/",
        filename: '[name].bundle.js'
    },
    devServer: {
        hot: true
    }
}
