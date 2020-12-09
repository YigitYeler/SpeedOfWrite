
         // Your web app's Firebase configuration
         var firebaseConfig = {
            // firebase configs...
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        
            var email = document.getElementById("email");
            var password = document.getElementById("password");
        function newPage(){
            window.location.href = "KelimeHızı.html"
            auth = firebase.auth();
        
            auth.createUserWithEmailAndPassword(email.value , password.value);
        
        }
        