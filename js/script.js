function on(element){
    element.style.color="white";
    element.style.backgroundColor="rgb(216,30,54)";
}
function off(element){
    element.style.color="rgba(180, 18, 18, 0.863)";
    element.style.backgroundColor="";
}
function popup(){
    var status=document.getElementById("btn").innerHTML;
    if(status=="Log in"){
    document.querySelector(".popup").style.display="flex";
    $(".popup").animate({opacity:"1"},"slow");
    }
    else{
        logout();
    }
}
function contact(){
        $(".contact").animate({left:'+=100'},"slow");
        $(".contact").animate({right:'+=100'},"slow");
        $(".favorite").animate({opacity:"0"},"fast");
        $(".contact").animate({opacity:"1"},"slow");
    if(document.querySelector(".header").style.display=="block"){
    document.querySelector(".contact").style.display="block";
    document.querySelector(".Workplace").style.display="none";
    document.querySelector(".Favorite").style.display="none";
    
    }
    else{
        document.querySelector(".contact").style.display="block";
        document.querySelector(".Workplace").style.display="none";
        document.querySelector(".Favorite").style.display="none";
        
    }
}
function favorite(){
       $(".contact").animate({opacity:"0"},"fast");
       $(".favorite").animate({opacity:"1"},"slow");
        document.querySelector(".contact").style.display="none";
        document.querySelector(".Workplace").style.display="none";
        document.querySelector(".Favorite").style.display="block";
        $(".contact").animate({opacity:"1"},"slow");
        $(".Favorite").animate({left:'+=100'},"slow");
        $(".Favorite").animate({right:'+=100'},"slow");
        $(".contact").animate({opacity:"0"},"fast");
        
}
function popdown(){
    document.querySelector(".popup").style.display="none";
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    $(".popup").animate({opacity:"0"},"slow");
}
function login(name){
    document.querySelector(".user").style.display="flex";
    document.getElementById("name").innerHTML=name;
    document.getElementById("btn").innerHTML="Log out";
    popdown();
}
function logout(){
    document.querySelector(".user").style.display="none";
    document.getElementById("btn").innerHTML="Log in";
}
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 49.946096, lng: 82.619734 },
      zoom: 14,
    });
    var icon = {
        url:"https://www.iconarchive.com/download/i99782/designbolts/free-multimedia/Film.ico",
        scaledSize: new google.maps.Size(20,20),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0),
    }
    var marker = new google.maps.Marker({
        position: { lat: 49.950800, lng: 82.616480},
        map:map,
        icon:icon,
    })
    var marker2 = new google.maps.Marker({
        position: { lat: 49.949696, lng: 82.600232},
        map:map,
        icon:icon,
    })
    var marker3 = new google.maps.Marker({
        position: { lat: 49.942790, lng: 82.624817},
        map:map,
        icon:icon,
    })
    var Circle1 = new google.maps.Circle({
        strokeColor: "rgb(15, 40, 55)",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "rgb(216,30,54)",
        fillOpacity: 0.35,
        map: map,
        center: {lat: 49.950800, lng: 82.616480},
        radius:  1000
      });
      var Circle2 = new google.maps.Circle({
        strokeColor: "rgb(15, 40, 55)",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "rgb(216,30,54)",
        fillOpacity: 0.35,
        map: map,
        center: { lat: 49.949696, lng: 82.600232},
        radius:  1000
      });
      var Circle3 = new google.maps.Circle({
        strokeColor: "rgb(15, 40, 55)",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "rgb(216,30,54)",
        fillOpacity: 0.35,
        map: map,
        center: { lat: 49.942790, lng: 82.624817},
        radius:  1000
      });
  }
