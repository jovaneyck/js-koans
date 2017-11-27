let should = require('chai').should();
let TODO = []
describe("Arrays", () => {
    let users = [
        { name: "Bob", paid: false, fee: 1500},
        { name: "Alice", paid: true, fee: 1200},
        { name: "Charlie", paid: true, fee: 1350}
    ]

    describe("Map", () => {
        it("Applies any function over all elements", () =>{
            let input = [2,3,4,5]

            let triples = TODO

            triples.should.eql([6,9,12,15])
        })

        it("Can be used to extract and transform rich objects", () =>{
            let userNamesLowercase = TODO
            
            userNamesLowercase.should.eql(["bob", "alice", "charlie"])
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
            let paidUsers = TODO

            paidUsers.should.eql([
                { name: "Alice", paid: true, fee: 1200},
                { name: "Charlie", paid: true, fee: 1350}])
        })
    })

    describe("Reduce", () => {
        it("Can be used as a summation of all elements in an array", () => {
            let input = [1,2,3,4]

            let sum = TODO

            sum.should.equal(10)
        })

        it("Can be used for all other sorts of accumulation", () => {
            let input = [1,2,3,4]
            let concatenated = TODO

            concatenated.should.equal("Concatenated: 1234")
        })
    })
})