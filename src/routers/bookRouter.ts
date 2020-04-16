const bookService from './services/bookService.ts'

exports.bookRouter = (app) => {
    app.ctx.body = bookService.getBook(app.ctx.request.param);
};