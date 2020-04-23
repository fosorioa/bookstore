import Book from "../model/Book"
import { createDbClient } from './db'

export class BookRepository {
    private readonly COLLECTION: string = 'BookStore'
    private readonly TABLE: string = 'books'

    constructor() {
    }

    public async findById(id: Number): Promise<Book> {
        const client = createDbClient();
        let item;
        
        try {
            await client.connect();
            const db = client.db(this.COLLECTION);
            item = await db.collection(this.TABLE).findOne({ id });    
        }
        catch{
        }
        finally{
            client.close();
        }

        return this.transform(item);
    }

    /*
      public async insert(book: Book): Promise<Book> {
      }
    
      public async update(book: Book): Promise<Book> {
      }
    
      public async delete(id: number): Promise<void> {
      }
    */

    private transform(row: any): Book {
        return new Book({
            id: row.id,
            author: row.author,
            title: row.title,
            publisher: row.publisher,
            pages: row.pages
        })
    }
}
