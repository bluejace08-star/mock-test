let time = 600; // 10 minutes
let index = 0;
let score = 0;
let selected = [];

const quiz = [
  {
    q: "Capital of Nepal?",
    o: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
    a: "Kathmandu"
  },
  {
    q: "2 + 2 = ?",
    o: ["1", "2", "3", "4"],
    a: "4"
  }
];

// TIMER (FULL EXAM)
setInterval(() => {
  time--;
  let m = Math.floor(time / 60);
  let s = time % 60;
  document.getElementById("time").innerText =
    m + ":" + (s < 10 ? "0" + s : s);

  if (time <= 0) finish();
}, 1000);

function show() {
  document.getElementById("qno").innerText =
    "Question " + (index + 1);
  document.getElementById("question").innerText =
    quiz[index].q;

  let html = "";
  quiz[index].o.forEach(opt => {
    html += `
      <div class="option" onclick="select('${opt}')">
        ${opt}
      </div>
    `;
  });
  document.getElementById("options").innerHTML = html;
}

function select(ans) {
  selected[index] = ans;
  if (ans === quiz[index].a) score++;
  next();
}

function next() {
  index++;
  if (index < quiz.length) show();
  else finish();
}

function finish() {
  document.body.innerHTML = `
    <div style="text-align:center;margin-top:50px">
      <h2>Test Submitted</h2>
      <h3>Score: ${score}/${quiz.length}</h3>
    </div>
  `;
}

show();
