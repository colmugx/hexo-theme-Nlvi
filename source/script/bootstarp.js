$(document).ready(function(){
  document.body.addEventListener('touchstart', function () {});
  var app = new Nlvi(nlviconfig);
  app.showToc();
  app.back2top();
  app.switchToc();
  app.titleStatus();
  app.init();
  $(document).ready(function() {
    $('.container').show();
  });
});
