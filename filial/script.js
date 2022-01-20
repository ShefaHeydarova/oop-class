class Company {
  constructor(sirketAdi, filialAdi) {
    (this.companyName = sirketAdi), (this.filialName = filialAdi);
  }

  isciler = [[], [], []];

  dataAl() {
    let arr = this.isciler;

    let ad = document.getElementById("ad").value;
    let vezife = document.getElementById("vezife").value;
    let maas = document.getElementById("maas").value;

    if ((ad == "") || (vezife == "") || (maas == "")) {
      alert("Zəhmət olmasa aşağıdakı dəyərləri daxil edin");
    } else {
      arr[0].push(ad);
      arr[1].push(vezife);
      arr[2].push(maas);
    }
  }
  table() {
    let arr = this.isciler;
    let screen = `<thead>
         <tr>
           <th scope="col">№</th>
           <th scope="col">Ad</th>
           <th scope="col">Vəzifə</th>
           <th scope="col">Maaş</th>
         </tr>
       </thead>`;

    for (let i = 0; i < arr[0].length; i++) {
      screen += `<tbody>
           <tr>
             <th scope="row">${i + 1}</th>
             <td> ${arr[0][i]} </td> 
             <td>${arr[1][i]}</td>
             <td>${arr[2][i]}</td>
           </tr>
         </tbody>`;
    }

    return screen;
  }
}

let a = new Company("YupTechnology", "Nizami");
let b = new Company("YupTechnology", "Elmlər");
let c = new Company("YupTechnology", "Yasamal");
let d = new Company("YupTechnology", "Sahil");
let e = new Company("YupTechnology", "Neftçilər");

document.getElementById("company-name").innerHTML = a.companyName;

document.getElementById("myBtn").disabled = true;

let Filial = [];

Filial.push(
  a.filialName,
  b.filialName,
  c.filialName,
  d.filialName,
  e.filialName
);

let filial = document.getElementById("filial");
let tbl = document.getElementById("tbl");

onload = function () {
  
  let ekran = `<option value="" disabled selected>Filial seçin</option>`;
  for (let item in Filial) {
    ekran += `<option value="${item}">${Filial[item]}</option>`;
  }
  filial.innerHTML = ekran;
};

function Choose() {
  document.getElementById("myBtn").disabled =false;
  let z = document.getElementById("filial-name");
  let value = filial.value;

  if (value == 0) {
    z.innerHTML = a.filialName;
    tbl.innerHTML = a.table();
  } else if (value == 1) {
    z.innerHTML = b.filialName;
    tbl.innerHTML = b.table();
  } else if (value == 2) {
    z.innerHTML = c.filialName;
    tbl.innerHTML = c.table();
  } else if (value == 3) {
    z.innerHTML = d.filialName;
    tbl.innerHTML = d.table();
  } else if (value == 4) {
    z.innerHTML = e.filialName;
    tbl.innerHTML = e.table();
  }
}

function Gonder() {
  let value = filial.value;
  if (value == 0) {
    gonder.call(a);
  } else if (value == 1) {
    gonder.call(b);
  } else if (value == 2) {
    gonder.call(c);
  } else if (value == 3) {
    gonder.call(d);
  } else if (value == 4) {
    gonder.call(e);
  }
}

function gonder() {
  this.dataAl();
  tbl.innerHTML = this.table();
  clr();
}

function clr() {
let inp = document.getElementsByTagName("input");
console.log(inp);
for(let i=0;i<inp.length;i++){
  inp[i].value="";
}
}
