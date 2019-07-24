const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs') // install hbs package before using it
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
        msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
