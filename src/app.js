const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define the paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebar Engine and views location
app.set('view engine', 'hbs') // install hbs package before using it
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


// Routing for hbs package
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Shimul'

    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Shimul'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'Help Page',
        msg: "This is the Help Text",
        title: 'Help',
        name: 'Shimul'
    })
})
// console.log(publicDirectoryPath)

// ************ Routing **********
// app.com
// app.com/help
// app.com/about
// app.com/weather


// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Shimul',
//         age: 25
//     }, {
//         name: 'Sarah',
//         age: 19
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About Page</h1>')
// })
app.get('/weather', (req, res) => {
    
    if(!req.query.address){
        return res.send({
            error: 'Please provide an Address!'
            
        })
    }else {
        // Object destructuring
        geocode ( req.query.address, (error, data) => {
            if(error){
                return res.send({
                    error: 'Unable to connect the Location!'
                }) //shorthand
            }
        
            forecast(data.latitude,data.longitude, (error, forecastData) => {
                if(error){
                    return res.send(error)
                }
        
                res.send({
                    forecast: forecastData,
                    location: data.location,
                    address: req.query.address
                })
            })
        
            
        })
    }

})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        products: []
    })
})
// 404 page configured
app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Shimul',
        errorMessage: 'Help article not found'
    })
})

app.get('*',(req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shimul',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
