const request = require('request')

 const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=00cfea91449dbbcd2e64e4be3aff96ed&query=1600%20' +address
    request({url, json:true}, (error, {body}) => {
        if(error) {
            callback( 'Unable to connect! ')
        } else if (body.data[0].length === 0){
            callback('Unable to find location! ')
        } else {
            callback(undefined, {
                latitude : body.data[0].latitude,
                longitude :body.data[0].longitude,
                location : body.data[0].region
            })
        }
    })
}

 module.exports =  geocode
