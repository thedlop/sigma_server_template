import express, { json } from 'express';
import { encodeHex, encodeNum } from './serializer';
import {Serializer} from '@coinbarn/ergo-ts/dist/serializer';

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;

// Add your sigma code here

// Example: encoding data for registers for minting image NFTs
app.post('/encode', async (req, res) => {
    // req.query.royalty
    // req.query.address_ergo_tree
    // req.query.sha
    // req.query.link

    const royalty = req.body.royalty || 0 
    const address_ergo_tree = req.body.address_ergo_tree || ''
    const sha = req.body.sha || ''
    const link = req.body.link || ''

    let encoded_values = {}

    encoded_values.royalty = await encodeNum(royalty, true)
    encoded_values.address_ergo_tree = await encodeHex(address_ergo_tree);
    encoded_values.sha = await encodeHex(sha);
    encoded_values.link = await encodeHex(Serializer.stringToHex(link));
    res.json(encoded_values)
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
