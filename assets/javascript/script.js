//Display current day at the top of the page

var day = new Date();
document.getElementById("currentDay").innerHTML = day;
console.log(day)

var notes=$('#to-do-box').val();

var saveTasks = function(){
    localStorage.setItem("notes", JSON.stringify(notes));

   // if (!notes) {
      //  notes =
   // }
};



    
$(document).ready(function(){
    var saveBtn = document.getElementById("save");


})



// have current time change colors of background

var hours = day.getHours();
    console.log(hours)

hours = function(){
    if()
}

//Add text to boxes

$(".to-do-box").on("click", "textarea", function() {
    var notes = $(this).text();
    console.log(text);
});

//button saves and saves in local storage



// if( x < 10 && x > 9)