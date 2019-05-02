$(document).ready(function(){
  var experimentID = $('div[data-test-section="experiment-id"]')[0].textContent;
  var variations = $('div[data-test-section="variations-card"]').find('div[data-test-section]');
  variations.each(function() {
    var string = this.getAttribute('data-test-section');
    var arr = string.split('-');
    arr = arr.pop();
    console.log('('+experimentID+'):('+arr+')');
  })
});


Control: (14615650330):(14613280870)
Challenger A: (14615650330):(14611390802)
Challenger B: (14422680479):(14447380026)
