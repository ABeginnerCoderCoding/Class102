var room_name = ""
var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name)
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
    window.location = "kwitter_page.html";
  }
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
              //End code
        });
  });
}