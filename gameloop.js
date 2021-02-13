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