import Koa from 'koa';
import * as bookRouter from './routers/bookRouter';
import json from 'koa-json';

const app = new Koa();
const port:Number = 3000;

app.use(json());

bookRouter.init(app);

app.listen(port, () => console.log('Server running in port ' + port));