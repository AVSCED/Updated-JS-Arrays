disp_arr = [
  {
    product_id: "Samsung",
    product_name: "A50",
    product_memory: "64",
    product_price: 12000,
    flag: 0,
  },
  {
    product_id: "Apple",
    product_name: "iPhone 12",
    product_memory: "128",
    product_price: 60000,
    flag: 0,
  },
  {
    product_id: "Nokia",
    product_name: "M30",
    product_memory: "128",
    product_price: 39000,
    flag: 0,
  },
  {
    product_id: "Vivo",
    product_name: "V15",
    product_memory: "256",
    product_price: 41000,
    flag: 0,
  },
  {
    product_id: "Mi",
    product_name: "K20",
    product_memory: "512",
    product_price: 28000,
    flag: 0,
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

function priceRange() {
  let lowLimit = document.getElementById("lowerLimit").value;
  let upLimit = document.getElementById("upperLimit").value;
  lowLimit = Number(lowLimit);
  upLimit = Number(upLimit);
  
  let str =
    " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th>  <th> Quantity</th></tr> ";
  disp_arr.forEach((value) => {
    if(value.product_price<= upLimit&&value.product_price>=lowLimit){
        str +=
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
      document.getElementById("table3").innerHTML = str;
    }
    
  });
}
