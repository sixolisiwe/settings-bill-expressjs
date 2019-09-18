const express = require('express'); //importing express
const bodyParser = require('body-parser') //import bp
const exphbs = require('express-handlebars'); //reference express-hbs after download

const SettingsBill = require('./settings-bill')
var moment = require('moment');
moment().format()

const app = express(); //instance of app



const settingsBill = SettingsBill()

const hbs = exphbs.create({
    defaultLayout: 'main'  ,


})

app.engine('handlebars', hbs.engine); //config as line 8

app.set('view engine', 'handlebars'); //configure handlebars

app.use(bodyParser.urlencoded({
    extended: false
})) 

app.use(bodyParser.json()) //config as per line13

app.use(express.static('public'))

app.get('/', function (req, res) {
    console.log(settingsBill.colorIndicator());
    
    res.render('index', {
        setting: settingsBill.getUpdatedSettings(),
        total: settingsBill.totals(),
        changeColor: settingsBill.colorIndicator(),
        
        

    }) 

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

    res.redirect('/')

})
app.post('/action', function (req, res) { // rote 3
    settingsBill.recordedAction(req.body.actionType)
 
    res.redirect('/')

})

app.get('/actions', function (req, res) { // route 4
    let time = settingsBill.actions()
for (const iterator of time) {
    iterator.ago= moment(iterator.timestamp).fromNow()
}
    res.render('actions', {
        action: time
    })
})

app.get('/actions/:type', function (req, res) { // route 5
    const actionType= req.params.type;
    let time = settingsBill.actionsFor(actionType)
    for (const iterator of time) {
        iterator.ago= moment(iterator.timestamp).fromNow()
    }
    res.render('actions', {
        action: time
    })
})


const PORT = process.env.PORT || 3011; //config port to use default and define new port
app.listen(PORT, function () {
console.log("App listening at port:", PORT);

})