disp_arr = [
  {
    product_id: "Samsung",
    product_name: "A50",
    product_memory: "64",
    product_price: "12000",
    product_rating: "-"
  },
  {
    product_id: "Apple",
    product_name: "iPhone 12",
    product_memory: "128",
    product_price: "60000",
    product_rating: "-"
  },
  {
    product_id: "Nokia",
    product_name: "M30",
    product_memory: "128",
    product_price: "39000",
    product_rating: "-"
  },
  {
    product_id: "Vivo",
    product_name: "V15",
    product_memory: "256",
    product_price: "41000",
    product_rating: "-"
  },
  {
    product_id: "Mi",
    product_name: "K20",
    product_memory: "512",
    product_price: "28000",
    product_rating: "-"
  },
];
function viewProd() {
   console.log(disp_arr);
  s =
    " <tr><th>Company :</th> <th>Model :</th> <th>Memory GB:</th> <th>Price:</th> <th>Rating :</th></tr> ";

  s = disp_arr.forEach((value) => {
    s +=
      "<tr><td>" + value.product_id +"</td>" + "<td>" + value.product_name + "</td>" +"<td>" + value.product_memory + "</td>" + "<td>" + value.product_price + "</td>" + "<td>"+ value.product_rating + "</td></tr>";
    document.getElementById("table1").innerHTML = s;
  });
}
function rateProd(){
    var c= document.getElementById("cart").value;
    var r=document.getElementById("rating").value;
    for (i=0;i<disp_arr.length;i++)
    {
        if (c== disp_arr[i].product_id){

            disp_arr[i].product_rating = r ;
        }
    }
    viewProd()
}
