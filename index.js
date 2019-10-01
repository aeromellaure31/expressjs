const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        title: 'Hello World',
        date: 'Today'
    });
})

app.post('/user', (req, res) => {
    res.json({
        username: 'mhemhine7',
        email: 'mhemhine7@gmail.com',
        password: null
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))