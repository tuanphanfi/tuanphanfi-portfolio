const express = require('express')
const hbs = require('hbs')
const chalk = require('chalk')

const app = express()

//Define port
const port = process.env.PORT || 8000

//Define paths for Express config
const path = require('path')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//link partials to templates
hbs.registerPartials(partialsPath)     

// app.use(express.static(path.join(__dirname, '../public')))
// app.use('/', express.static(path.join(__dirname, './public')))
//set up handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//set up static directory to serve
app.use('/',express.static('public'));

app.get('', (req, res) => {
    res.render('index', {
        name: 'Tuan Phan'
    })
    console.log('At home')
})


app.get('/skills', (req, res) => {
    res.render('skills', {
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Tuan Phan'
    })
    console.log('At About')
})



app.get('/help/*', (req,res)=>{
    res.render('404', {
        errorMessage: 'Help article not found',
        title: '404',
        name: 'Tuan Phan'
    })
})


app.get('*', (req,res)=>{
    res.render('404', {
        errorMessage: 'Sorry, Page not found',
        title: '404',
        name: 'Tuan Phan'
    })
})


app.listen(port, () => console.log(chalk.cyan.bgWhite.underline("Running on port 8000")));