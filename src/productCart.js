disp_arr = [
  {
    product_id: "Samsung",
    product_name: "A50",
    product_memory: "64",
    product_price: "12000",
    product_quantity: 20,
    flag: 0,
    quantity_bought:0
  },
  {
    product_id: "Apple",
    product_name: "iPhone 12",
    product_memory: "128",
    product_price: "60000",
    product_quantity: 20,
    flag: 0,
    quantity_bought:0
  },
  {
    product_id: "Nokia",
    product_name: "M30",
    product_memory: "128",
    product_price: "39000",
    product_quantity: 20,
    flag: 0,
    quantity_bought:0
  },
  {
    product_id: "Vivo",
    product_name: "V15",
    product_memory: "256",
    product_price: "41000",
    product_quantity: 20,
    flag: 0,
    quantity_bought:0
  },
  {
    product_id: "Mi",
    product_name: "K20",
    product_memory: "512",
    product_price: "28000",
    product_quantity: 20,
    flag: 0,
    quantity_bought:0
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
var quantityUp = 0;
function addToCart() {
  var stock = document.getElementById("cart").value;
  console.log(stock);
  var quantity = document.getElementById("quantityAdded").value;
  quantity = parseInt(quantity);
  console.log(quantity);
  var c = 0;
  if (quantity <= 0) {
    alert("Can't add in the Cart");
  } else {
    for (i = 0; i < disp_arr.length; i++) {
      if (disp_arr[i].product_id == stock) {
        if (quantity <= disp_arr[i].product_quantity) {
          value = stock;
          disp_arr[i].product_quantity =disp_arr[i].product_quantity - quantity;

          console.log(disp_arr[i].product_quantity);

          disp_arr[i].quantity_bought= disp_arr[i].quantity_bought+quantity;
          
          disp_arr[i].flag = 1;

          c = 1;
        } else {
          alert("Quantity not available in the Stock !");
        }
      }
    }
  }
  if (c == 1) {
    key_value = 1;
    cartItem = 0;
    for (i = 0; i < disp_arr.length; i++) {
      s =
        " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th>  <th>Quantity :</th></tr> ";

      if (disp_arr[i].flag == 1) {
        var cartItem = 0;
        value = key_value;
        console.log(typeof disp_arr[0].product_quantity);
        cartItem = 20 - disp_arr[i].product_quantity;
        console.log(cartItem);
        s = disp_arr.forEach((value) => {
          if (value.flag == key_value) {
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
              value.quantity_bought +
              "</td><td>";
            document.getElementById("table3").innerHTML = s;
          }
        });
      }
    }
    viewProducts();
  }
}
