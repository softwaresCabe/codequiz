

$("#goback").on("click", function(){
    window.location.replace("index.html");
    console.log("here");

});

$("#reset").on("click", function(){
    console.log("here");
    localStorage.clear();
});


//var retrievedData = localStorage.getItem("myuserInitials");

// var myuserInitials2 = JSON.parse(retrievedData);

// for(var i = 0; i < myuserInitials2.length; i++ ){
//     console.log(myuserInitials2[i]);
//     $("#scorelist").append('<div>'+ myuserInitials2[i] + '<div/>');

// }
