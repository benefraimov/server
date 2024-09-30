const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.json({ name: "Hello world" });
})

app.use('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3005, () => {
    console.log('Server is running on port 3005');
})