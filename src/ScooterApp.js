const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){
    this.Stations = {
      Bedford:[],
      Stevenage:[],
      Biggleswade:[],
      Arlesey:[],
      WelwynGardenCity:[],
      Knebworth:[],
      Sandy:[],
    }
    this.Users = []
    ScooterApp.sessions.push(this)
  }

  static sessions = [] 

  Register(User){
    if (this.Users.some(x => x.Username == User.Username)==false) {
      if (User.Age>=18) {
        this.Users.push({
          Username : User.Username,
          Password : User.Password,
          Age : User.Age,
          LoggedIn : false
        })
        console.log("User Registered")
      } else {
        console.log("Cannot register (age)")
      }
    } else {
      console.log("Cannot register (exists)")
    }
  }
  Login(Username,Password){
    if (this.Users.some(x => x.Username == Username)==true) {
      let TempUser = this.Users.find(x=>x.Username==Username)
      if (TempUser.Password === Password) {
        console.log("User Logged In")
      } else {
        console.log("Cannot Login (Password)")
        console.log(TempUser.Password)
        console.log(Password)
      }
    } else {
      console.log("Cannot Login (not exists)")
    }
  }
  AddScooter(Location,Scooter){
    if (Object.keys(this.Stations).includes(Location)) {
      this.Stations[Location].push(Scooter)
      console.log("Scooter Added")
    } else {
      console.log("Cannot Add (doesn't exist)")
    }
  }
  RemoveScooter(Scooter){
    let Serial = Scooter.Serial
    for (const key in this.Stations) {
      console.log(Serial)
      if(this.Stations[key].some(x=>x.Serial == Serial)){
        this.Stations[key].splice(this.Stations[key].indexOf(x=>x.Serial == Serial),1)
        console.log("Scooter Removed")
        return
      }
    }
    console.log("Cannot Remove (doesn't exist)")
  }
}

module.exports = ScooterApp
