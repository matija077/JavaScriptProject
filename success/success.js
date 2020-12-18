//var gallery = document.getElementsByClassName("gallery");

//gallery.addEventListener("click", galleryClickHandler);
var state = {
    cart: []
};

var data = {
    item1: {
        imgUrl: null,
        title: "title1",
        price: 10,
        stock: 2, 
    },
    item2: {
        id: "item2",
        imgUrl: null,
        title: "title2",
        price: 20,
        stock: 0, 
    },
    item3: {
        id: "item3",
        imgUrl: null,
        title: "title2",
        price: 100,
        stock: 4, 
    }
};

//console.dir(document.getElementsByClassName("photoContainer")[0]);

function galleryClickHandler(event) {
    event.preventDefault();
    if (event.target !== event.currentTarget) {
        return;
    }
    event.preventDefault();
    
    var id = event.target.dataset. b id;
    console.dir(id);
    if (!id) {
        alert("Something went wrong!");
    } else {
        addItemToCart(data[id])
    }
}

function addItemToCart(item) {
    console.log(item);
}







/*$("#addit").click(function(){
    var productId = $("#productId").val();
    var productName = $("#productName").val();
    var productQuantity = $("#productQuantity").val();
    var data = {
      'product_id': productId,
      'product_name': productName,
      'quantity': productQuantity
    };
  
    $.post("/cart/add", data, showDone);
   });
   
   var showDone = function() {
    /* Make something happen here*/
   //}