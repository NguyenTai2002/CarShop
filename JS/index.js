$(document).ready(function () {
      let regexEmail = /^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
      let regexName = /^[a-z ,.'-]+$/i;
      let regexUserName = /^[A-Za-z][A-Za-z0-9_]{4,}$/;
      let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/;
      
      let users = JSON.parse(localStorage.getItem("users")) || [];
      function userExists(username, email) {
            let users = JSON.parse(localStorage.getItem("users"));
            if (!users) {
                  return false;
            }
            for (let i = 0; i < users.length; i++) {
                  if (users[i].username === username || users[i].email === email) {
                        return true;
                  }
            }
            return false;
      }
      $("#signup").hide(350);
      $("#create-new").click(function () {
            $("#signup").toggle(350);
            $("#login").toggle(350);
      });

      $("#log-in").click(function () {
            $("#signup").toggle(350);
            $("#login").toggle(350);
      });

      $("#username").focus(function () {
            $("input[type=text]").attr("placeholder", "Username")
            $("#username").blur(function () {
                  $("input[type=text]").attr("placeholder", "")
            })
      });

      function handleLogin() {
            let username = $("#username").val();
            let password = $("#password").val();

            if (username == "" || password == "") {
                  $("input[id='username']").addClass("invalid");
                  $("input[id='password']").addClass("invalid");
                  return false;
            }
            const user = users.find(function(user){
                  return user.username == username && user.password == password;
            })
            if(user){
                  alert("Login successful")
                  return true;
            }
            // return true
      }

      function handleSignup(){
            let firstName =$("input[id='fName']").val();
            let lastName =$("input[id='lName']").val();
            let email =$("input[id='signup-email']").val();
            let username =$("input[id='signup-username']").val();
            let password =$("input[id='signup-password']").val();
            let cf_password = $("input[id='re-signup-password']").val();
            let user = {
                  username: username,
                  password: password,
                  email: email,
                  history:[],
            }
            if (userExists(username, email)) {
                  alert("Already account")
                  return false
            }
            if(firstName !== "" && regexName.test(firstName)){
                  $("input[id='fName']").addClass("success")
            }else{
                  $("input[id='fName']").addClass("invalid")
                  return false
            }
            if (lastName !== "" && regexName.test(lastName)) {
                  $("input[id='lName']").addClass("success")
            } else {
                  $("input[id='lName']").addClass("invalid")
                  return false
            }
            if (email !== "" && regexEmail.test(email)) {
                  $("input[id='signup-email']").addClass("success")
            } else {
                  $("input[id='signup-email']").addClass("invalid")
                  return false
            }
            if (username !== "" && regexUserName.test(username)) {
                  $("input[id='signup-username']").addClass("success")
            } else {
                  $("input[id='signup-username']").addClass("invalid")
                  return false
            } if (password !== "" && regexPassword.test(password)) {
                  $("input[id='signup-password']").addClass("success")
            } else {
                  $("input[id='signup-password']").addClass("invalid")
                  return false
            } if (cf_password === password) {
                  $("input[id='re-signup-password']").addClass("success")
                  $("input[id='re-signup-password'] ~ span").text("")
            } else {
                  $("input[id='re-signup-password']").addClass("invalid")
                  $("input[id='re-signup-password']").removeClass("success")
                  $("input[id='re-signup-password'] ~ span").text("Không trùng")
                  return false
            }

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users))
            return true;
      }
      // $("#signup input").blur(handleSignup);
      // $("#login input").change(handleLogin);
      $("#loginbtn").click(function (e) {
            e.preventDefault();
            if (!handleLogin()) {
                  alert("Wrong username or password");
            }else{
                  window.location.href = '../index.html';
            }
      });
      $("#signupbtn").click(function(e) {
            e.preventDefault();
            if (!handleSignup()) {
                  alert("Please enter");
            } else {
                  window.location.href = '../HTML/login.html';
            }
      });
});

