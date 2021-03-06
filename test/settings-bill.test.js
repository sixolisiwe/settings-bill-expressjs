const assert = require("assert")
const SettingsBill = require('../settings-bill')
describe('settingsBill', function () {


    it('should check if the sms input box is empty', function () {
        const settingsBill = SettingsBill();
        var total = settingsBill.recordedAction('');
        total = settingsBill.actionsFor('sms')
        assert.deepEqual(settingsBill.actionsFor(total).length, 0);
    });

    it('should check if the call input box is empty', function () {
        const settingsBill = SettingsBill();
        settingsBill.recordedAction('');
       
        assert.deepEqual(settingsBill.actionsFor('call').length, 0);
    });


    describe('use set values', function () {
        it('should return the total call cost set for two calls at 4.00 each', function () {
           
            let settingsBill = SettingsBill();

            settingsBill.updateSettings({
                costOfCall: 4.00,
                costOfSms: 2.00,
                warningLevel: 20.00,
                criticalLevel: 40.00,
            });



          
            assert.deepEqual({
                costOfCall: 4.00,
                costOfSms: 2.00,
                warningLevel: 20.00,
                criticalLevel: 40.00,
            }, settingsBill.getUpdatedSettings())
            
        });

        it('should return the total call cost set for calls at 6.00 each', function () {
          
            let settingsBill = SettingsBill();

            settingsBill.updateSettings({
                costOfCall: 6.00,
                costOfSms: 2.00,
                warningLevel: 20.00,
                criticalLevel: 40.00,
            });



            assert.deepEqual({
                costOfCall: 6.00,
                costOfSms: 2.00,
                warningLevel: 20.00,
                criticalLevel: 40.00,
            }, settingsBill.getUpdatedSettings())
            
        });
        it('should return the total sms cost set at 2.00', function () {
            
            const settingsBill = SettingsBill();

            settingsBill.updateSettings({
                costOfCall: 4.00,
                costOfSms: 2.00,
                warningLevel: 20.00,
                criticalLevel: 40.00,
            });



           
            assert.deepEqual({
                costOfCall: 4.00,
                costOfSms: 2.00,
                warningLevel: 20.00,
                criticalLevel: 40.00,
            }, settingsBill.getUpdatedSettings())
           
        });

        it('should return the total sms cost set at 5.00', function () {
            const settingsBill = SettingsBill();
        settingsBill.updateSettings({
            costOfCall: 10.00,
            costOfSms: 5.00,
            warningLevel: 20.00,
            criticalLevel: 40.00,
        });



       
        assert.deepEqual({
            costOfCall: 10.00,
            costOfSms: 5.00,
            warningLevel: 20.00,
            criticalLevel: 40.00,
        }, settingsBill.getUpdatedSettings())
   
    });

});
});