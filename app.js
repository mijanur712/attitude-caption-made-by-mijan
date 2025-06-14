const captions = [
  "I’m not here to fit in. I’m here to stand out.",
  "Don’t chase people. Be an example. Let them chase you.",
  "Born to express, not to impress.",
  "Success isn’t given, it’s earned – one bold step at a time.",
  "I do me, and I do it brilliantly.",
  "Built from silence, powered by confidence."
];

function generateCaption() {
  const random = captions[Math.floor(Math.random() * captions.length)];
  document.getElementById("caption").innerText = `${random} — made by Mijanur`;
}