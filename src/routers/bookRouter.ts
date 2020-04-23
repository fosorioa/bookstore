import * as Koa from 'koa';
import Router from 'koa-router';
import { BookService } from '../services/bookService';

export function init(app: Koa) {
    const router = new Router({ prefix: '/api/book' });
    const service = new BookService();

    router.get('/:id', async (ctx: Koa.Context) => {
        ctx.body = await service.findById(Number.parseInt(ctx.params.id));
    });

    app.use(router.routes());
};