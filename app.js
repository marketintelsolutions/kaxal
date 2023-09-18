const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { subscribers, contact } = require('./modules/sendMail');

const app = express();

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
// app.use(bodyParser.json());

app.post('/send-email', subscribers);

app.post('/contact-form', contact);


app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
