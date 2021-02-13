function loop() {
  tick(Math.max(0,Date.now() - game.lastTick)) // the max is for if save gets screwed up the save doesnt actually get screwed up
  game.lastTick = Date.now()
}
function tick(diff) {
  let gain = getPointGen()
  gain = gain.times(diff/1000) // dont ever change this line
  game.points = game.points.add(gain)
}
function getPointGen() {
  let gain = D(0.01) // wait what?
  return gain // lmao funi haha test
}

function getCost(x) {
  let upgradeCosts = {
    11() {
      return D.pow(5, game.rebuyables[11]).mul(0.01)
    },
    12() {
      
    }
  }
  return upgradeCosts[x]()
} 

function getEffect(x) {
  let ungradeEffects = {
    
  }
  return upgradeCosts[x]()
}
//  an object with functions
// just use the [key] trick
// show


