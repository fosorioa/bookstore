import * as PaymentProvider from './paymentProvider';

export class TransfersRepository {
    private openPay = PaymentProvider.create();

    constructor() {
    }

    public async insert(clientid:any, transfer: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.openPay.customers.transfers.create(clientid, transfer, function (error: any, body: any, response: any) {
                if (response.statusCode == 200 || response.statusCode == 201) {
                    resolve(body);
                }
                else {
                    console.error(error);
                    reject(error);
                }
            });
        });
    }
    /*
      public async update(book: Book): Promise<Book> {
      }
    
      public async delete(id: number): Promise<void> {
      }
    */
}
