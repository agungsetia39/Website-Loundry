// LOGIN
function login(){
  if(document.getElementById("user").value=="dila" &&
     document.getElementById("pass").value=="12345"){

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

  } else {
    alert("Login gagal");
  }
}

function logout(){
  document.getElementById("loginPage").classList.remove("hidden");
  document.getElementById("app").classList.add("hidden");
}

// DATA
let data=[];
let id=1;

function tambah(){
  let nama = document.getElementById("nama").value;
  let alamat = document.getElementById("alamat").value;
  let wa = document.getElementById("wa").value;
  let berat = document.getElementById("berat").value;

  if(!nama || !alamat || !wa || !berat){
    alert("Lengkapi data");
    return false;
  }

  data.push({
    id:id++,
    nama:nama,
    alamat:alamat,
    wa:wa,
    berat:berat
  });

  render();
  return false;
}

function render(){
  let html="";
  data.forEach(d=>{
    html+=`
    <tr>
      <td>${d.id}</td>
      <td>${d.nama}</td>
      <td>${d.alamat}</td>
      <td>${d.wa}</td>
      <td>${d.berat}</td>
    </tr>`;
  });

  document.getElementById("tabel").innerHTML = html;
}