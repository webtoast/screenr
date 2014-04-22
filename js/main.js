
function showDimensions() {
  $(".output").text($.viewportW() + " x " + $.viewportH());
  
}

$(function() {
  $.extend(verge);

  showDimensions();

  $(window).resize( $.debounce( 250, function(){
    showDimensions();
  }));


});