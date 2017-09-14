import express from 'express';
import config from './config';
import { data } from './testData.json';
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
  res.render('index',{answer:42});
});

app.get('/data', (req, res) => {
  res.send(data);
});
app.listen(config.port,function listenHandler() {
  console.info(`Running on ${config.port}`);
});