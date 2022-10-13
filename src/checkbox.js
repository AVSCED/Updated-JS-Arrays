disp_arr = [];
arrSplice = [];
function addProd() {
  var pcompany = document.getElementById("company").value;

  var pmodel = document.getElementById("model").value;

  var pmemory = Number(document.getElementById("memory").value);

  var pprice = Number(document.getElementById("price").value);
  if (pcompany == "" || pmodel == "" || pmemory == 0 || pprice == 0) {
    alert("Can not add Null Values to the Inventory.");
  } else {
    var cart = {
      product_id: pcompany,
      product_name: pmodel,
      product_memory: pmemory,
      product_price: pprice,
      flag: 0,
    };
    console.log(cart);
    disp_arr.push(cart);
    dsiplay(disp_arr);
  }
}
let c;
let s;
function dsiplay(data) {
  c = 0;
  console.log(data);
  s =
    " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th> <th>Action :</th></tr> ";
     if (data.length >= 1){
     data.forEach(e => {
      s +=
        "<tr><td>" +
        e.product_id +
        "</td>" +
        "<td>" +
        e.product_name +
        "</td>" +
        "<td>" +
        e.product_memory +
        "</td>" +
        "<td>" +
        e.product_price +
        "</td>" +
        "<td> <input type='checkbox' unchecked id='" +
        c +
        "'onclick='selectedItems(this.id)'>" +
        "</td></tr>";
      c++;
    }
    );
  }
  document.getElementById("table1").innerHTML = s;
}

function selectedItems(g) {
  arrSplice.push(g);
}

function deleteProd() {
  console.log(arrSplice);
  arrSplice.forEach(e => {
    disp_arr.splice(e,1);
  });
  dsiplay(disp_arr);
}
// function dsiplay1() {
//   s =
//     " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th> <th>Action :</th></tr> ";

//   s = disp_arr.forEach((value) => {
//     s +=
//       "<tr><td>" +
//       value.product_id +
//       "</td>" +
//       "<td>" +
//       value.product_name +
//       "</td>" +
//       "<td>" +
//       value.product_memory +
//       "</td>" +
//       "<td>" +
//       value.product_price +
//       "</td>" +
//       "<td> <input type='checkbox' unchecked id='" +
//       c +
//       "'onclick='selectedItems(this)'>" +
//       "</td></tr>";
//     c++;
//     document.getElementById("table1").innerHTML = s;
//   });
// }
