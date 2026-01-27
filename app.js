const express = require('express');
const app = express();


const booksRouter = require('./routes/books');

app.use(express.json());


app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});



app.use('/', booksRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
