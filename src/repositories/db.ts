
import { MongoClient } from 'mongodb';

const uri:string = process.env['BOOKSTORE_DB_URI'] || '';

export function createDbClient () { return new MongoClient(uri) };
