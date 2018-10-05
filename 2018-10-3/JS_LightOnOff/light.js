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
        $("#light").attr("src","./on.png");
    });
});