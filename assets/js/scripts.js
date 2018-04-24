$.widget.bridge('uibutton', $.ui.button);

//receive calls from typescript code to update the layouts
var AdminLTE = (function() {
  return {
    init: function() {
      $(function(){
        $.AdminLTE.layout.activate();
        $.AdminLTE.layout.fix();
        $.AdminLTE.layout.fixSidebar();
      });
    }
  }
})(AdminLTE||{});
$(document).on('click', '.sidebar-toggle', function () {
  if ($('body').hasClass("sidebar-collapse") && $('body').hasClass("sidebar-open")) {
     $('body').removeClass("sidebar-collapse");
  }
});

