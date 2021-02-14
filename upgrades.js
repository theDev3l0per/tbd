function getCost(x, data = game) {
  let upgradeCosts = {
    11() {
      return D.pow(5, data.rebuyables[11]).mul(0.01)
    },
    12() {
      
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
} // wow we have a separate thing now gflghjflkhfglhjfglhkjfgl thonkeres tonogvjnhkgfwers