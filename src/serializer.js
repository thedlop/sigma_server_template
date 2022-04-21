import {Serializer} from '@coinbarn/ergo-ts/dist/serializer';
import * as ergolib from 'ergo-lib-wasm-nodejs';

// Completely copied from https://github.com/anon-real/ErgoAuctionHouse/blob/master/src/auction/serializer.js
// Thank you!

export async function encodeHex(reg) {
    return (await ergolib).Constant.from_byte_array(Buffer.from(reg, 'hex')).encode_to_base16()
}

export async function encodeNum(n, isInt = false) {
    if (isInt) return (await ergolib).Constant.from_i32(n).encode_to_base16()
    else return (await ergolib).Constant.from_i64((await ergolib).I64.from_str(n)).encode_to_base16()
}
