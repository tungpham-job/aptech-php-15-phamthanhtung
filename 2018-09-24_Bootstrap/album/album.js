// $(document).ready(function(){
//     $("button#bt_toggler").click(function(){
//         $("#navbarContent").slideToggle("slow","swing", function() {
//             // Animation complete.
//           })
//     });
// });
function showhide(){
    var x = document.getElementById("navbarContent");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
