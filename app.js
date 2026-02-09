const express = require('express');
const app = express();

const productRoutes = require('./Routes/productRoutes');

app.use(express.json());
app.use('/', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
