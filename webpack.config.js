module.exports = {
    entry: "./static/admin/index.js",
    output: {
        path: `${__dirname}/static/admin`,
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/ },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]',
                exclude: /node_modules/
            },
            { test: /\.js$/, loaders: ["babel-loader"], exclude: /node_modules/ },
            { test: /\.jsx$/, loaders: ["babel-loader"], exclude: /node_modules/ }
        ]
    },
};