// eslint-disable-next-line import/no-anonymous-default-export
export default {
  enablePasswordEncryption: false,
  showTransactionConfirmationScreen: true,
  factory_address: '0x9406Cc6185a346906296840746125a0E44976454',
  stateVersion: '0.1',
  network: {
    chainID: '11155111',
    family: 'EVM',
    name: 'Sepolia',
    //provider: 'https://sepolia.infura.io/v3/bdabe9d2f9244005af0f566398e648da',
    provider: 'https://eth-goerli.g.alchemy.com/v2/xQvuQG_kmmChBm22UzulNXE4W4TlE8Rl',
    //entryPointAddress: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
    entryPointAddress: '0x0576a174D229E3cFA37253523E645A78A0C91B57',
    bundler: 'https://goerli.voltaire.candidewallet.com/rpc',
    baseAsset: {
      symbol: 'ETH',
      name: 'ETH',
      decimals: 18,
      image:
        'https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/6ed5f/eth-diamond-black.webp',
    },
  },
};
