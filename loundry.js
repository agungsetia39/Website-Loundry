function login(){
  if(user.value=="dila" && pass.value=="12345"){
    loginPage.classList.add('hidden');
    app.classList.remove('hidden');
  } else alert("Login gagal");
}

function logout(){
  loginPage.classList.remove('hidden');
  app.classList.add('hidden');
}

// SLIDER
let imgs=[
"https://images.unsplash.com/photo-1604335399105-a0c585fd81a1",
"https://images.unsplash.com/photo-1581578731548-c64695cc6952"
];
let txt=["Diskon 30%","Gratis Antar"];
let i=0;

setInterval(()=>{
  i=(i+1)%imgs.length;
  slider.src=imgs[i];
  sliderText.innerText=txt[i];
},3000);

// DATA
let data=[];
let id=1;

function tambah(){
  data.push({
    id:id++,
    nama:nama.value
  });
  render();
  return false;
}

function render(){
  let html="";
  data.forEach(d=>{
    html+=`<tr><td>${d.id}</td><td>${d.nama}</td></tr>`;
  });
  tabel.innerHTML=html;
}