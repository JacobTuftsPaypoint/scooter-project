const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

testobj = new ScooterApp()

describe("Test Scooter Class",()=>{
    test("Is Object",()=>{
      expect(typeof(testobj)).toBe("object")
    })
    test("Is Stations Correct",()=>{
      expect(testobj.Stations).toStrictEqual([])
    })
    test("Is Users Correct",()=>{
      expect(testobj.Users).toStrictEqual([])
    })
    test("Is Sessions Correct",()=>{
        expect(testobj.Sessions).toStrictEqual([])
      })
  })

  describe("Test Scooter Register",()=>{
    const consoleSpy = jest.spyOn(console, 'log');
    test("Register when valid",()=>{
        testobj.Register(new User("TuftyIsPie","Password",18))
        expect(consoleSpy).toHaveBeenCalledWith("User Registered");
    })
    test("Register when exists",()=>{
        testobj.Register(new User("User2","Password",18))
        testobj.Register(new User("User2","Password",18))
        expect(consoleSpy).toHaveBeenCalledWith("Cannot register (exists)");
    })
    test("Register when young",()=>{
        testobj.Register(new User("User3","Password",14))
        expect(consoleSpy).toHaveBeenCalledWith("Cannot register (age)");
    })
  })