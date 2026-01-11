import process = require('node:process');
import app from './app';
import { connectDB} from './config/db';
import nodeHttp2 = require('node:http2');
inport { env } from './config/env';

connectDB();

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});