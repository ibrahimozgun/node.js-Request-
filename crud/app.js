const express = require('express');

const app = express();

const YeniMesaj = (req, res, next) => {
  console.log('istek geldi');
  next();
};

const PostMesaj = (req, res, next) => {
  console.log('istek gönderildi');
  next();
};

app.use(YeniMesaj);

app.get('/hello', (req, res) => {
  res.json('GET isteği attın');
});

app.post('/hello', PostMesaj, (req, res) => {
  res.json('POST isteği attın');
});

app.put('/hello', (req, res) => {
  res.json('PUT isteği attın');
});

app.delete('/hello', (req, res) => {
  res.json('DELETE isteği attın');
});

app.listen(3001);