let crushed = {
  amount: 0,
  multiplier: 1,
}

let clickUpgrades = {
  snowboard: {
    price: 50,
    quantity: 0,
    multiplier: 10,
    display: "Boards"
  },
  goggles: {
    price: 15,
    quantity: 0,
    multiplier: 5,
    display: "Goggles"
  },
  energyDrink: {
    price: 5,
    quantity: 0,
    multiplier: 3,
    display: "Energy Drinks"
  }
}

let automaticUpgrades = {
  friends: {
    price: 200,
    quantity: 0,
    multiplier: 20,
    //button: document.getElementById("buy-friends"),
    display: "Friends"
  }
}




function updateTotals() {

  for (const key of Object.keys(clickUpgrades)) {
    //console.log(key + "multiplier" + clickUpgrades[key].multiplier);

    let invTemplate = " "
    invTemplate += `
      <h4 id="${key}">${clickUpgrades[key].display}: ${clickUpgrades[key].quantity}</h4>
    `
    document.getElementById(key).innerHTML = invTemplate
    //console.log(key + "-price")
    document.getElementById(key + "-price").innerHTML = "= " + clickUpgrades[key].price
  }

  for (const key of Object.keys(automaticUpgrades)) {
    let invTemplate = " "
    invTemplate += `
      <h4 id="${key}">${automaticUpgrades[key].display}: ${automaticUpgrades[key].quantity}</h4>
    `
    document.getElementById(key).innerHTML = invTemplate
    document.getElementById(key + "-price").innerHTML = "= " + automaticUpgrades[key].price
  }

  let template = " "
  template += `
  <h3 id="total">Total Runs Crushed:${crushed.amount}</h3>
  `
  document.getElementById("total").innerHTML = template

  template = " "
  template += `
   <h3 id="multiplier">Runs Crushed per Day Multiplier: ${crushed.multiplier}</h3>
  `
  document.getElementById("multiplier").innerHTML = template



}

function buyAuto(upgrade) {
  // crushed.amount -= automaticUpgrades.upgrade.price;
  crushed.amount -= automaticUpgrades[upgrade].price;
  automaticUpgrades[upgrade].quantity += 1
  automaticUpgrades[upgrade].price *= 2
  updateTotals()
  updateButtons()
}

// function buySnowboard() {
//   crushed.amount -= clickUpgrades.snowboard.price;
//   clickUpgrades.snowboard.quantity += 1
//   clickUpgrades.snowboard.price *= 2
//   updateTotals()
//   updateButtons()
// }

function buy(upgrade) {
  //console.log("purchased " + upgrade)

  crushed.amount -= clickUpgrades[upgrade].price;
  clickUpgrades[upgrade].quantity += 1
  clickUpgrades[upgrade].price *= 2

  crushed.multiplier = 0
  for (const key of Object.keys(clickUpgrades)) {
    //console.log(crushed.multiplier)
    //console.log(key + " multiplier " + clickUpgrades[key].multiplier)
    //console.log(key + " quantity " + clickUpgrades[key].quantity)
    crushed.multiplier += clickUpgrades[key].multiplier * clickUpgrades[key].quantity
    //console.log(crushed.multiplier)
  }
  updateTotals()
  updateButtons()
}

function updateButtons() {

  for (const key of Object.keys(clickUpgrades)) {
    if (clickUpgrades[key].price <= crushed.amount) {

      document.getElementById("buy-" + key).disabled = false;
    } else {
      //console.log("buy-" + key + " Disabled")
      document.getElementById("buy-" + key).disabled = true;

    }

  }

  for (const key of Object.keys(automaticUpgrades)) {
    if (automaticUpgrades[key].price <= crushed.amount) {
      document.getElementById("buy-" + key).disabled = false;

    } else {
      document.getElementById("buy-" + key).disabled = true;

    }
  }
}

function crush() {
  crushed.amount += crushed.multiplier;
  //console.log("clicked");

  updateTotals()
  updateButtons()
}

function collectAutoUpgrades() {
  crushed.amount += automaticUpgrades.friends.multiplier * automaticUpgrades.friends.quantity;

  updateTotals()
  updateButtons()
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

updateButtons();
updateTotals();
startInterval();