$(document).ready(function ToggleNav() {
      if ($(window).width() <= 768) {
            $("#nav-collapse").hide()
      }
      $("button[id='toggle']").click(function (e) {
            $("#nav-collapse").toggle()
            $("button[id='toggle']").blur(function () {
                  $("#nav-collapse").hide()

            })
      })
})
$(document).ready(function () {

      const products = [
            {
                  id: 1,
                  name: "AVENTADOR LP 780-4 ULTIMAE",
                  price: "799,998",
                  odo: "97",
                  image: "../images/products/product1.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "7-Speed ISR",
                  engine: "12 Cyl - 6.5 L",
                  year: "2022",
                  doors: "2D Coupe",
                  passenger: "2",
                  description: "Lamborghini Montreal proudly offers this beautiful 2022 Lamborghini Aventador Ultimae in Verde Turbine over a Nero Ade/Arancio Leon interior with 97 miles. The Aventador Ultimae is powered by a 6.5L V12 engine producing 769 hp and 531 lb-ft of torque through a 7-Speed Automatic Transmission ",

            },
            {
                  id: 2,
                  name: "LAMBORGHINI URUS ",
                  price: "269,998",
                  odo: "6,073",
                  image: "../images/products/product2.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Automatic",
                  engine: "8 Cyl - 4.0 L",
                  year: "2021",
                  doors: "4D Sport Utility",
                  passenger: "5",
                  description: "Lamborghini Montreal proudly offers this beautiful 2021 Lamborghini Urus in Blu Eleos over a Nero Ade interior with 6,073 miles. The Urus is powered by a 4.0L Twin-Turbocharged V8 engine producing 640 hp and 627 lb-ft of torque through through an 8-Speed Automatic Transmission.",
            },
            {
                  id: 3,
                  name: "LAMBORGHINI URUS ",
                  price: "224,998",
                  odo: "25,344",
                  image: "../images/products/product3.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Automatic",
                  engine: "8 Cyl - 4.0 L",
                  year: "2020",
                  doors: "4D Sport Utility",
                  passenger: "5",
                  description: "Lamborghini Montreal proudly offers this beautiful 2020 Lamborghini Urus in Nero Noctis over a Nero Ade interior with 25,344 miles. The Urus is powered by a 4.0L Twin-Turbocharged V8 engine producing 641 hp and 626 lb-ft of torque through through an 8-Speed Automatic Transmission.",
            },
            {
                  id: 4,
                  name: "AVENTADOR LP 780-4 ULTIMAE",
                  price: "969,998",
                  odo: "95",
                  image: "../images/products/product4.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Automatic",
                  engine: "12 Cyl - 6.5 L",
                  year: "2022",
                  doors: "2D Convertible",
                  passenger: "2",
                  description: "Lamborghini Montreal proudly offers this beautiful 2022 Lamborghini Aventador LP 780-4 Ultimae in Bianco Monocerus over a Nero Ade/Rosso Alala interior with 95 miles. The Aventador LP 780-4 Ultimae is powered by a 6.5L V12 engine producing 769 hp and 531 lb-ft of torque through through a 7-Speed Automatic Transmission.",
            },
            {
                  id: 5,
                  name: "HURACAN LP580- 2S",
                  price: "239,998",
                  odo: "7,403",
                  image: "../images/products/product5.webp",
                  propulsion: "RWD",
                  transmission: "Automatic",
                  engine: "10 Cyl - 5.2 L",
                  year: "2017",
                  doors: "2D Convertible",
                  passenger: "2",
                  description: "Lamborghini Montreal proudly offers this beautiful 2017 Lamborghini Huracan LP580-2S in Rosso Mars (Red) over a Nero Ade (Black) interior with 7,403 miles. This Huracan LP580-2S is powered by a 5.2L V10 engine producing 580 hp and 397 lb-ft of torque through a 7-Speed Automatic Transmission.",
            },
            {
                  id: 6,
                  name: "LAMBORGHINI URUS ",
                  price: "259,998",
                  odo: "11,714",
                  image: "../images/products/product6.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Automatic",
                  engine: "8 Cyl - 4.0 L",
                  year: "2021",
                  doors: "4D Sport Utility",
                  passenger: "5",
                  description: "Lamborghini Montreal proudly offers this beautiful 2021 Lamborghini Urus in Giallo Auge over a Nero Ade interior with 11,641 miles. The Urus is powered by a 4.0L Twin-Turbocharged V8 engine producing 641 hp and 627 lb-ft of torque through through an 8-speed Automatic Transmission.",
            },
            {
                  id: 7,
                  name: "LAMBORGHINI URUS ",
                  price: "314,998",
                  odo: "6,338",
                  image: "../images/products/product7.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Automatic",
                  engine: "8 Cyl - 4.0 L",
                  year: "2022",
                  doors: "4D Sport Utility",
                  passenger: "5",
                  description: "Lamborghini Montreal proudly offers this beautiful 2022 Lamborghini Urus in Bianco Monocerus Metallic over a Nero Ade interior with 6,338 miles. The Urus is powered by a 4.0L Twin-Turbocharged V8 engine producing 641 hp and 626 lb-ft of torque through through an 8-Speed Automatic Transmission.",
            },
            {
                  id: 8,
                  name: "LAMBORGHINI GALLARDO ",
                  price: "159,998",
                  odo: "6,569",
                  image: "../images/products/product8.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Manual",
                  engine: "10 Cyl - 5.0L",
                  year: "2008",
                  doors: "4D Sport Utility",
                  passenger: "2",
                  description: "Lamborghini Montreal proudly offers this beautiful 2008 Lamborghini Gallardo in Orange over a Black interior with 6,569 miles. This Gallardo is powered by a 5.0L V10 engine producing 512 hp and 376 lb-ft of torque through a 6-Speed Manual Transmission w/ E-Gear Shifting.",
            },
            {
                  id: 9,
                  name: "ROLLS-ROYCE CULLINAN",
                  price: "329,998",
                  odo: "18,842",
                  image: "../images/products/product9.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Automatic",
                  engine: "12 Cyl - 6.75 L",
                  year: "2020",
                  doors: "4D Sport Utility",
                  passenger: "5",
                  description: "Rolls-Royce Motor Cars North Montreal is proud to offer this beautiful 2020 Rolls-Royce Cullinan in Darkest Tungsten over a Seashell interior with 18,842 miles. The Cullinan is powered by a 6.75L Twin-Turbocharged V12 engine producing 571 hp and 627 lb-ft of torque through an 8-Speed Automatic Transmission.",
            },
            {
                  id: 10,
                  name: "ROLLS-ROYCE GHOST",
                  price: "329,998",
                  odo: "3,025",
                  image: "../images/products/product10.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Automatic",
                  engine: "12 Cyl - 6.75 L",
                  year: "2021",
                  doors: "4D Sport Utility",
                  passenger: "5",
                  description: "Rolls-Royce Motor Cars North Montreal is proud to offer this beautiful 2021 Rolls-Royce Ghost in Graphite over a Seashell interior with 3,025 miles. The Ghost is powered by a 6.75L Twin-Turbocharged V12 engine producing 563 hp and 627 lb-ft of torque through an 8-Speed Automatic Transmission.",
            },
            {
                  id: 11,
                  name: "MCLAREN 765LT SPIDER",
                  price: "639,998",
                  odo: "4,010",
                  image: "../images/products/product11.webp",
                  propulsion: "RWD",
                  transmission: "Manual",
                  engine: "8 Cyl - 8 L",
                  year: "2022",
                  doors: "2D Convertible",
                  passenger: "2",
                  description: "McLaren Montreal is proud to offer this 2022 McLaren 765LT in Elite - Ambit Blue over a Black interior with 4,002 miles. The 765LT is powered by a 4.0L Twin-Turbocharged V8 engine producing 755 hp and 590 lb-ft of torque through a 7-Speed Dual Clutch Automatic Transmission. ",
            },
            {
                  id: 12,
                  name: "PORSCHE TAYCAN TURBO S",
                  price: "157,991",
                  odo: "4,141",
                  image: "../images/products/product12.webp",
                  propulsion: "All-wheel-drive",
                  transmission: "Automatic",
                  engine: "AC Permanent Synchronous Motors",
                  year: "2022",
                  doors: "Sedan",
                  passenger: "4+1",
                  description: "Porsche North Montreal proudly offers this beautiful Certified Pre-Owned 2022 Porsche Taycan Turbo S in Carrara White Metallic over a Black interior with 4,141 miles. The Taycan Turbo S is powered by an AC Permanent Synchronous Motors engine producing 750 hp and 774 lb-ft of torque through a 2-Speed Automatic Transmission.",
            }

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
                                                            <p class="product-odo">${product.odo} Miles</p>
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
      $(document).on("click", ".product-item", function (e) {
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
            let product = products.find(function (prod) {
                  return productId == prod.id;
            })

            let html = `
                  <div class="row product-detail-item">
                         <div class="col col-12 col-md-8 thumbnail d-flex justify-content-center">
                              <img src="${product.image}" alt="" class="product-img">
                        </div>
                        <div class="col col-12 col-md-4 product-content-detail">
                              <h2 href="" class="product-name"> ${product.name}</h2>
                              <p class="product-price">${product.price} $</p>
                              <div class="row product-spec-list">
                                     <div class="col col-12 product-spec">
                                           <img class="product-svg" src="../images/icon/icon_odometre.svg" alt="">
                                           <p class="product-odo">${product.odo} Miles</p>
                                     </div>
                                     <div class="col col-12 product-spec">
                                           <img class="product-svg" src="../images/icon/icon_propulsion.svg" alt="">
                                           <p class="product-propulsion">${product.propulsion}</p>
                                     </div>
                                     <div class="col col-12 product-spec">
                                           <img class="product-svg" src="../images/icon/icon_transmission.svg" alt="">
                                           <p class="product-transmission">${product.transmission}</p>
                                     </div>
                                     <div class="col col-12 product-spec">
                                           <img class="product-svg" src="../images/icon/car-engine.png" alt="">
                                           <p class="product-engine">${product.engine}</p>
                                     </div>
                                     <div class="col col-12 product-spec">
                                           <img class="product-svg" src="../images/icon/calendar.png" alt="">
                                           <p class="product-year">${product.year}</p>
                                     </div>
                                     <div class="col col-12 product-spec">
                                           <img class="product-svg" src="../images/icon/doors.png" alt="">
                                           <p class="product-doors">${product.doors}</p>
                                     </div>
                                     <div class="col col-12 product-spec">
                                           <img class="product-svg" src="../images/icon/passenger.png" alt="">
                                           <p class="product-passenger">${product.passenger}</p>
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



