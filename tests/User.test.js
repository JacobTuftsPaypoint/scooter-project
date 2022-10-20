const User = require('../src/User')

describe("Test User Class",()=>{
    const testobj = new User("TestPhrase","TestPhrase2",18)
    test("Is Object",()=>{
        expect(typeof(testobj)).toBe("object")
    })
    test("Is Username Correct",()=>{
        expect(testobj.Username).toBe("TestPhrase")
    })
    test("Is Password Correct",()=>{
        expect(testobj.Password).toBe("TestPhrase2")
    })
    test("Is Age Correct",()=>{
        expect(testobj.Age).toBe(18)
    })
})
