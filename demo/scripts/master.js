burgrs = document.querySelectorAll('.burgr');
burgrs.forEach(function(burgr) {
  burgr.onclick = function() {
    burgr.classList.toggle('toggled');
  };
});
