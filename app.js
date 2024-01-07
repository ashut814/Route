// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Admin routes
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

// Shop routes
const shopRoutes = require('./routes/shop');
app.use('/shop', shopRoutes);

// 404 page
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
