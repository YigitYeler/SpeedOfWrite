var isim = prompt("Kullanıcı adınızı giriniz : ");
function sa(){
    if(event.keyCode == 13){{
        kelime();
        }
    }else if(opr==true){
    var time = setInterval(function zaman1(){
    
    
    second-=1;
    zaman.innerHTML = second;

    if(second==0){
        btn.disabled=true;
        clearInterval(time);
        
    }
    

        },1000);
    opr=false;
    }
}
function as(){word.innerHTML = words[Math.floor(Math.random()*words.length)];}
var words = ["sen","üzerine","sorun","çıkarmak","gün","saat","konuşmak","bugün","ki","diye","sonuç","göre","en","göstermek","süre","demek","başka","ancak","bulmak","an","zor","ad","nasıl","zaman","içinde","yan","bu","çünkü","işte","taraf","iş","ile","kullanılmak","el"];
var word = document.getElementById("word");
var text = document.getElementById("text");
var point = document.getElementById("point");
var p = 0;
var second = 20;
var zaman = document.getElementById("zaman");
var btn = document.getElementById("btn");
var opr = true;
var kaydetp = document.getElementById("kaydetp");

function kelime(){
    if(text.value==word.innerHTML){
        p+=10;
        point.innerHTML=p;
        text.value="";

    }else{
        p-=5;
        point.innerHTML=p;
        text.value="";
    }
     word.innerHTML = words[Math.floor(Math.random()*words.length)];

}

// Your web app's Firebase configuration
var firebaseConfig = {
    // firebase configs...
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var current_user = "";

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
    var current_user = user.uid;
        kaydetp.addEventListener("click",function(){
            firebase.database().ref().child("Kullanıcılar").child(current_user).child("Puanlar").push({
                Puan : point.innerHTML,
                NickName : isim
            })

        })
    
        
        var logout= document.getElementById("logout");

        logout.addEventListener("click",function(){ 
            firebase.auth().signOut().then(()=>{
                window.location.href = "Home.html"
            })
    })
  } })

  function showRanks(){
      window.location.href = "Ranking.html";
  }