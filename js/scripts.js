$(document).ready(function(){
  $("#userForm").submit(function(event) {

    var numberInput = parseInt($("#userNumber").val());
    console.log("Number inputted: ",numberInput);
    var numberArray = [];

    for (index = 2; index <= numberInput ; index += 1) {
      numberArray.push(index);
    }
    console.log("Number Array: ",numberArray);

    var numberArray2 = numberArray.map(function(num){
      if (num % num === 0){
        return "if";
      }
      else {
        return "else";
      }
    })
    console.log("Number Array2: ",numberArray2);




    // if (isNaN(numberInput)){
    //   $("#showResults").text("oh no!");
    // }
    // else {
    //   for (index = 2; index <= numberInput ; index += 1) {
    //     if ( (index % numberInput) === 0 ) {
    //       // userArray.push(index); //UNREQUIRED LINE...
    //     }
    //     else if (index){
    //       $("#results").append("<li>"+index+"</li>");
    //       console.log(index);
    //     }
    //     else {
    //       // $("#results").append("<li>"+"oh no!"+"</li>");
    //     }
    //   }
    // };






    event.preventDefault();
  });
});
