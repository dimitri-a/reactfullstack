const express = require('express')
const app = express()

app.get('/users', (req, res) => res.send([{
    id: 1,
    username: "Paul Pogba update"
}, {
    id: 2,
    username: "Beppie"
}]))

// render app on the server

app.listen(3001, () => console.log('Example app listening on port 3001!'))