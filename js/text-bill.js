//Get bill item type entererd 'call' or 'sms'
var billTypeText = document.querySelector(".billTypeText");

//Button to press to add item to bill
var addToBillBtn =  document.querySelector(".addToBillBtn");

//Where the call total should be displayed
var callTotalOne = document.querySelector(".callTotalOne");

//Where the sms total should be displayed
var smsTotalOne = document.querySelector(".smsTotalOne");


var callTotalOne=0;
var smsTotalOne=0;


function textBillTotals(){

 // get the value entered in the billType textfield
 var billTypeEntered = document.getElementById("billTypeText").value.toLowerCase() ;
 // update the correct total
 if (billTypeEntered === "call"){
     callTotalOne += 2.75;
 }
 else if (billTypeEntered === "sms"){
     smsTotalOne += 0.75;
 }
 
 //update the totals that is displayed on the screen.

 document.getElementById("callTotalOne").innerHTML = callTotalOne.toFixed(2);
 document.getElementById("smsTotalOne").innerHTML = smsTotalOne.toFixed(2);
 var totalCost = callTotalOne + smsTotalOne;
 document.getElementById("totalOne").innerHTML = totalCost.toFixed(2);


  
// //   //color the total based on the criteria
   if (totalCost >= 50){
      // adding the danger class will make the text red
      document.querySelector(".test").classList.add("danger");
   }
   else if (totalCost >= 30 && totalCost < 50){
    document.querySelector(".test").classList.add("warning");
   
 }

    }
   




    
    

