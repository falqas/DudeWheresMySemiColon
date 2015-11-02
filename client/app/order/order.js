angular.module('foodly.order', [])

.controller('OrderController', function($scope, $window,$location,Order,Counter,Auth) {

	$scope.orders = JSON.parse($window.localStorage.getItem('order'));
	console.log($scope.orders)
	$scope.checkOrder = function(){
		if($scope.orders.orders.length === 0){
			$location.path("/");
		}
	};
	$scope.submitOrder = function() {
		var orders= $scope.orders;
		orders.username = Auth.getUsername();
		Order.submitOrder(orders)
		.then(function(){
			$window.localStorage.setItem('order',JSON.stringify({orders: []}))
			Counter.number = 0;
			$('#myModal').modal('toggle')
			$location.path("/");
			});
	};
<<<<<<< HEAD
})

=======
	$scope.getTotal = function(){
    	var total = 0;
	    for(var i = 0; i < $scope.orders.orders.length; i++){
	    	if($scope.orders.orders[i].price){
	        total += $scope.orders.orders[i].price
	    	}
	    }
    return total;
	}
	$scope.RemoveItem = function(array,index){
		var order = JSON.parse($window.localStorage.getItem("order"));
		console.log(order);
		array.splice(index,1);
		order.orders.splice(index,1);
		$window.localStorage.setItem("order",JSON.stringify(order));
		if (order.orders.length === 0){
			$location.path('/')
		}
		Counter.number--
	}	
	$scope.checkOrder();
})
>>>>>>> e10fc05f154fb1cbe27df28aee8d09478a4c73c9
