angular.module('shoppingCart')
    .service('shoppingCartService', function() {
        this.cart = [];
        
        this.subTotal = {total: 0}
        this.addItems = function(item) { 
            let index = this.cart.indexOf(item)
            if (index !==-1) {
                item.quantity -=1;
                this.cart[index].counter +=1
                this.subTotal.total += item.price;
            }else {
                item.quantity -=1;
                this.cart.push(item);
                this.subTotal.total += item.price;
            }
        }
        this.removeItems = function(item) {
            let index = this.cart.indexOf(item)   
                item.quantity += 1;
                item.cart[index].counter -=1;
                this.subTotal.total -=item.price;
                this.cart.splice(item.cart[index], 1);
        }}
    )