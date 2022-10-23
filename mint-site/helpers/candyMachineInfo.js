export const candyMachineAddress = "0x910d29c9605d6369edd2f895d4b93e1742819a63cf6c4535e3682701265f3149";
export const collectionName = "Essentials TestMint"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs//QmVsudH4sHELLHfaw3mYsX55zMXa2vpPAEvPsdPAV9Kwfx";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
