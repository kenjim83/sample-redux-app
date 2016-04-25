module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    },

    devtool: "source-map" // This turns allows you to debug the origina source files in ES6
};
