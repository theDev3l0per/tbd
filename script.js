const D = ExpantaNum // allows D(x) and D.function(inputs)
let game /*= bruh gaming moment*/

function isEncodedExpantaNum(thing) {
  return thing.hasOwnProperty("sign") && thing.hasOwnProperty("array") && thing.hasOwnProperty("layer")
}

function expantaIze(thing) {
  let expanta = D(0)
  expanta.layer= thing.layer
  expanta.sign = thing.sign
  expanta.array = thing.array
  return expanta
}

function decodeObject(thing) {
  let clone = {...thing}
  for(let i in clone) {
    if(isEncodedExpantaNum(thing[i])) clone[i] = expantaIze(thing[i])
    else if(typeof thing[i]=="object" && thing[i].constructor.name != "Array") clone[i] = decodeObject(thing[i])
  }
  return clone
}

function save() {
  localStorage.thonkeres = JSON.stringify(game)
}

function load() {
  if(localStorage.thonkeres) game = Object.assign(game,decodeObject(JSON.parse(localStorage.thonkeres)))
  game = app.mount("#app")
} 

// perfect....?

// ex, in code to acces points its player.points not app.player, just player, we can switch to game if you want
// we are using vue3

var app = Vue.createApp({
  data() {
    return {
      points: D(0),
      lastTick: Date.now()
    } // ynot but ww HUH? thonkeres thonkeres  
  }
})


window.onload = () => {
  load()
  setInterval(loop,20)
}