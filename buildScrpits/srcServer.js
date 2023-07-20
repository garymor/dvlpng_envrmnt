const express = require('express')
var path = require('path')
var port = 8000;
var app = express();
import webpack from 'webpack';
import config from   '../webpack.config.dev'
import getBaseUrl from '../src/api/baseUrl';
import 'whatwg-fetch'

const data = require('../src/api/db.json')
const compiler = webpack(config)
const baseUrl = getBaseUrl() 

 app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
 }));

app.get('/users', (req,res) => {
    res.json(data)
 })

app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'../src/index.html')))

app.listen(port, err => {
    if (err) {
        console.log(err) // eslint-disable-line no-console 
        return null
    }
});