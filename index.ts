import Koa from 'koa';
import bookRouter from './routers/bookRouter.ts'

const app = new Koa();

app.use(bookRouter);

app.listen(3000);

// TAREA: completar el codigo para responder un json book en base a un id en un browser, asi:
// http://localhost:3000/book/<:id>