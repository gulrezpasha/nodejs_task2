const express = require('express');
const app = express();
const productsCategoriesRouter = require('./routes/productsCategories');

app.use(express.json());


app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use('/', productsCategoriesRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
