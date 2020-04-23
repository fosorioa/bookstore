import IBook from './IBook';
import { BaseModel } from './Model';

export default class Book extends BaseModel implements IBook {
    public id: Number;
    public author: string;
    public title: string;
    public publisher: string;
    public pages: number;

    constructor(dto: IBook) {
        super();
        this.id = dto.id;
        this.author = dto.author
        this.title = dto.title
        this.publisher = dto.publisher
        this.pages = dto.pages
    }

    get getId(){
        return this.id;
    }

    set setId(value: Number){
        this.id = value;
    }

    get getAuthor(){
        return this.author;
    }

    set setAuthor(value: string){
        this.author = value;
    }

    get getTitle(){
        return this.title;
    }

    set setTitle(value: string){
        this.title = value;
    }

    get getPublisher(){
        return this.publisher;
    }

    set setPublisher(value: string){
        this.publisher = value;
    }

    get getPages() {
        return this.pages;
    }

    set setPages(value: number){
        this.pages = value;
    }
}