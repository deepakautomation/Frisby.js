const frisby = require('frisby');
const Joi = require('Joi');

describe("testing the apis", function(){

    it("testing get request", function(){

        return frisby
        .get("https://jsonplaceholder.typicode.com/posts")
        .inspectJSON()
        .expect('status', 200)
        .then(function(res){
            let data = JSON.parse(res['_body'])
            console.log(data[99])
        })
    })
})