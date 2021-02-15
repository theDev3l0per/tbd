const D = ExpantaNum // allows D(x) and D.function(inputs)
let game = {}/*= bruh gaming moment*/

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
  localStorage.thonkeres = JSON.stringify(game.$data)
}

function load() {
  game = app.mount("#app")
  if(localStorage.thonkeres) game = Object.assign(game,decodeObject(JSON.parse(localStorage.thonkeres)))
} 

function hardReset(){
  let x = window.confirm("Are you sure you want to reset your game?")
  if(x){
    localStorage.clear();
    player = {};
    location.reload();
  }else window.confirm("You have not reset your game.")
}

// perfect....?

// ex, in code to acces points its player.points not app.player, just player, we can switch to game if you want
// we are using vue3

var app = Vue.createApp({
  data() {
    return {
      points: D(0),
      rebuyables: {
        11: D(0),
        12: D(0),
        13: D(0),
        auto1: D(0)
      },
      unlocks: {
        automation: false,
      },
      lastTick: Date.now(),
      tab: '0', // ok so its '0'
    } /* ynot but ww HUH? thonkeres thonkeres */ },
  methods: {
    getPointGen() {
      return getPointGen(this)
    },
    getEffect(x) {
      return getEffect(x, this)
    },
    getCost(x) {
      return getCost(x, this)
    }}})
window.onload = () => {
  load()
  setInterval(loop,20)
  setInterval(save,10000)
}