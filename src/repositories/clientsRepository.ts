import * as PaymentProvider from './paymentProvider';

export class ClientsRepository {
    private openPay = PaymentProvider.create();

    constructor() {
    }

    public async getAll(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.openPay.customers.list({}, function (error: any, body: any, response: any) {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                resolve(body);
            });
        });
    }

    
      public async insert(client: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.openPay.customers.create(client, function (error: any, body: any, response: any) {

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
