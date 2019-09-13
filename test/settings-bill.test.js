const assert = require("assert")
const SettingsBill = require('../settings-bill')
describe('settingsBill', function () {
    const settingsBill = SettingsBill();

    it('should check if the sms input box is empty', function () {
        var total = settingsBill.getTotal();
        settingsBill.getTotal('smsTotal');
        assert.deepEqual(settingsBill.getTotal(total), 0);
    });

    it('should check if the call input box is empty', function () {
        var total = settingsBill.getTotal();
        settingsBill.getTotal('callTotal');
        assert.deepEqual(settingsBill.getTotal(total), 0);
    });

    it('should check if the warningLevel input box is empty', function () {
        var totalSetting = settingsBill.getWarning();
        settingsBill.getWarning('warningLevel');
        assert.deepEqual(settingsBill.getWarning(totalSetting), true);
    });

    it('should check if the criticalLevel input box is empty', function () {
        var totalSetting = settingsBill.getCritical();
        settingsBill.getCritical('criticalLevel');
        assert.deepEqual(settingsBill.getCritical(totalSetting), true);
    });


    it('should count the total amount of calls selected', function(){
    settingsBill.setCallTotal(4.00);
    settingsBill.setCallTotal(4.00);
    assert.equal(settingsBill.getCallTotal(), 8.00);
   
        
    });
    it('should count the total amount of calls selected', function(){
        settingsBill.setCallTotal(4.00);
        settingsBill.setCallTotal(4.00);
        settingsBill.setSmsTotal(2.00);
        assert.equal(settingsBill.getCallTotal(), 16.00);
});   
it('should count the total amount of sms selected', function(){
    settingsBill.setCallTotal(4.00);
    settingsBill.setCallTotal(4.00);
    settingsBill.setSmsTotal(2.00);
    settingsBill.setSmsTotal(2.00);
    assert.equal(settingsBill.getSmsTotal(), 6.00);
});

describe('use set values', function(){
it('should return the total call cost set for two calls at 4.00 each', function(){
    
    let settingsBill = SettingsBill();

    settingsBill.setCallCost(4.00);
    settingsBill.setSmsCost(2.00);
   

    settingsBill.makeCall();
    settingsBill.makeCall();
    assert.equal(settingsBill.getTotalCost(), 8.00);
    assert.equal(settingsBill.getTotalCallCost(), 8.00);
    assert.equal(settingsBill.getTotalSmsCost(), 0.00);
});

it('should return the total call cost set for two calls at 6.00 each', function(){
    
    let settingsBill = SettingsBill();

    settingsBill.setCallCost(6.00);
    settingsBill.setSmsCost(2.00);
   

    settingsBill.makeCall();
    settingsBill.makeCall();
    assert.equal(settingsBill.getTotalCost(), 12.00);
    assert.equal(settingsBill.getTotalCallCost(), 12.00);
    assert.equal(settingsBill.getTotalSmsCost(), 0.00);
});

it('should return the total sms cost set for two smses at 2.00 each', function(){
    
    let settingsBill = SettingsBill();

    settingsBill.setCallCost(6.00);
    settingsBill.setSmsCost(2.00);
   

    settingsBill.makeSms();
    settingsBill.makeSms();
    assert.equal(settingsBill.getTotalCost(), 4.00);
    assert.equal(settingsBill.getTotalCallCost(), 0.00);
    assert.equal(settingsBill.getTotalSmsCost(), 4.00);
});
it('should return the total sms cost set for two smses at 5.00 each', function(){
    
    let settingsBill = SettingsBill();

    settingsBill.setCallCost(6.00);
    settingsBill.setSmsCost(5.00);
   

    settingsBill.makeSms();
    settingsBill.makeSms();
    assert.equal(settingsBill.getTotalCost(), 10.00);
    assert.equal(settingsBill.getTotalCallCost(), 0.00);
    assert.equal(settingsBill.getTotalSmsCost(), 10.00);
});
it('should return the total sms and call cost set for two smses at 5.00 each and one call at 6.00 each', function(){
    
    let settingsBill = SettingsBill();

    settingsBill.setCallCost(6.00);
    settingsBill.setSmsCost(5.00);
   

    settingsBill.makeSms();
    settingsBill.makeSms();
    settingsBill.makeCall();
    assert.equal(settingsBill.getTotalCost(), 16.00);
    assert.equal(settingsBill.getTotalCallCost(), 6.00);
    assert.equal(settingsBill.getTotalSmsCost(), 10.00);
});
});
});