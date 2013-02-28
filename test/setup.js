// Dummy the page content
(function() {
  var alpha = "abcdefghijklmnopqrstuvwxyz    ".split("")
    , len = alpha.length
    , chars = 100000
    , wordsish = ""
  ;

  while (chars--) {
    wordsish += alpha[Math.floor(Math.random() * len)];
  }

  document.getElementById("content").innerHTML = wordsish;
})();
