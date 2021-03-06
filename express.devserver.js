const express = require('express');
const path = require('path');
const open = require('open');

const app =  express();

if (process.env.NODE_ENV === "development"){
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpack = require('webpack');
    const config = require('./webpack.config.js');
    const compiler = webpack(config);
    const middlewareOptions = {
        devtool: "#eval-source-map",
        publicPath: config.output.publicPath,
        historyApiFallback: true,
    };

    app.use(webpackDevMiddleware(compiler, middlewareOptions))
    app.use(webpackHotMiddleware(compiler));
}


app.use(express.static(path.join(__dirname, "./dist")))
app.get("/", function(req, res, next){
    //res.sendFile(path.join(__dirname, "./src/index.html"))
    var assets = require('./dist/webpack-assets.json').main;
    const html = `
    <!DOCTYPE html>
    <html lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Title Page</title>
            <link rel="stylesheet" href="${assets.css}">
        </head>
        <body>
            <main id="app">
                Loading...
            </main>

            <script src="${assets.js}"></script>
        </body>
    </html>
    `;
    res.send(html);
});

app.listen(5555, "localhost", function(err){
    console.log("Server started at http://localhost:5555 !");
    open("http://localhost:5555")
});