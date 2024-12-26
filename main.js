let cartIcon = document.querySelector ("#card-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add('active');
};

closecart.onclick = () => {
    cart.classList.remove('active');
};


let boxxcartIcon = document.querySelector ("#add-cart1");
let boxxcart = document.querySelector(".boxx");
let boxxclosecart = document.querySelector("#boxxclose-cart");

boxxcartIcon.onclick = () => {
    boxxcart.classList.add('active');
};

boxxclosecart.onclick = () => {
    boxxcart.classList.remove('active');
};




































if (document.readyState=="loading") {
    document.addEventListener('DOMContentLoaded', ready);
}else {
    ready( );
}

function ready(){
    var removecartbuttons = document.getElementsByClassName('cart-remove')
    console.log(removecartbuttons);
    for (var i = 0; i <removecartbuttons.length ; i++){
        var button = removecartbuttons[i];
        button.addEventListener('click',removecartitem);
    }
    var quantityinputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityinputs.length; i++) {
        var input = quantityinputs[i];
        input.addEventListener('change', quantityChanged);
    }
    var addcart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addcart.length; i++){
        var button = addcart[i];
        button.addEventListener('click',addcartclicked);
    }

}





function removecartitem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    updatetotal();
}
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <=0 ) {
        input.value = 1
    }
    updatetotal();
}
function addcartclicked(event){
    var button = event.target;
    var shopproducts = button.parentelement;
   // var title = shopproducts.getElementsByClassName('product-title')[0].innertext;
    var price = shopproducts.getElementsByClassName('price')[0].innertext;
    var productimg = shopproducts.getElementsByClassName('product-img')[0].src;
    console.log(title,price,productimg);
}

function updatetotal() {
    var cartcontent = document.getElementsByClassName('cart-content')[0];
    var cartboxes = cartcontent.getElementsByClassName('cart-box'); 
    var total=0;
     for (var i = 0; i < cartboxes.length; i++){
        var cartbox = cartboxes[i];
        var priceElement = cartbox.getElementsByClassName('cart-price')[0];
        var quantityelement = cartbox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innertext.replace('$',''));
        var quantity = quantityelement.value;
        total = total + price * quantity;
        total=Math.round(total * 100)/100;
        document.getElementsByClassName("total-price")[0].innertext = '$' + total;
        
    }


}


