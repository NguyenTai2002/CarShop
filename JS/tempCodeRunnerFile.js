      function handleLogin() {
            if ($("#username").val() == "" || $("#password").val() == "") {
                  $("input[id='username']").addClass("invalid")
                  $("input[id='password']").addClass("invalid")
            }else{
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
                  return true;

            } else {
                  $("input[id='username'] ~ span").html("Accepted !")
                  $("input[id='username']").addClass("success")
                  $("input[id='password'] ~ span").html("Accepted !")
                  $("input[id='password']").addClass("success")
                  console.log("User accepted")
                  return true;
            }

      }