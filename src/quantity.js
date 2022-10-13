disp_arr = [
  {
    product_id: "Samsung",
    product_name: "A50",
    product_memory: "64",
    product_price: "12000",
    product_quantity: "10",
  },
  {
    product_id: "Apple",
    product_name: "iPhone 12",
    product_memory: "128",
    product_price: "60000",
    product_quantity: "10",
  },
  {
    product_id: "Nokia",
    product_name: "M30",
    product_memory: "128",
    product_price: "39000",
    product_quantity: "10",
  },
  {
    product_id: "Vivo",
    product_name: "V15",
    product_memory: "256",
    product_price: "41000",
    product_quantity: "10",
  },
  {
    product_id: "Mi",
    product_name: "K20",
    product_memory: "512",
    product_price: "28000",
    product_quantity: "10",
  },
];
function viewProducts() {
  s =
    " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th>  <th> Quantity</th></tr> ";

  s = disp_arr.forEach((value) => {
    s +=
      "<tr><td>" +
      value.product_id +
      "</td>" +
      "<td>" +
      value.product_name +
      "</td>" +
      "<td>" +
      value.product_memory +
      "</td>" +
      "<td>" +
      value.product_price +
      "</td>" +
      "<td>" +
      value.product_quantity +
      "</td></tr>";
    document.getElementById("table1").innerHTML = s;
  });
}
function updateQuantity() {
  var stock = document.getElementById("stockName").value;
  var quantity = document.getElementById("updateValue").value;
  console.log(quantity);

  if (quantity <= 0) {
    alert("Enter Valid quantity");
  } else {
    for (i = 0; i < disp_arr.length; i++) {
      if (disp_arr[i].product_id == stock) {
        disp_arr[i].product_quantity = Number(disp_arr[i].product_quantity) + Number(quantity);
        viewProducts();
      }
    }
  }
}
