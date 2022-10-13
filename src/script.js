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
function addProd() {
  var pcompany = document.getElementById("company").value;

  var pmodel = document.getElementById("model").value;

  var pmemory = document.getElementById("memory").value;

  var pprice = document.getElementById("price").value;

  var cart = {
    product_id: pcompany,
    product_name: pmodel,
    product_memory: pmemory,
    product_price: pprice,
  };

  disp_arr.push(cart);
  s =
    " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th></tr> ";

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
      "</td></tr>";
    document.getElementById("table1").innerHTML = s;
  });
}

function sortby() {
  var orde = document.getElementById("order");
  var ord = orde.options[orde.selectedIndex].value;
  var categ = document.getElementById("category");
  var cat = categ.options[categ.selectedIndex].value;
  console.log(cat)
  s =
    " <tr><th>Company :</th>        <th>Model :</th>        <th>Memory GB:</th>  <th>Price :</th></tr> ";

  if (ord == "ascend") {
    compare()
    console.log(ord);
  } else {
    compare_rev()
  }
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
      "</td></tr>";
    document.getElementById("table2").innerHTML = s;
  });
}
function compare(a, b) {
  if (a[cat] < b[cat]) {
    return -1;
  }
  if (a[cat] > b[cat]) {
    return 1;
  }
  return 0;
}
function compare_rev(a, b) {
  if (a[cat] < b[cat]) {
    return 1;
  }
  if (a[cat] > b[cat]) {
    return -1;
  }
  return 0;
}
function searchProd() {
  var orde = document.getElementById("element_id");
  var element_search_id = orde.options[orde.selectedIndex].value;
  var key_value = document.getElementById("search_key").value;
  key = Object.keys(disp_arr);

  if (element_search_id == "company") {
    for (i = 0; i < 5; i++) {
      if (key_value == disp_arr[i].product_id) 
      {
        s =
          " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th></tr> ";

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
            "</td></tr>";
          document.getElementById("table3").innerHTML = s;
        });
      }
    }
  }
  if (element_search_id == "model") {
    for (i = 0; i < 5; i++) {
      if (key_value == disp_arr[i].product_name)
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
            "</td></tr>";
          document.getElementById("table3").innerHTML = s;
        });
    }
  }

  if (element_search_id == "memory") {
    for (i = 0; i < 5; i++) {
      if (key_value == disp_arr[i].product_memory) {

        console.log(key_value);
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
            "</td></tr>";
          document.getElementById("table3").innerHTML = s;
        });
      }
    }
  }

  if (element_search_id == "price") {
    for (i = 0; i < 5; i++) {
      if (key_value == disp_arr[i].product_price) {
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
            "</td></tr>";
          document.getElementById("table3").innerHTML = s;
        });
      }
    }
  }
}

