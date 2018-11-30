var tapped = false;
function makeCall() {
  document.getElementById("gallery").style.display = "none";
  document.getElementById("display").style.opacity = 0.5;
  document.getElementById("overlay").style.display = "block";
}

function cancelCall() {
  document.getElementById("gallery").style.display = "block";
  document.getElementById("display").style.opacity = 1;
  document.getElementById("overlay").style.display = "none";
}

function showCTA() {
  if(tapped) {
    $("#cta_buttons").hide()
    $(".multiple_replies").hide()
  }
  else {
    $(".caption").slideDown()
    $("#cta_buttons").show()
  }
  tapped = !tapped;
}

function writeReply() {
  $("#cta_buttons").hide()
  $(".reply").show()
}

function hideReply() {
  $("#cta_buttons").show()
  $(".reply").hide()
}

function sendReply() {
  $("#cta_buttons").show()
  $(".multiple_replies").show()
  $(".reply").hide()
}

function switchTabs(element) {
  if (element.value == "first"){
    $("#first").addClass("button-active");
    $("#second").removeClass("button-active");
    $("#photogallery").css('opacity', '0.6');
  }
  else {
    $("#second").addClass("button-active");
    $("#first").removeClass("button-active");
    $("#photogallery").css('opacity', '1');
  }
}

var checks = {
  girl: false,
  group: false,
}

function addCheck(element, str) {
  if( str == 'girl'){
    if (checks.girl) {
      $("#girl").attr('src', 'static/img/gal2.png')
    }
    else {
      $("#girl").attr('src', 'static/img/checked_girl.png')
    }
    checks.girl = !checks.girl
  }
  else {
    if (checks.group) {
      $("#group").attr('src', 'static/img/gal3.png')
    }
    else {
      $("#group").attr('src', 'static/img/checked_oldies.png')
    }
    checks.group = !checks.group
  }

  if(checks.girl || checks.group){
    $(".edit_buttons").show();
  }
  else {
    $(".edit_buttons").hide();
  }
}
