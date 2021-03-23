var cart = [];


class cartItem{
    visualElement;
    quantityElement
    priceElement;
    nameElement;
    addButton;
    constructor(public name:string, public price:number, public quantity:number=1){
        cart.push(this);
        this.visualElement = document.createElement("div");
        this.visualElement.class = "cartItem";
        this.quantityElement = document.createElement("quantity");
        this.quantityElement.innerHTML= "Quantity " + quantity;
        this.priceElement = document.createElement("price");
        this.priceElement.innerHTML= "<br/>Price <br/>" + price;
        this.nameElement = document.createElement("name");
        this.nameElement.innerHTML= "<br/>Name " + name + "<br/>";
        this.visualElement.appendChild(this.nameElement);
        this.visualElement.appendChild(this.priceElement);
        this.visualElement.appendChild(this.quantityElement);
        this.addButton = document.createElement('button');
        this.addButton.innerHTML="Add One More";
        this.addButton.onclick = this.increment;
        this.visualElement.appendChild(this.addButton);

    }
    logData(){
        console.log(this.name);
        console.log(this.price);
        console.log(this.quantity);

    }
    increment(){
        console.log("incremented ::: v ");
        this.logData;
        this.quantity ++;
        //this.quantityElement.innerHTML = "Quantity " + this.quantity;
        console.log("QUantity inside increment : " + this.quantity);
    }
        
}
function populateCartArea(){
    if (cart.length == 0){
        let c1 = new cartItem("Banana", 0.50);
        let c2 = new cartItem("Orange", 0.93, 5);
        let c3 = new cartItem("Nintendo", 450, 1)
        let c4 = new cartItem("new puppy", 100, 1)
        let c5 = new cartItem("Spaceship", 150000004, 3)
        let c6 = new cartItem("Block of Ice", 10, 13)
        c1.logData();
        console.log(" The cart has " + cart.length + " items in it.");
    }
    
    var body = document.getElementsByTagName("body")[0];
    console.log(typeof(body))
    let item;
    for(var i=0; i < cart.length; i++){
        body.appendChild(cart[i].visualElement);
    }
    saveCart();
}

/**stores the current shopping cart in session storage */
function saveCart(){
    let cartString = JSON.stringify(cart);
    sessionStorage.setItem("shoppingCart", cartString);
}

/**
 * Loads session data into the cart
 */
function loadCart(){
    let cartString = sessionStorage.getItem("shoppingCart");
    cart = JSON.parse(cartString);
}

function populateTable(){
    loadCart();
    var table = document.getElementById("invoice");
    var body = table.getElementsByTagName("tbody")[0];
    let runningTotal = 0;
    for(let i = 0; i < cart.length; i++){
        var row = body.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = cart[i].name;
        cell2.innerHTML = "$" + cart[i].price;
        cell3.innerHTML = cart[i].quantity;
        let total = eval(cart[i].quantity) * eval(cart[i].price);
        runningTotal += total;
        cell4.innerHTML = "$" + total.toString();
        
    }
    let totalBox = document.getElementById("t");
    totalBox.innerHTML = "Cost of whole shopping cart: $" + runningTotal.toString();
    console.log(cart[0]);
}

