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

    it("A regular movie rented for more than two days", () => {
        let s = statement(
            {
                name:"Bob", 
                rentals: [{movieID: 3, days: 3}]},
            { "3" : {title: "a movie", code : "regular"}})
        let expected = 
            "Rental Record for Bob\n"+
            "\ta movie\t3.5\n"+
            "Amount owed is 3.5\n"+
            "You earned 1 frequent renter points\n"
        s.should.be.equal(expected)
    })

    it("A new movie rented for more than two days", () => {
        let s = statement(
            {
                name:"Bob", 
                rentals: [{movieID: 3, days: 3}]},
            { "3" : {title: "a movie", code : "new"}})
        let expected = 
            "Rental Record for Bob\n"+
            "\ta movie\t9\n"+
            "Amount owed is 9\n"+
            "You earned 2 frequent renter points\n"
        s.should.be.equal(expected)
    })

    it("A children's movie rented for four days", () => {
        let s = statement(
            {
                name:"Bob", 
                rentals: [{movieID: 3, days: 4}]},
            { "3" : {title: "a movie", code : "childrens"}})
        let expected = 
            "Rental Record for Bob\n"+
            "\ta movie\t3\n"+
            "Amount owed is 3\n"+
            "You earned 1 frequent renter points\n"
        s.should.be.equal(expected)
    })

    describe("Full acceptance test", () => {
        it("should keep working", () => {
            let s = statement(
                {
                    name:"Alice", 
                    rentals: [
                        {movieID: 2, days: 3},
                        {movieID: 3, days: 4},
                        {movieID: 4, days: 5}]},
                {   "2" : {title: "a regular movie", code : "regular"},          
                    "3" : {title: "a new movie", code : "new"},          
                    "4" : {title: "a childrens movie", code : "childrens"}})
            let expected = 
                "Rental Record for Alice\n"+
                "\ta regular movie\t3.5\n"+
                "\ta new movie\t12\n"+
                "\ta childrens movie\t4.5\n"+
                "Amount owed is 20\n"+
                "You earned 4 frequent renter points\n"
    
            s.should.be.equal(expected)
        })
    })
})