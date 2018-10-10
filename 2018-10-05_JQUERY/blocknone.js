// var imgname = document.getElementById("light");    
// function on(){
//     if (imgname.src.includes("on.png")){
//         imgname.src ="./off.png";
//     } else {
//         imgname.src ="./on.png";
//     }
// }

$(document).ready(function(){
    // $("button#bt_showhide").click(function(){
    //     var x = document.getElementById("panel");
    //     if (x.style.display === "none") {
    //         x.style.display = "block";
    //     } else {
    //         x.style.display = "none";
    //     }
    // });

    // $("button#bt_showhide").click(function(){
    //     if(!$('#panel').is(':visible')){
    //         $("#panel").show()
    //     }else{
    //         $("#panel").hide()
    //     }
    // });

    $("button#bt_showhide").click(function(){
        $("#panel").slideToggle("slow","swing", function() {
            // Animation complete.
          })
    });
});