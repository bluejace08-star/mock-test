let time = 600; // 10 minutes
let current = 0;
let answers = [];

const quiz = [
  {q:"Capital of Nepal?", o:["Kathmandu","Pokhara","Lalitpur","Bhaktapur"], a:"Kathmandu"},
  {q:"2 + 2 = ?", o:["1","2","3","4"], a:"4"},
  {q:"Sky color?", o:["Red","Blue","Green","Black"], a:"Blue"},
  {q:"Largest planet?", o:["Earth","Mars","Jupiter","Venus"], a:"Jupiter"},
  {q:"Sun rises from?", o:["West","East","North","South"], a:"East"},
  {q:"Water formula?", o:["H2O","CO2","O2","NaCl"], a:"H2O"},
  {q:"5 x 5 = ?", o:["10","20","25","30"], a:"25"},
  {q:"Fastest land animal?", o:["Lion","Cheetah","Tiger","Leopard"], a:"Cheetah"},
  {q:"Capital of France?", o:["London","Paris","Berlin","Rome"], a:"Paris"},
  {q:"Boiling point of water?", o:["50°C","100°C","90°C","80°C"], a:"100°C"}
];

// TIMER
setInterval(() => {
  time--;
  let m = Math.floor(time/60);
  let s = time%60;
  document.getElementById("time").innerText = m + ":" + (s<10?"0"+s:s);
  if(time <=0) finish();
},1000);

// BUILD PALETTE
function buildPalette(){
  let html = "";
  quiz.forEach((_,i)=>{
    let cls = i===current ? "active" : "";
    if(answers[i]) cls="answered";
    html+=`<span class="${cls}" onclick="jump(${i})">${i+1}</span>`;
  });
  document.getElementById("palette").innerHTML = html;
}

// SHOW QUESTION
function show(){
  document.getElementById("qno").innerText = "Question "+(current+1);
  document.getElementById("question").innerText = quiz[current].q;
  let html="";
  quiz[current].o.forEach(opt=>{
    let cls=answers[current]===opt?"option selected":"option";
    html+=`<div class="${cls}" onclick="select('${opt}')">${opt}</div>`;
  });
  document.getElementById("options").innerHTML=html;
  buildPalette();
}

function select(ans){
  answers[current]=ans;
  show();
}

function next(){
  if(current<quiz.length-1){
    current++;
    show();
  }
}

function prev(){
  if(current>0){
    current--;
    show();
  }
}

function jump(i){
  current=i;
  show();
}

function finish(){
  let score=0;
  quiz.forEach((q,i)=>{
    if(answers[i]===q.a) score++;
  });
  document.body.innerHTML=`<div style="text-align:center;margin-top:50px">
  <h2>Test Submitted</h2>
  <h3>Score: ${score} / ${quiz.length}</h3>
  </div>`;
}

show();
