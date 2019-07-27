const request = require('request')

//Forecast

const forecast = (lat, lng, callback) => {

    const url = 'https://api.darksky.net/forecast/f3f71b0caf605df5e8188ad56cb5face/'+ lat +','+ lng +'?units=si'

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find the Location!', undefined)
        }else{
            callback(undefined, {
                temperature:  body.currently.temperature,
                chanceOfRain: body.currently.precipProbability + '%',
                Humidity: body.currently.humidity 
            })
        }
    })

}

module.exports = forecast