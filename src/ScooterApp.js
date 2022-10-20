const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){
    this.Stations = []
    this.Users = []
    this.Sessions = []
  }
  Register(User){
    let UserList = []
    this.Users.forEach(element => {
      UserList.push(element.Username)
    });
    if (UserList.includes(User.Username)==false) {
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
    
  }
}

module.exports = ScooterApp
