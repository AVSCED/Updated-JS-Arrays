disp_arr = [];
arrSplice = [];
//To add product to cart array
function addProd() {
  var pcompany = document.getElementById("company").value;
  var pmodel = document.getElementById("model").value;
  var pmemory = Number(document.getElementById("memory").value);
  var pprice = Number(document.getElementById("price").value);
  //To check if user entered null values
  if (pcompany == "" || pmodel == "" || pmemory == 0 || pprice == 0) {
    alert("Can not add Null Values to the Inventory.");
  } else {
    var cart = {
      product_id: pcompany,
      product_name: pmodel,
      product_memory: pmemory,
      product_price: pprice
    };
    disp_arr.push(cart);
    dsiplay(disp_arr);
  }
}
// To display table
function dsiplay(data) {
  let s;
  let c=0;
  s =" <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th> <th>Action :</th></tr> ";
     
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
    });
    document.getElementById("table1").innerHTML = s;
  }
  

//To Create an array to store indexes to splice more than one element
function selectedItems(g) {
  g=Number(g);
  arrSplice.push(g);
  arrSplice.sort();
  arrSplice.reverse();
  console.log(arrSplice);
  console.log(disp_arr);
}
//To delete the selected items
function deleteProd() {
  
  arrSplice.forEach((el,index) => {
    console.log("HI"+index);
    console.log(el);
    disp_arr.splice(el,1);
  });
  dsiplay(disp_arr);
  arrSplice=[];
}
