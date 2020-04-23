import Book from "../model/Book";
import { BookRepository } from "../repositories/booksRepository";

export class BookService {
    private _repo: BookRepository;

    constructor() {
        this._repo = new BookRepository();
    }

    public async findById(id: Number): Promise<Book> {
        /*
        

        
        */
        return this._repo.findById(id);
    }
}