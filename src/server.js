import express from 'express';
import 'dotenv/config';
import connection from './config/connectDB';

const app = express();
const port = process.env.PORT;
// truy cập vào file .env => tên muốn truy cập
// để chạy process.env => phải chạy thư viện dotenv

app.get('/', (req, res) => {
  res.send('Hello world from node.js');
});

// connection();

app.listen(port, () => {
  console.log('Node.js server is running on the port: ' + port);
});
