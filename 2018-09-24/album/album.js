$(document).ready(function(){
    $("button#bt_toggler").click(function(){
        $("#navbarContent").slideToggle("slow","swing", function() {
            // Animation complete.
          })
    });
});