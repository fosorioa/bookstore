import { TransfersRepository } from "../repositories/transfersRepository";

export class TransfersService {
    private _repo: TransfersRepository;

    constructor() {
        this._repo = new TransfersRepository();
    }

    public async add(clientid:any, transfer: any): Promise<any> {
        /* */
        return this._repo.insert(clientid, transfer);
    }
}