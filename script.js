// // Start when the document is ready
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

// =============== START ====================
function ready(){
    addEvent();
}

function addEvent(){
    let removeItem = document.querySelectorAll(".removeItem");
    removeItem.forEach((element)=>{
       element.addEventListener("click",removeCartItem)
    })
   
    let addCartItems = document.querySelectorAll(".cart")
    addCartItems.forEach((element)=>{
        element.addEventListener("click",addItems)
    })
}

function removeCartItem(){
 let grandParent = this.parentElement.parentElement.parentElement;
 grandParent.remove();
}

// function addItems(){
//     let product = this.parentElement.parentElement;
//     console.log(product);
//     let title = product.querySelector(".product-title").innerHTML;
//     let price = product.querySelector(".product-price").innerHTML;
//     let imgSrc = product.querySelector(".product-img").src;
//     // console.log(title,price,imgSrc);
//     let cartBoxElement = cartBoxComponent(title,price,imgSrc);
//     let newDiv = document.createElement('div')
//     newDiv.innerHTML = cartBoxElement;
//     let cardShopItem = cart.querySelector('#cart');
//     cardShopItem.appendChild(newDiv);
// }

// function cartBoxComponent(title,price,imgSrc) {
//     return `
//     <tr>
//                 <td><a href="#"><i class="fa-regular fa-trash-can removeItem"></i></a></td>
//                 <td><img src=${imgSrc} alt=""></td>
//                 <td>${title}</td>
//                 <td>${price}</td>
//                 <td><input type="number" value="1"></td>
//                 <td>$110</td>
//     </tr>`
// }