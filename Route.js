const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Define the /add-product route
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="post">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" required>

      <label for="productSize">Product Size:</label>
      <input type="text" id="productSize" name="productSize" required>

      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submission
app.post('/add-product', (req, res) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;

  // Log the parsed data
  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);

  res.send('Product added successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
