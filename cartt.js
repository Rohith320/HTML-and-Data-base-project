let shopcart = document.querySelectorAll(".buynow-btn");
let products = [
    {
        name: "Carrot",
        tag: "carrot",
        price: 25,
        incart: 0,
    },
    {
        name: "Potatoes",
        tag: "Potato",
        price: 5,
        incart: 0,
    },
    {
        name: "Lettuce",
        tag: "lettuce",
        price: 5,
        incart: 0,
    },
    {
        name: "Onions",
        tag: "onion",
        price: 20,
        incart: 0,
    },
    {
        name: "Tomatoes",
        tag: "tomatoes",
        price: 14,
        incart: 0,
    },
    {
        name: "Pumpkins",
        tag: "pumpkins",
        price: 40,
        incart: 0,
    },
    {
        name: "Radish",
        tag: "radish",
        price: 17,
        incart: 0,
    },
    {
        name: "Cauliflower",
        tag: "cauliflower",
        price: 15,
        incart: 0,
    },
    {
        name: "Capcicum",
        tag: "capcicum",
        price: 13,
        incart: 0,
    },
    {
        name: "Papaya",
        tag: "Papaya",
        price: 18,
        incart: 0,
    },
    {
        name: "Guava",
        tag: "Guava",
        price: 25,
        incart: 0,
    },
    {
        name: "Water Melon",
        tag: "Watermelon",
        price: 20,
        incart: 0,
    },
    {
        name: "Custard Apple",
        tag: "Custard",
        price: 30,
        incart: 0,
    },
    {
        name: "Mangoes",
        tag: "Mango",
        price: 60,
        incart: 0,
    },
    {
        name: "Oranges",
        tag: "Orange",
        price: 40,
        incart: 0,
    },
    {
        name: "Muskmelon",
        tag: "muskmelon",
        price: 30,
        incart: 0,
    },
    {
        name: "BlackBerries",
        tag: "blackberry",
        price: 45,
        incart: 0,
    },
    {
        name: "Grapefruit",
        tag: "Grapefruit",
        price: 38,
        incart: 0,
    },

    {
        name: "Urad dal",
        tag: "uraddal",
        price: 7,
        incart: 0,
    },
    {
        name: "Kidney beans",
        tag: "kidneybeans",
        price: 8,
        incart: 0,
    },
    {
        name: "white beans",
        tag: "uradal",
        price: 9,
        incart: 0,
    },
    {
        name: "yellow-pigeon",
        tag: "yellow-pigeon-pea",
        price: 10,
        incart: 0,
    },
]
for(let i=0; i< shopcart.length; i++){
    shopcart[i].addEventListener('click', () => {
    cartitemnums(products[i]); 
    totalcost(products[i])
    })
}
function onloadcartnums(){
    let productnums = localStorage.getItem('cartitemnums'); 
    if(productnums){
    document.querySelector('.cart span').textContent = productnums;
    }
}
function cartitemnums(product){
    let productnums = localStorage.getItem('cartitemnums');
    productnums = parseInt(productnums);
    localStorage.setItem('cartitemnums', 1 );
    if(productnums){
        localStorage.setItem('cartitemnums', productnums + 1);
        document.querySelector('.cart span').textContent = productnums + 1;
    }
    else{
        localStorage.setItem('cartitemnums', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
function  setItems(product){
    let cartiitems  = localStorage.getItem("productsincart");
    cartiitems = JSON.parse(cartiitems);
    if(cartiitems != null) {
        if(cartiitems[product.tag] == undefined){
            cartiitems = {
                ...cartiitems,
                [product.tag]: product
            }
        }
        cartiitems[product.tag].incart += 1;
    }
    else {
        product.incart = 1;
        cartiitems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsincart", JSON.stringify(cartiitems));
} 
function removeitem(key){
    console.log(key);
    let cart = JSON.parse(localStorage.getItem('productsincart'));
    console.log(cart);
    let pcost = (cart[key].price);
    if(cart[key].incart == 1){
        delete cart[key];
        let n = localStorage.getItem("cartitemnums");
        localStorage.setItem("cartitemnums", n-1);
    }
    else{
        cart[key].incart -= 1;
       let n = localStorage.getItem("cartitemnums");
        localStorage.setItem("cartitemnums", n-1);
    }
    localStorage.setItem('productsincart', JSON.stringify(cart));
    localStorage.setItem("totalcost", localStorage.getItem("totalcost")-pcost);
    document.getElementById("inum").innerText = localStorage.getItem("cartitemnums");
    
    
}
function totalcost(pro)
{
   //console.log("the price is", pro.price);
   let cartcost = localStorage.getItem("totalcost");
   if(cartcost != null){
    cartcost = parseInt(cartcost);
       localStorage.setItem("totalcost", cartcost + pro.price);
   }
   else{
   localStorage.setItem("totalcost", pro.price);
   }
}
function displaycart(){
    let cartiitems = localStorage.getItem('productsincart');
    let cartcost = localStorage.getItem("totalcost");
    cartiitems = JSON.parse(cartiitems);
    let pcontainer = document.querySelector(".products");
    if(cartiitems && pcontainer){
        pcontainer.innerHTML = '';
        Object.values(cartiitems).map(item =>{
            pcontainer.innerHTML +=
        `<div class = "product">
           <img src="${item.tag}.jpg">
          <span>${item.name}</span>
         </div>
         <div class="price">₹${item.price}</div>
         <div class = "quantity">
         <span> ${item.incart}</div>
         <div class = "total">₹${item.incart*item.price}</div>
        <button type="button" class = "btn" onclick= 'removeitem("${item.tag}"); alert("Reload the page to see changes!!!")' ><i class="fa fa-trash" aria-hidden="true"></i></button>
         <div style="flex-basis: 100%;height: 0;"></div>
        `;   
        })
        pcontainer.innerHTML += `
        <div class=basketTotalcontainer>
        <h4 class="baskettotaltitle>
        Basket total </h4>
        <h4 class = "baskettotal>Total Payable Amount: ₹${cartcost}</h4>
        `;
        pcontainerr.innerHTML += `
        <h4>Total Payable Amount: ₹${cartcost}</h4>
        `;

    }
}
onloadcartnums();
displaycart();
function display(){
    let cartiitems = localStorage.getItem('productsincart');
    let cartcost = localStorage.getItem("totalcost");
    cartiitems = JSON.parse(cartiitems);
    let pcontainer = document.querySelector(".productss");
    if(cartiitems && pcontainer){
        pcontainer.innerHTML = '';
        pcontainer.innerHTML += `
        <h4 class = "baskettotal">Total Payable Amount: ₹${cartcost}</h4>
        `;
    }
}
display();