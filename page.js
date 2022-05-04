//var for both top & bottom slider
var threshold = 150;
var slideWidth = 500;
var dragStart;
var dragEnd;
var SlideshowContainerTop = $("#SlideshowContainerTop");
var SlideshowContainerBottom = $("#SlideshowContainerBottom");

//click on back button
$(document).ready(function () {
  $("#PrevAct").click(function () { shiftSlideTop(1); shiftSlideBottom(1); });
});

//click on next button
$(document).ready(function () {
  $("#NextAct").click(function () { shiftSlideTop(-1); shiftSlideBottom(-1); });
});

//on hover - back button
$(document).ready(function () {
  $("#PrevAct").hover(function () {
    $("#BackButton").attr("src", "./Assets/arrow-blue-right.png");
  },
    function () {
      $("#BackButton").attr("src", "./Assets/arrow-gray-right.png");
    });
});

//on hover - next button
$(document).ready(function () {
  $("#NextAct").hover(function () {
    $("#NextButton").attr("src", "./Assets/arrow-blue-left.png");
  },
    function () {
      $("#NextButton").attr("src", "./Assets/arrow-gray-left.png");
    });
});

//mutual function
function dragPos() {
  return dragEnd - dragStart;
}

//top slider
SlideshowContainerTop.on("mousedown", function () {
  if (SlideshowContainerTop.hasClass("transition")) return;
  dragStart = pageX;
  $(this).on("mousemove", function () {
    dragEnd = pageX;
    $(this).css("transform", "translateX(" + dragPos() + "px)");
  });
  $(document).on("mouseup", function () {
    if (dragPos() > threshold) { return shiftSlideTop(1); }
    if (dragPos() < -threshold) { return shiftSlideTop(-1); }
    shiftSlideTop(0);
  });
});

function shiftSlideTop(direction) {
  if (SlideshowContainerTop.hasClass("transition")) return;
  dragEnd = dragStart;
  $(document).off("mouseup");
  SlideshowContainerTop.off("mousemove")
    .addClass("transition")
    .css("transform", "translateX(" + (direction * slideWidth) + "px)");
  setTimeout(function () {
    if (direction === 1) {
      $(".SlidesTop:first").before($(".SlidesTop:last").fadeOut(0.2).fadeIn(500));
    } else if (direction === -1) {
      $(".SlidesTop:last").after($(".SlidesTop:first").fadeOut(0.2).fadeIn(500));
    }
    SlideshowContainerTop.removeClass("transition");
    SlideshowContainerTop.css("transform", "translateX(0px)");
  }, 700);
}

//bottom slider
SlideshowContainerBottom.on("mousedown", function () {
  if (SlideshowContainerBottom.hasClass("transition")) return;
  dragStart = pageX;
  $(this).on("mousemove", function () {
    dragEnd = pageX;
    $(this).css("transform", "translateX(" + dragPos() + "px)");
  });
  $(document).on("mouseup", function () {
    if (dragPos() > threshold) { return shiftSlideBottom(1); }
    if (dragPos() < -threshold) { return shiftSlideBottom(-1); }
    shiftSlideBottom(0);
  });
});

function shiftSlideBottom(direction) {
  if (SlideshowContainerBottom.hasClass("transition")) return;
  dragEnd = dragStart;
  $(document).off("mouseup");
  SlideshowContainerBottom.off("mousemove")
    .addClass("transition")
    .css("transform", "translateX(" + (direction * slideWidth) + "px)");
  setTimeout(function () {
    if (direction === 1) {
      $(".SlidesBottom:first").before($(".SlidesBottom:last").fadeOut(0.2).fadeIn(500));
    } else if (direction === -1) {
      $(".SlidesBottom:last").after($(".SlidesBottom:first").fadeOut(0.2).fadeIn(500));
    }
    SlideshowContainerBottom.removeClass("transition");
    SlideshowContainerBottom.css("transform", "translateX(0px)");
  }, 700);
}