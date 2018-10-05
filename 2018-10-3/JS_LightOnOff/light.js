// var imgname = document.getElementById("light");    
// function on(){
//     if (imgname.src.includes("on.png")){
//         imgname.src ="./off.png";
//     } else {
//         imgname.src ="./on.png";
//     }
// }

$(document).ready(function(){
    $("button#buttonlight").click(function(){
        if ($("#light").attr("src") === "./on.png"){
            $("#light").attr("src","./off.png");
        }else{
            $("#light").attr("src","./on.png");
        }
    });
});
