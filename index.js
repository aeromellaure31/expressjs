const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
var mysql = require('mysql')
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

app.get('/db/retrieve/:Username', (req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mine'
    })

    connection.connect()

    connection.query(`SELECT * FROM sample where Username='${req.params.Username}'`, function (err, rows, fields) {
        if (err) throw err

        res.json({
            data: rows,
            params: req.params,
            Username: req.params.Username
        })
    })
    connection.end()
})

app.get('/db/create/:Username/:Email/:Password', (req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mine'
    })

    connection.connect()

    connection.query(`INSERT INTO sample(id, Username, Email, Password) VALUES ('3', '${req.params.Username}', '${req.params.Email}','${req.params.Password}')`, function (err, rows, fields) {
        if (err) throw err

        res.json({
            data: rows,
            params: req.params,
            Username: req.params.Username
        })
    })
    connection.end()
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))