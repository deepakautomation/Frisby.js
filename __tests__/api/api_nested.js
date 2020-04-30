const frisby = require('frisby');
const Joi = require('Joi')

frisby.globalSetup(jest.setTimeout(30000))

describe("testing api", function(){
    it("fetch all the data", function(){

        return frisby
        .get("https://jsonplaceholder.typicode.com/posts")
        .inspectJSON()
        .expect('jsonTypes','*',{
            userID: Joi.number(),
            id: Joi.number(),
            title: Joi.string(),
            body: Joi.string()
        })
        .expect('status', 200)
        .then(function(res){
            let data = JSON.parse(res['_body']);
            console.log(data[0])
            let postId = data[0].id
            console.log(`fetched id is ${postId}`)

            return frisby
            .get('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
            .inspectJSON()
            .expect('jsonTypes', '*', {
                postId: Joi.number(),
                id: Joi.number(),
                name: Joi.string(),
                email: Joi.string().email(),
                body: Joi.string()
              })
            .then(function(res_){
                let data_ = JSON.parse(res_['_body']);
                console.log(data_[0].email)
                expect(data_[0].email).toBe('Eliseo@gardner.biz')

            })
        })
        
    })
})