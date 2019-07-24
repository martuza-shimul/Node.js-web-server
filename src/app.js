const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.static((publicDirectoryPath)))
app.use(express.static(publicDirectoryPath))
// console.log(publicDirectoryPath)

// ************ Routing **********
// app.com
// app.com/help
// app.com/about
// app.com/weather


app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Shimul',
        age: 25
    }, {
        name: 'Sarah',
        age: 19
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})
app.get('/weather', (req, res) => {
    res.send([
        {
            forecast: 'Sunny Day' ,
            temperature:  31 + 'Degree',
            chanceOfRain: 0.6 + '%',
            Humidity: 34 + '%'
        },
        {
            location: 'Dhaka'
        }
    ])
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
