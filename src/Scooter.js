class Scooter{
  constructor(Station,User){
    this.Station = Station
    this.User = User
    this.Serial = Math.floor(Math.random()*1000)
    this.Charge = Math.floor(Math.random()*100)
    this.IsBroken = false
    this.IsDocked = true
  }
  Rent(){
    if (this.IsBroken==false&&this.Charge>20) {
      console.log("Ready to ride")
    } else if (this.IsBroken==false&&this.Charge<20) {
      console.log("Return to dock (charge)")
    } else {
      console.log("Return to dock (Maintenance)")
    }
  }
  Dock(Station){
    this.Station = Station
    this.IsDocked = true
    this.User = ""
  }
  async Recharge(){
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100
  }
  async RequestRepair(){
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.IsBroken = false
    console.log("Repair Complete")
  }
}


module.exports = Scooter
