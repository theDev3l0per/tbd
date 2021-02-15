function loop() {
  tick(Math.max(0,Date.now() - game.lastTick)) // the max is for if save gets screwed up the save doesnt actually get screwed up
  game.lastTick = Date.now()
}
function tick(diff) {
  let gain = getPointGen()
  gain = gain.times(diff/1000) // dont ever change this line
  game.points = game.points.add(gain)
  if game.arunAutomation()
}
function getPointGen(data = game) {
  let gain = D(0.01) // wait what?
  gain = gain.times(getEffect(11, data))
  return gain // lmao funi haha test
}


//  an object with functions
// just use the [key] trick
// show


