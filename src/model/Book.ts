
import IBook from './IBook';
import { BaseModel } from './Model';


export default class Book extends BaseModel implements IBook {

    private _author: string;
    private _title: string;
    private _publisher: string;
    private _age: number;

    constructor(dto: IBook) {
        super();
        this._author = dto.author
        this._title = dto.title
        this._publisher = dto.publisher
        this._age = dto.age
    }

    get author(){
        return this._author;
    }

    set author(value: string){
        this._author = value;
    }

    get title(){
        return this._title;
    }

    set title(value: string){

        this._title = value;
    }

    get publisher(){
        return this._publisher;
    }

    set publisher(value: string){
        this._publisher = value;
    }

    get age() {

        return this._age;
    }

    set age(value: number){
        this._age = value;
    }

}