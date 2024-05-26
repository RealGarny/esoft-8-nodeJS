import express = require('express');
import router from './routes';

const app = express();
const port = 4040;
const bodyParser = express;

app.use(bodyParser.json())
app.use(router)

app.listen(port, ()=> {
    console.log(`Server started on port ${port} test`)
})