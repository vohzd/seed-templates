function getEntrySources(sources) {
    if (process.env.NODE_ENV !== "production") {
        sources.push("webpack-dev-server/client?http://localhost:8080");
        sources.push("webpack/hot/only-dev-server");
    }

    return sources;
}

module.exports = {
    entry: getEntrySources(["./src/js/entry.js"]),
    output: {
        publicPath: "http://localhost:8080/",
        filename: "public/build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    }
};
