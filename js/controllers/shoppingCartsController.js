angular.module('shoppingCart')
    .controller('shoppingCartsController', ['shoppingCartService','itemService', function(shoppingCart, itemList) {
        this.items = itemList.items
        this.cart = shoppingCart.cart
        this.subTotal = shoppingCart.subTotal
        this.addItems = shoppingCart.addItems
        
        
    }])