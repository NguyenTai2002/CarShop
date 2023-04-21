$(document).ready(function () {
      let username = $("#username").val();
      let password = $("#password").val();
      let rePassword = $("#re-signup-password").val();
      let firstName = $("#fName").val();
      let lastName = $("#lName").val();

      let regexName = ""
      $("#register").click(function () {
            window.location.href = "../HTML/login.html"
      })

      $("#signup").hide(350)
      $("#create-new").click(function () {
            $("#signup").toggle(350)
            $("#login").toggle(350)
      })
      $("#log-in").click(function () {
            $("#signup").toggle(350)
            $("#login").toggle(350)
      })
      $("#username").focus(function () {
            $("input[type=text]").attr("placeholder", "Phone or Email address")
            $("#username").blur(function () {
                  $("input[type=text]").attr("placeholder", "")
            })
      })

      function handleLogin() {
            
            if ($("#username").val() == "" || $("#password").val() == "") {
                  return false;
            } else {
                  
                  window.location.href = "../HTML/index.html"
            }
      }
      function handleSignup() {

      }
      $("#loginbtn").click(function (e) {
            e.preventDefault()
            handleLogin();
      })
})

$(document).ready(function () {

      const products = [
            {
                  id: 1,
                  name: "aventador",
                  price: "106500",
                  odo: 1000,
                  description: "Service date september 24th 2015  Huracan LP610-4 Coupe Selezione 12 Months CPO, Matte Black Wrap real paint Giallo Midas, fully electrical seats adjustment, rear view camera and parking sensors, transparent engine bonnet with carbon forged engine bay, navigation system, floor mats with leather piping and double stitching, sport exhaust system + style package, branding package, lamborghini dynamic steering, lifting system Rims Mimas forged 20 shiny black, yellow calipers. For more information, please contact us. ",
                  image: "../images/collection/svjmOBILEFINAL-1.jpg",
                  propulsion: "All-wheel-drive",
                  transmission:"Automatic",
            },
            {
                  id: 2,
                  name: "sian",
                  price: "1000000",
                  odo: 1000,
                  description: "Service date september 24th 2015  Huracan LP610-4 Coupe Selezione 12 Months CPO, Matte Black Wrap real paint Giallo Midas, fully electrical seats adjustment, rear view camera and parking sensors, transparent engine bonnet with carbon forged engine bay, navigation system, floor mats with leather piping and double stitching, sport exhaust system + style package, branding package, lamborghini dynamic steering, lifting system Rims Mimas forged 20 shiny black, yellow calipers. For more information, please contact us. ",
                  image: "../images/collection/svjmOBILEFINAL-1.jpg",
                  propulsion: "All-wheel-drive",
                  transmission:"Automatic",
            },
            {
                  id: 3,
                  name: "huracan",
                  price: "500000",
                  odo: 1000,
                  description: "Service date september 24th 2015  Huracan LP610-4 Coupe Selezione 12 Months CPO, Matte Black Wrap real paint Giallo Midas, fully electrical seats adjustment, rear view camera and parking sensors, transparent engine bonnet with carbon forged engine bay, navigation system, floor mats with leather piping and double stitching, sport exhaust system + style package, branding package, lamborghini dynamic steering, lifting system Rims Mimas forged 20 shiny black, yellow calipers. For more information, please contact us. ",
                  image: "../images/collection/svjmOBILEFINAL-1.jpg",
                  propulsion: "All-wheel-drive",
                  transmission:"Automatic",
            },
            {
                  id: 4,
                  name: "urus",
                  price: "100500",
                  odo: 1000,
                  description: "Service date september 24th 2015  Huracan LP610-4 Coupe Selezione 12 Months CPO, Matte Black Wrap real paint Giallo Midas, fully electrical seats adjustment, rear view camera and parking sensors, transparent engine bonnet with carbon forged engine bay, navigation system, floor mats with leather piping and double stitching, sport exhaust system + style package, branding package, lamborghini dynamic steering, lifting system Rims Mimas forged 20 shiny black, yellow calipers. For more information, please contact us. ",
                  image: "../images/collection/svjmOBILEFINAL-1.jpg",
                  propulsion: "All-wheel-drive",
                  transmission:"Automatic",
            },

      ]


      function displayProducts(products) {
            let productList = $('#product-list');
            productList.empty();
            
            let html = '';
            for (let i = 0; i < products.length; i++) {
                  let product = products[i];
                  html += `
                        <div class="product-item" id="${product.id}">
                              <div class="d-flex justify-content-center">
                                    <img src="${product.image}" alt="" class="product-img">
                              </div>
                              <div class="product-content-card">
                                          <h2 class="product-name-card">${product.name}</h2>
                                          <p class="product-price-card">
                                                ${product.price} $
                                          </p>
                                          <div class="row">
                                                      <div class="col">
                                                            <img class="product-svg" src="../images/icon/icon_odometre.svg" alt="">
                                                            <p class="product-odo">${product.odo} Km</p>
                                                      </div>
                                                      <div class="col">
                                                            <img class="product-svg" src="../images/icon/icon_propulsion.svg" alt="">
                                                            <p class="product-propulsion">${product.propulsion}</p>
                                                      </div>
                                                      <div class="col">
                                                            <img class="product-svg" src="../images/icon/icon_transmission.svg" alt="">
                                                            <p class="product-transmission">${product.transmission}</p>
                                                      </div>
                                          </div>
                                    <div class="product-btn d-grid gap-3">
                                          <button id="btnBuy" class="btn  btn-warning btn-lg" type="button">Buy</button>
                                          <button id="btnBuy" class="btn  btn-dark btn-lg" type="button">Add to wish list</button>
                                    </div>
                              </div>
                         </div>
                  `
            }
            
            productList.append(html)
      }
      $(document).on("click", ".product-item", function(e) {
            let productId = $(this).attr("id");
            localStorage.setItem('productId', productId)
            window.location.href = '../HTML/product-detail.html';
            console.log(productId)
      })
      
      $(document).ready(function () {
            let productId = localStorage.getItem('productId');
            if (productId) {
                  let product = products.find(function (p) {
                        return p.id == productId;
                  });
                  if (product) {
                        displayProductDetail(productId);
                  }
            }
      });
      function displayProductDetail(productId) {
            let product = products.find(function(prod){
                  return productId == prod.id;
            })

            let html = `
                  <div class="row product-detail-item">
                         <div class="col col-12 col-md-8 thumbnail d-flex justify-content-center">
                              <img src="${product.image}" alt="" class="product-img">
                        </div>
                        <div class="col col-12 col-md-4 product-content-detail">
                              <h2 href="" class="product-name"> ${product.name}</h2>
                              <p class="product-price">${product.price}</p>
                              <p class="product-odo-card">${product.odo}</p>
                              <div class="row">
                                     <div class="col col-12">
                                           <img class="product-svg" src="../images/icon/icon_odometre.svg" alt="">
                                           <p class="product-odo">${product.odo} Km</p>
                                     </div>
                                     <div class="col col-12">
                                           <img class="product-svg" src="../images/icon/icon_propulsion.svg" alt="">
                                           <p class="product-propulsion">${product.propulsion}</p>
                                     </div>
                                     <div class="col col-12">
                                           <img class="product-svg" src="../images/icon/icon_transmission.svg" alt="">
                                           <p class="product-transmission">${product.transmission}</p>
                                     </div>
                              </div>
                              <div class="product-btn d-grid gap-3">
                                    <button id="btnBuy" class="btn  btn-warning btn-lg" type="button">Buy</button>
                                    <button id="addCart" class="btn  btn-dark btn-lg" type="button">Add to wish list</button>
                              </div>
                        </div>
                        <div class="row desc">
                              <p class="product-desc">${product.description}</p>
                        </div>
                  </div>
            `            
            let blockDetail = $(".product-detail-block").html(html)
      }
            

      displayProducts(products)
});



