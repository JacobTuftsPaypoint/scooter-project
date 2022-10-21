const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

testobj = new ScooterApp()

describe("Test Scooter App Class",()=>{
    test("Is Object",()=>{
      expect(typeof(testobj)).toBe("object")
    })
    test("Is Stations Correct",()=>{
      expect(typeof(testobj.Stations)).toBe("object")
    })
    test("Is Users Correct",()=>{
      expect(testobj.Users).toStrictEqual([])
    })
    test("Is GLOBAL Sessions Correct",()=>{
        expect(ScooterApp.sessions).toStrictEqual([testobj])
      })
  })

  describe("Test Scooter App Register",()=>{
    const consoleSpy = jest.spyOn(console, 'log');
    test("Register when valid",()=>{
        testobj.Register(new User("TuftyIsPie","Password",18))
        expect(consoleSpy).toHaveBeenCalledWith("User Registered");
    })
    test("In users when registered",()=>{
      testobj.Users = []
      testobj.Register(new User("TuftyIsPie","Password",18))
      expect(testobj.Users).toStrictEqual([{Username:"TuftyIsPie",Password:"Password",Age:18,LoggedIn:false}])
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

  describe("Test Scooter Login",()=>{
    const consoleSpy = jest.spyOn(console, 'log');
    test("Login when exists & valid",()=>{
        testobj.Register(new User("User4","Password2",18))
        testobj.Login("User4","Password2")
        expect(consoleSpy).toHaveBeenCalledWith("User Logged In");
    })
    test("Login when exists & not valid",()=>{
      testobj.Register(new User("User5","Password2",18))
        testobj.Login("User5","ABCDEF")
        expect(consoleSpy).toHaveBeenCalledWith("Cannot Login (Password)");
    })
    test("Login when doesn't exist",()=>{
      testobj.Register(new User("User6","Password2",18))
        testobj.Login("NoUser","ABCDEF")
        expect(consoleSpy).toHaveBeenCalledWith("Cannot Login (not exists)");
    })
  })

  describe("Test Scooter AddScooter",()=>{
    const consoleSpy = jest.spyOn(console, 'log');
    test("Add to location when exists",()=>{
        testobj.AddScooter("Bedford",new Scooter("Bedford",new User("user6","Password",18)))
        expect(consoleSpy).toHaveBeenCalledWith("Scooter Added")
    })
    test("Add to location when doesn't exists",()=>{
      testobj.AddScooter("Potton",new Scooter("Bedford",new User("user6","Password",18)))
      expect(consoleSpy).toHaveBeenCalledWith("Cannot Add (doesn't exist)")
    })
  })
  describe("Test Scooter RemoveScooter",()=>{
    const consoleSpy = jest.spyOn(console, 'log');
    test("Remove when exists",()=>{
        tempscooter = new Scooter("Bedford",new User("user6","Password",18))
        testobj.AddScooter("Bedford",tempscooter)
        testobj.RemoveScooter(tempscooter)
        expect(consoleSpy).toHaveBeenCalledWith("Scooter Removed")
    })
    test("Remove when doesn't exists",()=>{
      testobj.RemoveScooter(tempscooter)
      expect(consoleSpy).toHaveBeenCalledWith("Cannot Remove (doesn't exist)")
    })
  })