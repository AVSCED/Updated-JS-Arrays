disp_arr = [
  {
    product_id: "Samsung",
    product_name: "A50",
    product_memory: "64",
    product_price: "12000",
  },
  {
    product_id: "Apple",
    product_name: "iPhone 12",
    product_memory: "128",
    product_price: "60000",
  },
  {
    product_id: "Nokia",
    product_name: "M30",
    product_memory: "128",
    product_price: "39000",
  },
  {
    product_id: "Vivo",
    product_name: "V15",
    product_memory: "256",
    product_price: "41000",
  },
  {
    product_id: "Mi",
    product_name: "K20",
    product_memory: "512",
    product_price: "28000",
  },
];
function searchProd() {
  var ord = document.getElementById("element_id");
  var element_search_id = ord.options[ord.selectedIndex].value;
  var key_value = document.getElementById("search_key").value;
  console.log(ord);
  console.log(element_search_id);
  console.log(key_value);

  s =
    " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th></tr> ";

  if (element_search_id == "company") {
    value = key_value;
    console.log(value);
    s = disp_arr.forEach((value) => {
      if (value.product_id == key_value) {
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
          "</td></tr>";
        document.getElementById("table3").innerHTML = s;
      }
    });
  }

  if (element_search_id == "model") {
    value = key_value;
    console.log(value);
    s = disp_arr.forEach((value) => {
      if (value.product_name == key_value) {
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
          "</td></tr>";
        document.getElementById("table3").innerHTML = s;
      }
    });
  }

  if (element_search_id == "memory") {
    value = key_value;
    console.log(value);
    s = disp_arr.forEach((value) => {
      if (value.product_memory == key_value) {
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
          "</td></tr>";
        document.getElementById("table3").innerHTML = s;
      }
    });
  }

  if (element_search_id == "price") {
    value = key_value;
    console.log(value);
    s = disp_arr.forEach((value) => {
      if ( value.product_price== key_value) {
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
          "</td></tr>";
        document.getElementById("table3").innerHTML = s;
      }
    });
  }
}
