var config = {
    apiKey: "AIzaSyBg2TyeHMIRpSV8SuRuJAif-h4X_1JCZwg",
    authDomain: "project-1-13e72.firebaseapp.com",
    projectId: "project-1-13e72",
    storageBucket: "project-1-13e72.appspot.com",
    messagingSenderId: "454708644857",
    appId: "1:454708644857:web:daf5dea1b9110d075bcb28",
    measurementId: "G-WKLSVZ6J4Z"
    };
    firebase.initializeApp(config);
    
    const auth = firebase.auth();
    
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
      
          document.getElementById("user_div").style.display = "block";
          document.getElementById("page_div").style.display = "none";
      
          var user = firebase.auth().currentUser;
      
          if (user != null) {
      
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
            // document.getElementById("page_div").style.display = "block";
          }
      
        } else {
          // No user is signed in.
      
          document.getElementById("user_div").style.display = "none";
          document.getElementById("page_div").style.display = "block";
      
        }
      });
    function signUp(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        // alert("Signed Up");     
    }
    
    
    
    function signIn(){
            
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
    
        
    
      
    }
    
    
    
    function signOut(){
        
        auth.signOut();
        alert("Signed Out");
        
    }
    
    
    
    auth.onAuthStateChanged(function(user){
        
        if(user){
            
            var email = user.email;
            alert("Active User " + email);
            
            //Take user to a different or home page
    
            //is signed in
            
        }else{
            
            // alert("No Active User");
            //no user is signed in
        }
        
        
        
    });

    function logout(){
      firebase.auth().signOut();}