document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3200, npcCollisionRadius: 100, actionDuration:800, jumpHeight: 300, npcMoveToX: -60, maxSimultaneousNPCs: 1, removeNPCAfterInteractedDelay: 5000});
});