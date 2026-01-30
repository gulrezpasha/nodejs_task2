const express = require('express');
const app = express();

const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');
const cartRoutes = require('./Routes/cartRoutes');

app.use(express.json());
app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});