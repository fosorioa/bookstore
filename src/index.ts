import Koa from 'koa';

import * as bookRouter from './routers/bookRouter';
import * as transferRouter from './routers/transferRouter';
import * as clientRouter from './routers/clientRouter';
import * as bankAccountRouter from './routers/bankAccountRouter';
import * as payoutRouter from './routers/payoutRouter';

import bodyParser from 'koa-bodyparser';
import json from 'koa-json';

const app = new Koa();
const port:Number = 3000;

app.use(bodyParser());

app.use(json());

bookRouter.init(app);

transferRouter.init(app);

clientRouter.init(app);

bankAccountRouter.init(app);

payoutRouter.init(app);

app.listen(port, () => console.log('Server running in port ' + port));  