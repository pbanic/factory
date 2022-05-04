$(document).ready(function () {
  $("#PrevAct").click(function () {
      moveSlideTop(-1);
    moveSlideBottom(-1);
  });
}); //click on back button

$(document).ready(function () {
  $("#NextAct").click(function () {
    moveSlideTop(1);
    moveSlideBottom(1);
  });
}); //click on next button

$(document).ready(function () {
  $("#PrevAct").hover(function () {
    $("#BackButton").attr("src", "./Assets/arrow-blue-right.png");
  }, function () {
    $("#BackButton").attr("src", "./Assets/arrow-gray-right.png");
  });
}); //onHover/offHover - back button

$(document).ready(function () {
  $("#NextAct").hover(function () {
    $("#NextButton").attr("src", "./Assets/arrow-blue-left.png");
  }, function () {
    $("#NextButton").attr("src", "./Assets/arrow-gray-left.png");
  });
}); //onHover/offHover - next button

function moveSlideTop(direction) {
  setTimeout(function () {
    if (direction === 1) { //next
      $(".SlidesTop:first").before($(".SlidesTop:last").fadeOut(0.2).fadeIn(500));
    } else if (direction === -1) { //back
      $(".SlidesTop:last").after($(".SlidesTop:first").fadeOut(0.2).fadeIn(500));
    }
  }, 300);
} //move slide top 

function moveSlideBottom(direction) {
  setTimeout(function () {
    if (direction === 1) { //next
      $(".SlidesBottom:first").before($(".SlidesBottom:last").fadeOut(0.2).fadeIn(500));
    } else if (direction === -1) { //back
      $(".SlidesBottom:last").after($(".SlidesBottom:first").fadeOut(0.2).fadeIn(500));
    }
  }, 300);
} //move slide bottom 