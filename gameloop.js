function loop() {
  tick(Math.max(0,Date.now() - game.lastTick)) // the max is for if save gets screwed up the save doesnt actually get screwed up
  game.lastTick = Date.now()
}
function tick(diff) {
  
}