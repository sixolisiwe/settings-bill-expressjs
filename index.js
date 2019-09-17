const express = require('express'); //importing express
const bodyParser = require('body-parser') //import bp
const exphbs = require('express-handlebars'); //reference express-hbs after download

const SettingsBill = require('./settings-bill')
const app = express(); //instance of app

const settingsBill = SettingsBill()

const hbs = exphbs.create({
    defaultLayout: 'main'  ,


    // helpers: {
    //     changeColor: function(){
        
    //     return color;
    //     }
    // }
})

app.engine('handlebars', hbs.engine); //config as line 8

app.set('view engine', 'handlebars'); //configure handlebars
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
})) // config body-parser

// parse application/json
app.use(bodyParser.json()) //config as per line13

app.use(express.static('public'))

app.get('/', function (req, res) {
    console.log(settingsBill.colorIndicator());
    
    res.render('index', {
        setting: settingsBill.getUpdatedSettings(),
        total: settingsBill.totals(),
        changeColor: settingsBill.colorIndicator(),
        
        

    }) //ref to hbshtml and pass object with value to it

})


app.post('/settings', function (req, res) { //route 2

    const {
        costOfCall,
        costOfSms,
        warningLevel,
        criticalLevel
    } = req.body
 

    settingsBill.updateSettings({
        costOfCall,
        costOfSms,
        warningLevel,
        criticalLevel
    })
    // console.log(settingsBill.getUpdatedSettings());

    res.redirect('/')

})
app.post('/action', function (req, res) { // rote 3
    settingsBill.recordedAction(req.body.actionType)
    // console.log(req.body.actionType);

    res.redirect('/')

})

app.get('/actions', function (req, res) { // route 4
    res.render('actions', {
        action: settingsBill.actions()
    })
})

app.get('/actions/:type', function (req, res) { // route 5
    const actionType= req.params.type;
    res.render('actions', {
        action: settingsBill.actionsFor(actionType)
    })
})


const PORT = process.env.PORT || 3011; //config port to use default and define new port
app.listen(PORT, function () {
console.log("App listening at port:", PORT);

})