$(document).ready(function () {
      let username = $("#username").val();
      let password = $("#password").val();
      let rePassword = $("#re-signup-password").val();
      let firstName = $("#fName").val();
      let lastName = $("#lName").val();
      let regexUsernameOrEmail = /^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
      let regexName = /^[a-z ,.'-]+$/i;
      let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
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
            if (username == ""|| password== "") {
                  $("input[id='username']").addClass("invalid")
                  $("input[id='password']").addClass("invalid")
                  return false;
            }
            if (!regexUsernameOrEmail.test($("#username").val())) {
                  $("input[id='username'] ~ span").html("Wrong username or email")
                  $("input[id='username']").addClass("invalid")
                  console.log("checked username")
                  if (!regexPassword.test($("#password").val())) {
                        $("input[id='password'] ~ span").html("Wrong username or email")
                        $("input[id='password']").addClass("invalid")
                        console.log("checked password")
                  }

            } else {
                  $("input[id='username'] ~ span").html("Accepted !")
                  $("input[id='username']").addClass("success")
                  $("input[id='password'] ~ span").html("Accepted !")
                  $("input[id='password']").addClass("success")
                  console.log("User accepted")
                  return true;
            }
            return false;
      }

      $("input[id='username']").change(handleLogin)
      $("#loginbtn").click(function (e) {
            e.preventDefault()
            if (handleLogin) {
                  window.location.href = "../HTML/index.html"
            }
      })
})