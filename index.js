const express = require('express')
const app = express()
const path = require('path')

//process.env.port is required to run the application on any platform eg. Heroku instead of only the local host.
const PORT = process.env.port ||3000
const SLDS_DIR = '/node_modules/@salesforce-ux/design-system/assets'   //created a constant variable 'SLDS_DIR' which holds the pathname where the salesforce-lightning-system folder exists.

//Pass the SLDS_DIR variable in express.static() method to declare the /slds path, so in the html file if we need to call the salesforce-lightning-system.css we only need to use "/slds/styles/salesforce-lightning-design-system.css"
app.use('/slds',express.static(__dirname + SLDS_DIR))

app.get('/',function(req, res){

    //res.send('Hello WOrld!)
    //Calling the index file
    res.sendFile(path.resolve('index.html'))
})
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})