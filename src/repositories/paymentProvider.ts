
const Openpay = require('openpay');

const merchantId: string = 'm1qp3av1ymcfufkuuoah';//process.env['MERCHANT_ID'] || '';
const privateKey: string = 'sk_ed05f1de65fa4a67a3d3056a4efa2905';//process.env['OP_PRIVATE_KEY'] || '';

export function create() { return new Openpay(merchantId, privateKey); };
