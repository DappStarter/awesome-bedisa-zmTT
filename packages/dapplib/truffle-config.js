require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note maze prosper harvest only equal giant'; 
let testAccounts = [
"0x51f9a0631cae6102c175e516d86303f7f018f4a0cded2143090c5593fed77e4c",
"0xf53d2f2918d7b0a0c9af7e4be27fb9e55ea5e62e1b0c28ec02016c1e460db5aa",
"0x5ce68b862c141ccb5822775a4ddd2173357a9b612f7202e7f1270fa077ce5773",
"0x0ba372ecb2dde40d411deb95f605a5b885af187e601e3ab6579bc5caf0112327",
"0x154057a79b03b0c09086d2073ef38271c0fafdf7c3a753d4a236a9ba63ea7158",
"0x03c26cac15c57c1f1354c8d6f804c0c7076efeadd22d405f2d3b9e486065ac90",
"0xf54d9c2d98e3ab87facc3578772c1a1ef37d5ac499a935966be631e908dafc89",
"0x9dfb51c8609df12af96fcd016339f873b76bb5570e9b3b2c0f674b96b13742a0",
"0x5bb795418c4423f9901e25b9c4da5b1ac8f8588b24bac76adb01ad0f9298ee7d",
"0x82bc515a8514bf157b9f92b22ad839a1ef8e7e42bb9be220d68bd94c7e602d3c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


