const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.get('/here', function (req, res) {
  console.log("hit");
  res.json({"key": "hello"});
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
