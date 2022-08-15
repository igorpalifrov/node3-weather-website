const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =' http://api.weatherstack.com/current?access_key=24266ced59de95a3b867d59cc897fbc1&query='+ latitude + ',' + longitude
    
    request({url, json : true }, (error, {body}) => {
        if(error) {
           callback('Unable to connect ')
         } else {
             callback (undefined, body.current.temperature + ' degrees out')
         }

    })
 }

 module.exports = forecast