let crushed = {
  amount: 0,
  multiplier: 1,
  autoCrush: []
}

let clickUpgrades = {
  snowboard: {
    price: 5,
    quantity: 0,
    multiplyer: 3
  },
  goggles: {
    price: 5,
    quantity: 0,
    multiplier: 2
  },
  energyDrink: {
    price: 5,
    quantity: 0,
    multiplier: 10
  }
}

let automaticUpgrades = {
  friends: {
    price: 500,
    quantity: 0,
    multiplier: 20
  },

};
let clickAdd = 1

function crush() {
  crushed.amount += clickAdd
  updateCrushTotal()
}

function updateCrushTotal() {

  let template = " "
  template += `
<h3 id="total">Total Runs Crushed:${crushed}</h3>
`
  document.getElementById("total").innerHTML = template
}



function buySnowboard() {
  for (let i = 0; )
    if (crushed.amount >= clickUpgrades.snowboard.price) {
      clickUpgrades.snowboard.quantity++

      clickUpgrades.snowboard.price *= 2
      //console.log("purchased")
      clickAdd += clickUpgrades.snowboard.multiplyer
      //figure out how to subtract from our total runs crushed
      //crushed -= clickUpgrades.snowboard.price
    }
  updateCrushTotal()
  updateSnowboardInventoryTotal()

}

function buyGoggles() {
  if (crushed >= clickUpgrades.goggles.price) {
    clickUpgrades.goggles.quantity++

    clickUpgrades.goggles.price *= 2
    console.log("purchased")
    clickAdd += clickUpgrades.goggles.multiplyer
    //figure out how to subtract from our total runs crushed
    //crushed -= clickUpgrades.snowboard.price
  }
  updateCrushTotal()
  updateGogglesInventoryTotal()

}




function drawStore(purchasePrice) {
  let template = " "
  template += `
  
  `
}


function updateSnowboardInventoryTotal() {
  let template = " "
  template += `
  <h4 id="boards">Boards: ${clickUpgrades.snowboard.quantity}</h4>
  `
  document.getElementById("boards").innerHTML = template


}

function updateGogglesInventoryTotal() {
  let template = " "
  template += `
  <h4 id="goggles">Goggles: ${clickUpgrades.goggles.quantity}</h4>
  `
  document.getElementById("goggles").innerHTML = template
}