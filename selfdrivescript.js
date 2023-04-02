// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
        apiKey: "AIzaSyAyxYLih89qiHw4Ay0ywsN_QjcPuqGrk4w",
        authDomain: "fixmyride-41545.firebaseapp.com",
        databaseURL: "https://fixmyride-41545-default-rtdb.firebaseio.com",
        projectId: "fixmyride-41545",
        storageBucket: "fixmyride-41545.appspot.com",
        messagingSenderId: "800333815884",
        appId: "1:800333815884:web:b478a3962a5485895094e9",
        measurementId: "G-B1HKE0NSFC"
        };
      
      firebase.initializeApp(firebaseConfig);
      
      // Reference messages collection
      var messagesRef = firebase.database().ref('messages');
      
      // Listen for form submit
      document.getElementById('contactForm').addEventListener('submit', submitForm);
      
      // Submit form
      function submitForm(e){
        e.preventDefault();
      
        // Get values
        var name = getInputVal('name');
        var company = getInputVal('d1');
        var email = getInputVal('d2');
        
      
        // Save message
        saveMessage(name, Current_loc, destination);
      
        // Show alert
        document.querySelector('.alert').style.display = 'block';
      
        // Hide alert after 3 seconds
        setTimeout(function(){
          document.querySelector('.alert').style.display = 'none';
        },3000);
      
        // Clear form
        document.getElementById('contactForm').reset();
      }
      
      // Function to get get form values
      function getInputVal(id){
        return document.getElementById(id).value;
      }
      
      // Save message to firebase
      function saveMessage(name, ){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: name,
          from:from,
          to:to,
        });
      }