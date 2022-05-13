
const button_updateSettings = document.querySelector(".button_updateSettings");


const button_primary = document.querySelector(".button_primary");


var settings = billWithSettings();

function updateSettings() {
settings.setCallCost(Number(document.getElementById("callCost").value));
settings.setSmsCost(Number(document.getElementById("smsCost").value));
settings.setCriticalLevel(Number(document.getElementById("critical").value));
settings.setWarningLevel(Number(document.getElementById("warning").value));

   
// document.querySelector(".colour2").classList.remove("warning");
// document.querySelector(".colour2").classList.remove("critical");


    
// document.querySelector(".colour2").classList.add(settings.totalClassName())
colors()
}

function settingsBillTotal() {

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value

    }

    if (billItemType === "call") {
       settings.makeCall();
    }
    else if (billItemType === "sms") {
       settings.sendSms();
    }

    document.getElementById("callTotalSettings").innerHTML = settings.getTotalCallCost().toFixed(2);
    document.getElementById("smsTotalSettings").innerHTML = settings.getTotalSmsCost().toFixed(2);
    

    document.getElementById("totalSettings").innerHTML = settings.getTotalCost().toFixed(2);
    // document.querySelector(".colour2").classList.remove("warning");
    // document.querySelector(".colour2").classList.remove("critical");

    
    // document.querySelector(".colour2").classList.add(settings.totalClassName())
    colors()

    }

function colors(){
    document.querySelector(".colour2").classList.remove("warning");
    document.querySelector(".colour2").classList.remove("danger");

    
    document.querySelector(".colour2").classList.add(settings.totalClassName()) 
}










