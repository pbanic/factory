$(document).ready(() => {
  $("#prev-act").on("click", () => {
    moveSlideTop(-1);
    moveSlideBottom(-1);
  }); //click on back button

  $("#next-act").on("click", () => {
    moveSlideTop(1);
    moveSlideBottom(1);
  }); //click on next button
});

moveSlideTop = direction => {
  if (direction === 1) {
    //next
    $(".slides-top:first").before($(".slides-top:last"));
  } else if (direction === -1) {
    //back
    $(".slides-top:last").after($(".slides-top:first").fadeOut(0.5).fadeIn(800));
  }
}; //move slide top 


moveSlideBottom = direction => {
  if (direction === 1) {
    //next
    $(".slides-bottom:first").before($(".slides-bottom:last"));
  } else if (direction === -1) {
    //back
    $(".slides-bottom:last").after($(".slides-bottom:first").fadeOut(0.5).fadeIn(800));
  }
}; //move slide bottom
