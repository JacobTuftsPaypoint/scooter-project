const Scooter = require('../src/Scooter')
const User = require('../src/User')

const testobj = new Scooter("Biggleswade",new User("TuftyIsPie","Password",18))

describe("Test Scooter Class",()=>{
  test("Is Object",()=>{
    expect(typeof(testobj)).toBe("object")
  })
  test("Is Station Correct",()=>{
    expect(testobj.Station).toBe("Biggleswade")
  })
  test("Is User Correct",()=>{
    expect(testobj.User.Username).toBe("TuftyIsPie")
  })
})

describe("Test Scooter Rent",()=>{
  const consoleSpy = jest.spyOn(console, 'log');
  test("Rent when ready",()=>{
    testobj.Charge = 100
    testobj.IsBroken = false
    testobj.Rent()
    expect(consoleSpy).toHaveBeenCalledWith("Ready to ride");
  })
  test("Rent when out of charge",()=>{
      testobj.Charge = 10
      testobj.Rent()
      expect(consoleSpy).toHaveBeenCalledWith("Return to dock (charge)");
  })
  test("Rent when broken",()=>{
    testobj.charge = 100
    testobj.IsBroken = true
    testobj.Rent()
    expect(consoleSpy).toHaveBeenCalledWith("Return to dock (charge)");
  })
})

describe("Test Scooter Dock",()=>{
  test("Changes Values",()=>{
    testobj.Dock("Bedford")
    expect(testobj.Station).toBe("Bedford")
    expect(testobj.IsDocked).toBe(true)
    expect(testobj.User).toBe("")
  })
})

describe("Test Scooter Recharge",()=>{
  test("Changes Values",async()=>{
    await testobj.Recharge()
    expect(testobj.charge).toBe(100)
  })
})

describe("Test Scooter Repair",()=>{
  test("Changes Values",async()=>{
    await testobj.RequestRepair()
    expect(testobj.IsBroken).toBe(false)
  })
})