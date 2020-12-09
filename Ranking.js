// Your web app's Firebase configuration
var firebaseConfig = {
    // firebase configs...
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var ranks = document.getElementById("ranks");

        function mrb(){
            firebase.database().ref("Kullanıcılar").orderByKey().on("value" , snapshot => {
                snapshot.forEach(userid => {
                    //console.log(userid.val());
                   userid.forEach(x => {
                       //console.log(x.val());
                       x.forEach(y => {
                           //console.log(y.val().NickName);
                           ranks.innerHTML += "<li>" + y.val().NickName +"  :  "+ y.val().Puan + "</li>"
                       });
                       
                   });
                });

                        
                });
            } 
        
      