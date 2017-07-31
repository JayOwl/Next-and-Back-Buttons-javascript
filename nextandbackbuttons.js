$(".tour-section button.next").click(goToNextSection);

function goToNextSection() {
  var currentSection = $(this).parent().parent();
  var nextSection = currentSection.next('.tour-section');

  currentSection.hide();

  if (nextSection.length != 0) {
    nextSection.show();
  }
}

$(".tour-section button.back").click(goToBackSection);

function goToBackSection() {
  var currentSection2 = $(this).parent().parent();
  var backSection = currentSection2.prev('.tour-section');

  currentSection2.hide();

  if (backSection.length != 0) {
    backSection.show();

  }
}
