const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const auth = require('./routes/auth');
const document = require('./routes/document');
const profile = require('./routes/profile');

app.use('/auth', auth);
app.use('/document', document);
app.use('/profile', profile);

app.listen(3000, () => {
    console.log('Server started on port 3000')
});