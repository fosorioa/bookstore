
const Openpay = require('openpay');

const merchantId: string = 'mrh3ikwsz2825uvl36ne';
const privateKey: string = 'sk_f440934aed7d4c4ba6c8215a145fc829';

export function create() { return new Openpay(merchantId, privateKey); };
