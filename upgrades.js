function getCost(x, data = game) {
  let upgradeCosts = {
    11() {
      return D.pow(5, data.rebuyables[11]).mul(0.01).div(getEffect(12, data))
    },
    12() {
      return D.pow(10, data.rebuyables[12]).mul(0.1).div(getEffect(13, data)[0]) // lmao pog an array for effects
    },
    13() {
      return D.pow(20, data.rebuyables[13]).mul(0.025)
    },
    auto1() {
      return D("ee5").pow(D.pow(10, data.rebuyables["auto1"]))
    }
  }
  return upgradeCosts[x]()
} 

function getEffect(x, data = game) {
  let upgradeEffects = {
    11() {
      return D.pow(D(1.1).times(getEffect(13, data)[1]), data.rebuyables[11])
    },
    12() {
      return D.pow(4, data.rebuyables[12])
    },
    13() {
      return {0:D.pow(8, data.rebuyables[13]), 1:D.pow(1.1, data.rebuyables[13])}
    },
    auto1() {
      return data.rebuyables["auto1"].lt(1) ? D(0) : D.pow(2, data.rebuyables["auto1"].sub(1))
    }
  }
  return upgradeEffects[x]()
} // wow we have a separate thing now gflghjflkhfglhjfglhkjfgl thonkeres thonkeres

function buy(x, y = D(1)) {
  let buyFuncs = {
    11(y) {
      let max = D.logBase(player.points.div(D(0.01).div(getEffect(12))), 5)
      maxBought = max.sub(player.rebuyables[11])
      game.rebuyables[11]
    },
    12(y) {
      if (game.points.gte(getCost(12))) {
        // game.points = game.points.sub(getCost(11)) // does this work????? thonkeres thonkeres
        game.rebuyables[12] = game.rebuyables[12].add(1)
      }
    },
    13(y) {
      if (game.points.gte(getCost(13))) {
        // game.points = game.points.sub(getCost(11)) // does this work????? thonkeres thonkeres
        game.rebuyables[13] = game.rebuyables[13].add(1)
      }
    },
    auto1() {
      if (game.points.gte(getCost("auto1"))) {
        // game.points = game.points.sub(getCost(11)) // does this work????? thonkeres thonkeres
        game.rebuyables["auto1"] = game.rebuyables["auto1"].add(1)
      }
    }
  }
    buyFuncs[x](y)
    // im asking di server what they think // ok
}