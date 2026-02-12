const express = require('express');
const app = express();


// Serve axios from node_modules
app.use('/js', express.static(__dirname + '/node_modules/axios/dist'));

const productRoutes = require('./Routes/productRoutes');

app.use(express.json());
app.use('/', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
