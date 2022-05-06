// //get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio")
// //get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn")

// //get a reference to the call
const callTotalTwo = document.querySelector(".callTotalTwo")

// //get a reference to the sms
const smsTotalTwo = document.querySelector(".smsTotalTwo")
// //create a variable that will keep track of the total bill
const totalTwo = document.querySelector(".totalTwo")


//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen



var callTotal4 = 0;
var smsTotal4 = 0;

function textBillTotalOne() {

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings1']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value

    }

    if (billItemType === "call") {
        callTotal4 += 2.75;
    }
    else if (billItemType === "sms") {
        smsTotal4 += 0.75;
    }


    document.getElementById("callTotal4").innerHTML = callTotal4.toFixed(2);
    document.getElementById("smsTotal4").innerHTML = smsTotal4.toFixed(2);
    var totalCost4 = callTotal4 + smsTotal4;

    document.getElementById("total4").innerHTML = totalCost4.toFixed(2);

    if (totalCost4 >= 50) {

        document.querySelector(".colour1").classList.add("danger");
    }
    else if (totalCost4 >= 30 && totalCost4 < 50) {
        document.querySelector(".colour1").classList.add("warning");
    }

}

