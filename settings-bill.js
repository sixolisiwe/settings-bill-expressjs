
module.exports = function SettingsBill() {
 
    var costOfSms;
    var costOfCall;

    var criticalLevel;
    var warningLevel;

    var listOfACtions = []

    function updateSettings(settingsList) {


        costOfSms = Number(settingsList.costOfSms);
        costOfCall = Number(settingsList.costOfCall);
        warningLevel = settingsList.warningLevel;
        criticalLevel = settingsList.criticalLevel;
    }

    function getUpdatedSettings() {
        return {
            costOfSms,
            costOfCall,
            warningLevel,
            criticalLevel
        }
    }


    function recordedAction(action) {
        
        if(stopBtn()){ 
            return "danger";
        }
        let cost = 0;
        if(!stopBtn()){
        if (action === 'sms') {
            cost = costOfSms;
        } else if (action === 'call') {
            cost = costOfCall;
        }
    }
    if(action !== undefined){
        listOfACtions.push({
            type: action,
            cost,
            timestamp: new Date
            
        });
        
    }
}

    function actions() {
        return listOfACtions;
    }

    function actionsFor(type) {
        const filteredActions = [];

        // loop through all the entries in the action list 
        for (let i = 0; i < listOfACtions.length; i++) {
            const action = listOfACtions[i];
            // check this is the type we are doing the total for 
            if (action.type === type) {
                // add the action to the list
                filteredActions.push(action);
            }
        }

        return filteredActions;

        // return actionList.filter((action) => action.type === type);
    }

    function getTotal(type) {
        let total = 0;

        // loop through all the entries in the action list 
        for (let i = 0; i < listOfACtions.length; i++) {
            const action = listOfACtions[i];

            // check this is the type we are doing the total for 
            if (action.type === type) {
                // if it is add the total to the list
                total += action.cost;

            }
        }
        return total;

    }

    function grandTotal() {
        return getTotal('sms') + getTotal('call');
    }



    function totals() {

        let smsTotal = getTotal('sms').toFixed(2)
        let callTotal = getTotal('call').toFixed(2)
        return {
            smsTotal,
            callTotal,
            grandTotal: grandTotal().toFixed(2)

        }
    }

    function colorIndicator() {

        if (grandTotal() >= warningLevel && grandTotal() < criticalLevel) {
            return "warning";
        }
        if (grandTotal() >= criticalLevel) {
            return "danger";
        }


    }

    function stopBtn() {
        return grandTotal() >= criticalLevel;

    }


    return {
        updateSettings,
        getUpdatedSettings,
        recordedAction,
        actions,
        actionsFor,
        totals,
        colorIndicator,
        stopBtn
    }
}