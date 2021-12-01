const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    //const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + longitude + ',' + latitude + '&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=ff351d9197a9d2dfa495392c51134425&query=' + longitude + ',' + latitude + '&units=f'
    request({ url, json: true }, (error, {body}) => {
            if (error) {
                callback('Unable to connect to weather service!',undefined)
            } else if (body.error) {
                callback('Unable to find location',undefined)
            } else {
                callback(undefined,body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " ℉ out.")
            }
        })

}
module.exports=forecast
// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast