const api = require("../api/objects")
const testData = require("../test-data/test-data.json")
const globalVariable = require("../globalVariable")
const { expect } = require("chai")

describe ("Contact and User Creation", () => {
    
    it("POST user / Add User" , async () => {
       const response = await api.postUser(testData.postUser)
       expect(response.status).equal(201)
       expect(response.body.user.email).equal(testData.postUser.email)
       console.log(response.body)
       globalVariable.token = response.body.token
    })

    it("GET user profile" , async () => {
        const response = await api.getUser(globalVariable.token)
        expect(response.status).equal(200)
        expect(response.body.email).equal(testData.postUser.email)
        console.log(response.body)
    })

    it("POST contact / Add Contact" , async () => {
        const response = await api.postContact(globalVariable.token, testData.postContact)
        expect(response.status).equal(201)
        expect(response.body.email).equal(testData.postContact.email)
        console.log(response.body)
        globalVariable.contactId = response.body._id
    })

    it("GET contact by Id" , async () => {
        const response = await api.getContact(globalVariable.token, globalVariable.contactId)
        expect(response.status).equal(200)
        expect(response.body.email).equal(testData.postContact.email)
        console.log(response.body)
    })

    it("PUT contact / Update Contact" , async () => {
        const response = await api.putContact(globalVariable.token, testData.putContact, globalVariable.contactId)
        expect(response.status).equal(200)
        expect(response.body.firstName).equal(testData.putContact.firstName)
        expect(response.body.lastName).equal(testData.putContact.lastName)
        expect(response.body.email).equal(testData.putContact.email)
        console.log(response.body)
    })

    it("GET updated contact" , async () => {
        const response = await api.getContact(globalVariable.token, globalVariable.contactId)
        expect(response.status).equal(200)
        expect(response.body.firstName).equal(testData.putContact.firstName)
        expect(response.body.lastName).equal(testData.putContact.lastName)
        expect(response.body.email).equal(testData.putContact.email)
        console.log(response.body)
    })

    }
)