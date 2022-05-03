$(document).ready(function () {
  $("#PrevAct").on("click", function () { alert("Previous") });
});
$(document).ready(function () {
  $("#NextAct").on("click", function () { alert("Next") });
});

$(document).ready(function () {
  $("#PrevAct").hover(function () {
    $("#BackButton").attr("src", "./Assets/arrow-blue-left.png");
  },
  function() {
    $("#BackButton").attr("src", "./Assets/arrow-gray-left.png");
  })
});

$(document).ready(function () {
  $("#NextAct").hover(function () {
    $("#NextButton").attr("src", "./Assets/arrow-blue-right.png");
  },
  function() {
    $("#NextButton").attr("src", "./Assets/arrow-gray-right.png");
  })
});