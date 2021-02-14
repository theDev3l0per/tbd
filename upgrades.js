function getCost(x, data = game) {
  let upgradeCosts = {
    11() {
      return D.pow(5, data.rebuyables[11]).mul(0.01)
    },
    12() {
      return D.pow(10, data.rebuyables[12]).mul(0.1) // should 1 be the base tho
    }
  }
  return upgradeCosts[x]()
} 

function getEffect(x, data = game) {
  let upgradeEffects = {
    11() {
      return D.pow(1.1, data.rebuyables[11])
    },
    12() {
      return D.pow(2, data.rebuyables[12])
    }
  }
  return upgradeEffects[x]()
} // wow we have a separate thing now gflghjflkhfglhjfglhkjfgl thonkeres thonkeres

function buy(x) {
  let buyFuncs = {
    11() {
      if (game.points.gte(getCost(11))) {
        // game.points = game.points.sub(getCost(11)) // does this work????? thonkeres thonkeres
        game.rebuyables[11] = game.rebuyables[11].add(1)
      }
    }
  }
    buyFuncs[x]()
    // im asking di server what they think // ok
}