function getCost(x, data = game) {
  let upgradeCosts = {
    11() {
      return D.pow(5, data.rebuyables[11]).mul(0.01).div(getEffect(12, data))
    },
    12() {
      return D.pow(10, data.rebuyables[12]).mul(0.1).div(getEffect(13, data)[0]) // should 1 be the base tho
    },
    13() {
      return D.pow(20, data.rebuyables[13].mul(0.25))
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
    },
    13() {
      return [D.pow(2, data.rebuyables[13]), ]
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
    },
    12() {
      if (game.points.gte(getCost(12))) {
        // game.points = game.points.sub(getCost(11)) // does this work????? thonkeres thonkeres
        game.rebuyables[12] = game.rebuyables[12].add(1)
      }
    }
  }
    buyFuncs[x]()
    // im asking di server what they think // ok
}