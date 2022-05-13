function billWithSettings() {

    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel =0;
   
    var callCostTotal = 0;
    var smsCostTotal = 0;
   
    
   
    function setCallCost(callCost) {
      theCallCost = callCost
    }
  
    function getCallCost() {
      return theCallCost
    }
  
  
    
    function setSmsCost(smsCost) {
  
      theSmsCost = smsCost;
    }
    function getSmsCost() {
      return theSmsCost;
    }
  
  function getWarningLevel(){
    return theWarningLevel;
  
  }
  function setWarningLevel(warningLevel){
  theWarningLevel = warningLevel;
  }
  
  
  function setCriticalLevel(criticalLevel){
    theCriticalLevel = criticalLevel
  }
  
  function getCriticalLevel(){
    return theCriticalLevel
  }
  
  
  function makeCall(){
  if(!hasReachedCritical()){
  callCostTotal += theCallCost;
  }
  
  }
  function sendSms(){
  if(!hasReachedCritical()){
    smsCostTotal += theSmsCost;
  }
  
  
  }
  
  function getTotalCost(){
  return callCostTotal + smsCostTotal;
  }
  
  function getTotalCallCost(){
  return callCostTotal;
  
  }
  
  function getTotalSmsCost(){
  return smsCostTotal;
  }
  
  function hasReachedCritical(){
  return getTotalCost() >= getCriticalLevel()
  }
  
  function hasReachedWarning(){
    return getTotalCost() >= getWarningLevel()
  }
  
  function totalClassName(){
    if(hasReachedCritical()){
      return "danger";
    }
  
   if(hasReachedWarning()){
     return "warning";
   }
  
  }
  
  
  
    return {
      setCallCost,
      getCallCost,
  
      setSmsCost,
      getSmsCost,
  
      setWarningLevel,
      getWarningLevel,
  
      setCriticalLevel,
      getCriticalLevel,
  
      makeCall,
      sendSms,
      getTotalCost,
      getTotalSmsCost,
      getTotalCallCost,
      totalClassName,
  
    }
  
  }
  
  
  
  