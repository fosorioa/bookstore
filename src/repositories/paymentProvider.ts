
const Openpay = require('openpay');

const merchantId: string = process.env['MERCHANT_ID'] || '';
const privateKey: string = process.env['OP_PRIVATE_KEY'] || '';

export function create() { return new Openpay(merchantId, privateKey); };
