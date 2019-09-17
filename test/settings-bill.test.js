const assert = require("assert")
const SettingsBill = require('../settings-bill')
describe('settingsBill', function () {
    const settingsBill = SettingsBill();

    it('should check if the sms input box is empty', function () {
        var total = settingsBill.recordedAction('');
      
        assert.deepEqual(settingsBill.actionsFor('sms').length, 0);
    });

    it('should check if the call input box is empty', function () {
        var total = settingsBill.recordedAction('');
      
        assert.deepEqual(settingsBill.actionsFor('call').length, 0);
    });

    it('should check if the warningLevel input box is empty', function () {
        var totalSetting = settingsBill.hasReachedWarningLevel('');
      
        assert.deepEqual(settingsBill.hasReachedWarningLevel('warningLevel'), false);
    });

    it('should check if the criticalLevel input box is empty', function () {
        var totalSetting = settingsBill.hasReachedCriticalLevel('');
       
        assert.deepEqual(settingsBill.hasReachedCriticalLevel('criticalLevel'), false);
    });


    it('should count the total amount of calls selected', function(){
    settingsBill.recordedAction('call');
    settingsBill.recordedAction('call');
    assert.equal(settingsBill.actionsFor('call').length, 2);
   
        
    });
    it('should count the total amount of calls selected', function(){
        settingsBill.recordedAction('call');
        settingsBill.recordedAction('call');
        settingsBill.recordedAction('sms');
        assert.equal(settingsBill.actionsFor('call').length, 4);
});   
it('should count the total amount of sms selected', function(){
    settingsBill.recordedAction('sms');
    settingsBill.recordedAction('call');
    settingsBill.recordedAction('sms');
    settingsBill.recordedAction('sms');
    assert.equal(settingsBill.actionsFor('sms').length, 4);
});

describe('use set values', function(){
it('should return the total call cost set for two calls at 4.00 each', function(){
    
    let settingsBill = SettingsBill();

    settingsBill.updateSettings({
        costOfCall: 4.00,
        costOfSms: 2.00,
        warningLevel: 20.00,
        criticalLevel: 40.00,
    });
 
   

    // settingsBill.makeCall();
    // settingsBill.makeCall();
    assert.deepEqual({
        costOfCall: 4.00,
        costOfSms: 2.00,
        warningLevel: 20.00,
        criticalLevel: 40.00,
    }, settingsBill.getUpdatedSettings())
    // assert.equal(settingsBill.getTotalCallCost(), 8.00);
    // assert.equal(settingsBill.getTotalSmsCost(), 0.00);
});

it('should return the total call cost set for calls at 6.00 each', function(){
    
    let settingsBill = SettingsBill();

    settingsBill.updateSettings({
        costOfCall: 6.00,
        costOfSms: 2.00,
        warningLevel: 20.00,
        criticalLevel: 40.00,
    });
 
   

    // settingsBill.makeCall();
    // settingsBill.makeCall();
    assert.deepEqual({
        costOfCall: 6.00,
        costOfSms: 2.00,
        warningLevel: 20.00,
        criticalLevel: 40.00,
    }, settingsBill.getUpdatedSettings())
    // assert.equal(settingsBill.getTotalCallCost(), 8.00);
    // assert.equal(settingsBill.getTotalSmsCost(), 0.00);
});
it('should return the total sms cost set for two smses at 2.00 each', function(){
    
    let settingsBill = SettingsBill();

    settingsBill.updateSettings({
        costOfCall: 4.00,
        costOfSms: 2.00,
        warningLevel: 20.00,
        criticalLevel: 40.00,
    });
 
   

    // settingsBill.makeCall();
    // settingsBill.makeCall();
    assert.deepEqual({
        costOfCall: 4.00,
        costOfSms: 2.00,
        warningLevel: 20.00,
        criticalLevel: 40.00,
    }, settingsBill.getUpdatedSettings())
    // assert.equal(settingsBill.getTotalCallCost(), 8.00);
    // assert.equal(settingsBill.getTotalSmsCost(), 0.00);
});
settingsBill.updateSettings({
    costOfCall: 10.00,
    costOfSms: 5.00,
    warningLevel: 20.00,
    criticalLevel: 40.00,
});



// settingsBill.makeCall();
// settingsBill.makeCall();
assert.deepEqual({
    costOfCall: 10.00,
    costOfSms: 5.00,
    warningLevel: 20.00,
    criticalLevel: 40.00,
}, settingsBill.getUpdatedSettings())
// assert.equal(settingsBill.getTotalCallCost(), 8.00);
// assert.equal(settingsBill.getTotalSmsCost(), 0.00);
});

});
