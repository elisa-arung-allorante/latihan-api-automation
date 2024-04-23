const supertest = require("supertest")
const globalVariables = require("../globalVariable")

const postUser = (body) => supertest(globalVariables.baseURL)
    .post(globalVariables.userURL)
    .send(body)

const getUser = (token) => supertest(globalVariables.baseURL)
    .get(globalVariables.meURL)
    .set("Authorization",token)

const postContact = (token, body) => supertest(globalVariables.baseURL)
    .post(globalVariables.contactURL)
    .set("Authorization",token)
    .send(body)

const getContact = (token, id) => supertest(globalVariables.baseURL)
    .get(globalVariables.contactURL+id)
    .set("Authorization",token)

const putContact = (token, body, id) => supertest(globalVariables.baseURL)
    .put(globalVariables.contactURL+id)
    .set("Authorization",token)
    .send(body)

module.exports = {
    getUser,
    postUser,
    postContact,
    getContact,
    putContact
}