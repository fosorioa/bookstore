import { ClientsRepository } from "../repositories/clientsRepository";

export class ClientsService {
    private _repo: ClientsRepository;

    constructor() {
        this._repo = new ClientsRepository();
    }

    public async getAll(): Promise<any> {
        /*
        */
        return this._repo.getAll();
    }

    public async add(client:any): Promise<any> {
        /*
        */
        return this._repo.insert(client);
    }
}