module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascript",
        filename: "bundle.js"
    },
    resolve: {
     extensions: ['*', 'js', 'ts']
        },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader" }
        ]
    }
};