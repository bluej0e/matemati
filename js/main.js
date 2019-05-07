jQuery(document).ready(function( $ ) {

  var dir = "./img/product/";
  var fileextension = ".jpg";
  $.ajax({
      //This will retrieve the contents of the folder if the folder is configured as 'browsable'
      url: dir,
      success: function (data) {
          $(data).find("a:contains(" + fileextension + ")").each(function () {
              var filename = this.href.replace(window.location.host, "").replace("http://", "");
              $("#productFoto").append("<img src='" + dir + filename + "'>");
          });
      }
  });
});
