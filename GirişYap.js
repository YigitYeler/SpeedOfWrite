 // Your web app's Firebase configuration
 var firebaseConfig = {
    // firebase configs...
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

        firebase.auth().signInWithEmailAndPassword(email.value , password.value)
            .then(()=>{
                window.location.href = "KelimeHızı.html"
            })
                .catch((e)=>{alert(e)})
}