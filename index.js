const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const posts = require('./routes/posts')
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to Database...')
})

app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors( {
    credentials: true,
    origin: ['http://localhost:3000', 'https://lit-coast-36706.herokuapp.com/']
}));

app.use('/api/posts', posts);
app.use('/api', routes);

// ###############################################
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
}

// ###############################################


app.listen(process.env.PORT || 8000, () => { });