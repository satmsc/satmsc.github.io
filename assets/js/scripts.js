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
$(function() 
{ $(document).on('click','.sidebar-menu li a[ui-sref]',function(e) 
{ 
  debugger;
  $($.AdminLTE.options.sidebarToggleSelector).click(); }); });

