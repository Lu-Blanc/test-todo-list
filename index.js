import 'dotenv/config';
import express from 'express';
import router from './router/router.js';
import routers from './router/routers.js';

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use('/api', router);
app.use('/todo-items', routers);

app.listen(port, ()=>{
    console.log(`Server Connection On ${port}`);
})