function scheduler() {

  $(document).ready(function () {
    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');

    $("#currentDay").text(currentDay);

    var hours = ["9 AM.", "10 AM.", "11 AM.", "12 PM.", "1 PM.", "2 PM.", "3 PM.", "4 PM.",
      "5 PM."];
    var k=9;
  }
  
  
  for (i = 0; i < hours.length; i++) {
      
    var hourCol = $("<textarea>").text(hours[i]).attr("data-value" , i).addClass("hour");
    var inputColumn = $("<input>").attr("placeholder", "Enter Your Notes here").attr("data-value" , i).addClass("time-block");

    var hour = moment().hour();;
}

if(k!=null && k<18){
  if (k > hour) {
    inputColumn.addClass("future");
  } else if (k < hour) {
    inputColumn.addClass("past");
  } else {
    inputColumn.addClass("present");
  }
  k++;
}

inputColumn.addClass("inputVal-"+i);
var row = $("<div>").addClass("row");
var saveBtnVal = "saveBtn-"+i ;
var saveButton = $("<button>").addClass("btn btn-primary saveBtn").text("Save");
saveButton.addClass(saveBtnVal);
$(row).append(hourCol).append(inputColumn).append(saveButton);
$(".container").append(row);
}
 
