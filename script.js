let time = 600; // 10 minutes
let q = 0;
let score = 0;

const questions = [
  { q: "Capital of Nepal?", a: ["Kathmandu","Pokhara","Lalitpur"], c: "Kathmandu" },
  { q: "2 + 2 = ?", a: ["2","3","4"], c: "4" }
];

setInterval(() => {
  time--;
  let m = Math.floor(time / 60);
  let s = time % 60;
  document.getElementById("time").innerText =
    m + ":" + (s < 10 ? "0" + s : s);
  if (time <= 0) finish();
}, 1000);

function show() {
  document.getElementById("question").innerText = questions[q].q;
  let o = "";
  questions[q].a.forEach(x => {
    o += `<button onclick="check('${x}')">${x}</button><br>`;
  });
  document.getElementById("options").innerHTML = o;
}

function check(ans) {
  if (ans === questions[q].c) score++;
  next();
}

function next() {
  q++;
  if (q < questions.length) show();
  else finish();
}

function finish() {
  document.body.innerHTML = `<h2>Finished</h2><p>Score: ${score}</p>`;
}

show();
