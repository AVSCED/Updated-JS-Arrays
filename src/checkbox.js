disp_arr = [];
arrSplice = [];
//To add product to cart
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
    disp_arr.push(cart);
    dsiplay(disp_arr);
  }
}
let c;
let s;
// To display table
function dsiplay(data) {
  c = 0;
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
//To Create an array to store indexes to splice more than one element
function selectedItems(g) {
  arrSplice.push(g);
}
//To delete the selected items
function deleteProd() {
  arrSplice.forEach(e => {

    disp_arr.splice(disp_arr[e],1);

  });
  dsiplay(disp_arr);
}
