var shopper = {
    firstName : "Joe",
    lastName : "Friend",
    age: 43,
    likeToShop : false,
    groceryCart : ["apples", "bananas", "turkey", "milk", "eggs"],
    groceryCartItems : function (){
        console.log(this.groceryCart.length)
    }
 };

shopper.groceryCartItems();