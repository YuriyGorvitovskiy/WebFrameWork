module.exports = {
    entry: {
        demo:    './js/demo/all.demo.js',
        test:    './js/spec/all.spec.js'
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
