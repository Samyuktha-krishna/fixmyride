
// Get the login form elements
var riderLogin = document.getElementById("rider-login");
var mechanicLogin = document.getElementById("mechanic-login");

// Get the input elements
var riderEmail = document.getElementById("rider-email");
var mechanicEmail = document.getElementById("mechanic-email");
var riderPassword = document.getElementById("rider-password");
var mechanicPassword = document.getElementById("mechanic-password");

// Get the buttons
var riderButton = document.getElementById("rider-button");
var mechanicButton = document.getElementById("mechanic-button");

// Hide the login forms on page load
riderLogin.style.display = "none";
mechanicLogin.style.display = "none";

// Add click event listeners to the buttons
riderButton.addEventListener("click", function() {
    riderLogin.style.display = "block";
    mechanicLogin.style.display = "none";
});

mechanicButton.addEventListener("click", function() {
    riderLogin.style.display = "none";
    mechanicLogin.style.display = "block";
});

// Add submit event listeners to the login forms
riderLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    // Redirect to the welcome page
    window.location.href = "welcome.html";
});

mechanicLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    // Redirect to the welcome page
    window.location.href = "mechwelcome.html";
});


function redirectToPage() {
  window.location.href = "gmaps.html";
}

// GMAP API INTEGRATION

/*ShowMapButton.addEventListener("click", function() {
        problem.style.display = "block";
        problem.style.display = "none";
    });

ShowMapButton.addEventListener("submit", function(event) {
        event.preventDefault();
        // Redirect to the welcome page
        window.location.href = "gmaps.html";
    });*/
    
let map;

function initMap() {
  
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 37.7749, lng: -122.4194},
  });
}
 /* marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

/*document.getElementById('showMapButton').addEventListener('click', function() {
  document.getElementById('map').style.display = 'block';
  initMap();
});*/

/* CHATLIST SCRIPT */
// Add click event listener to each chat item
var chatItems = document.querySelectorAll('.chat-item');
chatItems.forEach(function(chatItem) {
  chatItem.addEventListener('click', function() {
    // Redirect to chat page for selected user
    // Example: window.location.href = '/chat?user=' + chatItem.querySelector('.chat-item__name').innerText;
  });
});


