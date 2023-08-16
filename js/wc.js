import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
    WagmiCore,
    WagmiCoreChains,
    WagmiCoreConnectors,
} from "https://unpkg.com/@web3modal/ethereum@2.6.2";

import { Web3Modal } from "https://unpkg.com/@web3modal/html@2.6.2";


// 0. Import wagmi dependencies
const { bsc, mainnet, polygon, avalanche, arbitrum } = WagmiCoreChains;
const { configureChains, createConfig } = WagmiCore;

// 1. Define chains
const chains = [bsc, mainnet, polygon, avalanche, arbitrum];
const projectId = "85105765a0ea5fc7fe8263dace38cea9";

// 2. Configure wagmi client
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
        ...w3mConnectors({ chains, version: 2, projectId }),
        new WagmiCoreConnectors.CoinbaseWalletConnector({
            chains,
            options: {
                appName: "html wagmi example",
            },
        }),
    ],
    publicClient,
});

// 3. Create ethereum and modal clients
const ethereumClient = new EthereumClient(wagmiConfig, chains);
export const web3Modal = new Web3Modal(
    {
        projectId,
        walletImages: {
            safe: "https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg",
        },
    },
    ethereumClient
);

web3Modal.setTheme({
    themeMode: "dark",
    themeVariables: {
        '--w3m-font-family': 'Montserrat, sans-serif',
        '--w3m-accent-color': '#756aec',
        '--w3m-overlay-backdrop-filter': 'blur(10px)',
        '--w3m-overlay-background-color': 'rgb(0,0,0,0.6)',
        '--w3m-logo-image-url': 'https://app.eversafuv2.com/img/EverSAFU.png',
        '--w3m-container-border-radius': '0px',
        '--w3m-background-color': '#0B0D11',
        '--w3m-accent-fill-color': 'black'
    }
})

var btn = document.getElementById('btn-connect');
var btn2 = document.getElementById('btn-disconnect');
if (btn !== null) {
    btn.addEventListener('click', async () => {
        const unsubscribe = web3Modal.subscribeModal(newState => {
            if (!newState.open) {
                Login();
                unsubscribe();
            }
        });
        await web3Modal.openModal();
    })
    btn2.addEventListener('click', async () => {
        const unsubscribe = web3Modal.subscribeModal(newState => {
            if (!newState.open) {
                Login();
                unsubscribe();
            }
        });
        await web3Modal.openModal();
    })
}

async function GetBalanceForAcc(address, chainid) {
    return await WagmiCore.fetchBalance({ address: address, chainId: chainid });
}

async function GetConnectedNetwork() {
    return await WagmiCore.getNetwork();
}

function Login() {
    account = WagmiCore.getAccount()
    Init();
}

Login();

getConAccount = function () {
    Login();
};

//defaulting to bsc
getBalance = async function (addr, chainid = 56) {
    return await GetBalanceForAcc(addr, chainid);
};

getNetwork = async function () {
    return await GetConnectedNetwork();
};

writeFunctionWC = async function (ca, abi, functionName, args, value = null, callback = null) {
    return await CallFunction_WC(ca, abi, functionName, args, value, callback);
}

connectWallet = async function (setstep = false, variant = 0) {
    const unsubscribe = web3Modal.subscribeModal(newState => {
        if (!newState.open) {
            Login();
            unsubscribe();
            if (setstep) {
                if (variant == 0) {
                    NextStepAir(0);
                }
                if (variant == 1) {
                    NextStepTerra(0);
                }
                if (variant == 2) {
                    ReloadTerra(0);
                }
            }
        }
    });
    await web3Modal.openModal();
}

async function CallFunction_WC(ca, abi, functionName, args, value, callback) {
    try {
        if (value !== null) {
            const { request } = await WagmiCore.prepareWriteContract({
                address: ca,
                abi: abi,
                functionName: functionName,
                account: account.address,
                args: args,
                value: value
            })
            const { hash } = await WagmiCore.writeContract(request)
            if (callback !== null) {
                ProcessCallback(hash, callback);
            }
        } else {
            const { request } = await WagmiCore.prepareWriteContract({
                address: ca,
                abi: abi,
                functionName: functionName,
                account: account.address,
                args: args
            })
            const { hash } = await WagmiCore.writeContract(request);
            if (callback !== null) {
                ProcessCallback(hash, callback);
            }
        }
    }
    catch (error) {
        $("#btn-pay").text("Start Payment");
        console.log(error);
        ShowError(error.message);
        return false;
    }
}