let should = require('chai').should();
let TODO = []
describe("Arrays", () => {
    describe("Map", () => {
        it("Applies any function over all elements", () =>{
            let input = [2,3,4,5]

            let triples = TODO

            triples.should.eql([6,9,12,15])
        })
    })

    describe("Filter", () => {
        it("Can filter elements", () => {
            let input = [1,2,3,4,5,6]
            let isEven = TODO

            let evens = input.filter(isEven)

            evens.should.eql([2,4,6])
        })

        it("Can filter out irrelevant elements using any given predicate", () => {
            let users = [
                { name: "Bob", paid: false},
                { name: "Alice", paid: true}
            ]

            let paidUsers = TODO

            paidUsers.should.eql([{name: "Alice", paid: true}])
        })
    })
})