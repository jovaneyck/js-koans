let statement = require("../src/statement").statement

let should = require('chai').should()

describe("statement function", () => {
    it("A regular movie rented for one day", () => {
        let s = statement(
            {
                name:"Bob", 
                rentals: [{movieID: 3, days: 1}]},
            { "3" : {title: "a movie", code : "regular"}})
        let expected = 
            "Rental Record for Bob\n"+
            "\ta movie\t2\n"+
            "Amount owed is 2\n"+
            "You earned 1 frequent renter points\n"
        s.should.be.equal(expected)
    })
})

describe("Full acceptance test", () => {})