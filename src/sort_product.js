disp_arr = [
    {
      product_id: "Samsung",
      product_name: "A50",
      product_memory: 64,
      product_price: 12000,
    },
    {
      product_id: "Apple",
      product_name: "iPhone 12",
      product_memory: 128,
      product_price: 60000,
    },
    {
      product_id: "Nokia",
      product_name: "M30",
      product_memory: 128,
      product_price: 39000,
    },
    {
      product_id: "Vivo",
      product_name: "V15",
      product_memory: 256,
      product_price: 41000,
    },
    {
      product_id: "Mi",
      product_name: "K20",
      product_memory: 512,
      product_price: 28000,
    },
  ];
function sortby() {
    var orde = document.getElementById("order");
    var ord = orde.options[orde.selectedIndex].value;
    var categ = document.getElementById("category");
    var cat = categ.options[categ.selectedIndex].value;
    console.log(cat);
    console.log(ord);
 
    s =
    " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th>  <th>Price :</th></tr> ";

    if (ord == "ascend" && cat== "product_id") {
      disp_arr.sort((a,b) => (a.product_id.toLowerCase() > b.product_id.toLowerCase() ? 1 : -1 ));

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
        "<td></tr>";
      document.getElementById("table1").innerHTML = s;
    });
    }
    if (ord == "ascend" && cat== "product_name") {
      disp_arr.sort((a,b) => (a.product_name.toLowerCase() > b.product_name.toLowerCase() ? 1 : -1));
console.log("ooo");
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

    if (ord == "ascend" && cat== "product_memory") {
      disp_arr.sort((a,b)=> {return a.product_memory-b.product_memory;});

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
        "<td></tr>";
      document.getElementById("table1").innerHTML = s;
    });
    } 
    if (ord == "ascend" && cat== "product_price") {
      disp_arr.sort((a,b)=> {return a.product_price-b.product_price;});

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
    if (ord == "descend" && cat== "product_id") {
      disp_arr.sort((a,b) => (a.product_id.toLowerCase() < b.product_id.toLowerCase() ? 1 : -1 ));

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
        "<td></tr>";
      document.getElementById("table1").innerHTML = s;
    });
    }
    if (ord == "descend" && cat== "product_name") {
      disp_arr.sort((a,b) => (a.product_name.toLowerCase() < b.product_name.toLowerCase() ? 1 : -1));
console.log("ooo");
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

    if (ord == "descend" && cat== "product_memory") {
      disp_arr.sort((a,b)=> {return b.product_memory-a.product_memory;});

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
        "<td></tr>";
      document.getElementById("table1").innerHTML = s;
    });
    } 
    if (ord == "descend" && cat== "product_price") {
      disp_arr.sort((a,b)=> {return b.product_price-a.product_price;});

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
  }