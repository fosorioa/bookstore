import { BankAccountsRepository } from "../repositories/bankAccountsRepository";

export class BankAccountsService {
    private _repo: BankAccountsRepository;

    constructor() {
        this._repo = new BankAccountsRepository();
    }

    public async add(clientId:any, accountDetails:any): Promise<any> {
        /*
        */
        return this._repo.insert(clientId, accountDetails);
    }
}