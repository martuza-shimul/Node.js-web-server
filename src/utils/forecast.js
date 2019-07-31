const request = require('request')

//Forecast

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/f3f71b0caf605df5e8188ad56cb5face/'+ latitude +','+ longitude +'?units=si'

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find the Location!', undefined)
        }else{
            // callback(undefined, {
            //     temperature:  body.currently.temperature,
            //     chanceOfRain: body.currently.precipProbability + '%',
            //     Humidity: body.currently.humidity 
            // })
            callback(undefined, 'The current temperature is '+body.currently.temperature+' degree out. '+body.currently.precipProbability+' % chance of Rain and the humidity on air is  ' + body.currently.humidity )
        }
    })

}

module.exports = forecast