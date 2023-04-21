$(document).ready(function () {
      let productId = localStorage.getItem('productId');
      if (productId) {
            let product = products.find(function (p) {
                  return p.id == productId;
            });
            if (product) {
                  displayProductDetail(product);
            }
      }
});