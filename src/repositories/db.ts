
import { MongoClient } from 'mongodb';

const uri = process.env['BOOKSTORE_DB_URI'] || '';

export function createDbClient () { return new MongoClient(uri) };
