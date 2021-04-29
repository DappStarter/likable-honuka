require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note payment universe install force equal genre'; 
let testAccounts = [
"0x07b56786714ed6a47549d3dd1e7204ff530d5af65f22b7f8ec55f6517541802e",
"0x9b32ba3dd8623e729d6724a21d441a01daef2250dbdc30f77d2eac0428b545f1",
"0xf589e1f34c121d73a7230465f8219ada31edcaa5eb3cf96cbfad875a096a94e6",
"0xab5766f9ab82612281bf291bd798c3b2a0897fed57b0b9cbccd6fceb06e704b5",
"0x7a2fd64a9fe831eaece8e73b1152a3c02adca919eb368ee35ab1a55cb81b7fd2",
"0x46eefdc2135d3cdb91f6fa87f7d493d84a524ebba097d05319fd76515596cfc6",
"0x6c697361fbf019bfc4ae0ba924e8ea1df8c27df90f24fbccb63fb8cf666c1d79",
"0x96e8d150ad364b0b3e35d53c1ba24e1ed7bca13d5e168feea1fc196bd8bda127",
"0x49612b0c1252d2e4eedcdf83b899ec8540b636ef77a3ce628e303f0ec46b9d2e",
"0x4ae45752bc80f95ef420f969c42c42ce80045ce7159d4cbbc097bfac4a8e840f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
