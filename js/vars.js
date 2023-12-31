const rpcs = {
    Ethereum: {
        chainid: 1,
        url: "https://mainnet.infura.io/v3/",
        symbol: "ETH",
        img: "eth.png",
        rpcToAdd: {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18
            },
            blockExplorerUrls: ['https://etherscan.io'],
            rpcUrls: ['https://mainnet.infura.io/v3/'],
        }
    },
    BSC: {
        chainid: 56,
        url: "https://bsc-dataseed1.binance.org/",
        symbol: "BNB",
        img: "bsc.png",
        rpcToAdd: {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18
            },
            blockExplorerUrls: ['https://etherscan.io'],
            rpcUrls: ['https://bsc-dataseed1.binance.org/'],
        }
    },
    Polygon: {
        chainid: 137,
        url: "https://polygon-rpc.com/",
        symbol: "MATIC",
        img: "poly.png",
        rpcToAdd: {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18
            },
            blockExplorerUrls: ['https://etherscan.io'],
            rpcUrls: ['https://mainnet.infura.io/v3/'],
        }
    },
    Avax: {
        chainid: 43114,
        url: "https://api.avax.network/ext/bc/C/rpc",
        symbol: "AVAX",
        img: "avax.png",
        rpcToAdd: {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18
            },
            blockExplorerUrls: ['https://etherscan.io'],
            rpcUrls: ['https://mainnet.infura.io/v3/'],
        }
    },
    Cronos: {
        chainid: 25,
        url: "https://rpc.nebkas.ro/",
        symbol: "CRO",
        img: "cro.png",
        rpcToAdd: {
            chainId: '0x19',
            chainName: 'Cronos Mainnet',
            nativeCurrency: {
                name: 'Cronos',
                symbol: 'CRO',
                decimals: 18
            },
            blockExplorerUrls: ['https://cronoscan.com/'],
            rpcUrls: ['https://rpc.nebkas.ro/']
        }
    }
}

const caReward = "0xF244b12409b98f2F0E014a55dcf97823A459303b";
const ca = "0xFeF0c1670cb569008bB3d070918922dBb4F92De4";
const calp = "0x2d9815206b5f2C954d4671Dce01e76Bb64bcE77b";
const caCredits = "0x0C6c20D2db442EEDC9870B6505D582849B489E60";
const caCrewNFT = "0x23985a66752d476D73372344155F92559bB6f848";
const caVending = "0x664aF120f615dd11d56f2675309291C870a95463";
const caG2NFT = "0x4D2F4b8A3d8C129F6F35A1c74b322D117874b1F5";
const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalSupply", "type": "uint256" }], "name": "LogRebase", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }], "name": "OwnershipRenounced", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DECIMALS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_UINT256", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "RATE_DECIMALS", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_autoAddLiquidity", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_autoRebase", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_initRebaseStartTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_lastAddLiquidityTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_lastRebasedTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner_", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "autoLiquidityReceiver", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "autofirePit", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "autofirePitFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "blacklist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "checkFeeExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "feeDenominator", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCirculatingSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "accuracy", "type": "uint256" }], "name": "getLiquidityBacking", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isDividendExempt", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isNotInSwap", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquidityFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "manualSync", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pairContract", "outputs": [{ "internalType": "contract IPancakeSwapPair", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "router", "outputs": [{ "internalType": "contract IPancakeSwapRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "safuDividendFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "safuDividendReceiver", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sellFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_flag", "type": "bool" }], "name": "setAutoAddLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_flag", "type": "bool" }], "name": "setAutoRebase", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_botAddress", "type": "address" }, { "internalType": "bool", "name": "_flag", "type": "bool" }], "name": "setBotBlacklist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_minPeriod", "type": "uint256" }, { "internalType": "uint256", "name": "_minDistribution", "type": "uint256" }], "name": "setDistributionCriteria", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "gas", "type": "uint256" }], "name": "setDistributorSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_autoLiquidityReceiver", "type": "address" }, { "internalType": "address", "name": "_treasuryReceiver", "type": "address" }, { "internalType": "address", "name": "_autofirePit", "type": "address" }], "name": "setFeeReceivers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "setIsDividendExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "setLP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "setWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasuryFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "treasuryReceiver", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawAllToTreasury", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
const abilp = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Swap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint112", "name": "reserve0", "type": "uint112" }, { "indexed": false, "internalType": "uint112", "name": "reserve1", "type": "uint112" }], "name": "Sync", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "burn", "outputs": [{ "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "internalType": "uint256", "name": "amount1", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "kLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "price0CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "price1CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "skim", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "swap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "sync", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token1", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
const abireward = [{ "inputs": [{ "internalType": "address", "name": "_router", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "claimDividend", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "currentIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "dividendsPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "dividendsPerShareAccuracyFactor", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "shareholder", "type": "address" }], "name": "getUnpaidEarnings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minDistribution", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "gas", "type": "uint256" }], "name": "process", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_minPeriod", "type": "uint256" }, { "internalType": "uint256", "name": "_minDistribution", "type": "uint256" }], "name": "setDistributionCriteria", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "shareholder", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "setShare", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "shares", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "totalExcluded", "type": "uint256" }, { "internalType": "uint256", "name": "totalRealised", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDistributed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDividends", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
const abiG2 = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hiddenMetadataUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmountPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hiddenMetadataUri","type":"string"}],"name":"setHiddenMetadataUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintAmountPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriSuffix","type":"string"}],"name":"setUriSuffix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiCredits = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "controller", "type": "address" }], "name": "addController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "controller", "type": "address" }], "name": "removeController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const abiVending = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "creditToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "getCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "rescueBNB", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "rescueToken", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "setCreditToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "setPayToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
const abiCrew = [{ "inputs": [{ "internalType": "string", "name": "_initBaseURI", "type": "string" }, { "internalType": "string", "name": "_initNotRevealedUri", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint8", "name": "rarity", "type": "uint8" }], "name": "CrewMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "PaymentTokens", "outputs": [{ "internalType": "contract IMintable20", "name": "paytoken", "type": "address" }, { "internalType": "uint256", "name": "nameChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "bioChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "lvlChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "rankChangePrice", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IMintable20", "name": "_paytoken", "type": "address" }, { "internalType": "uint256", "name": "_nameChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "_bioChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "_lvlChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "_rankChangePrice", "type": "uint256" }], "name": "addPayTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "burn", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "owned", "type": "uint256[]" }], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "cost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "creditToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256[]", "name": "owned", "type": "uint256[]" }], "name": "getClaimAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "lastId", "type": "uint256" }], "name": "getOwned", "outputs": [{ "internalType": "uint256", "name": "_owned", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPaid", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "headStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lastClaim", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenID", "type": "uint256" }, { "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "maxBioCharLimit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxNameCharLimit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxRank", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "notRevealedUri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mod", "type": "uint256" }], "name": "randNumRarity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mod", "type": "uint256" }, { "internalType": "uint256", "name": "_seed", "type": "uint256" }, { "internalType": "uint256", "name": "_salt", "type": "uint256" }], "name": "randomNum", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenID", "type": "uint256" }, { "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "rankUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenID", "type": "uint256" }], "name": "readBio", "outputs": [{ "internalType": "string", "name": "bio", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenID", "type": "uint256" }], "name": "readName", "outputs": [{ "internalType": "string", "name": "name", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "removePayTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "requiredLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "rescueBNB", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "rescueToken", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reveal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "revealed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardsPerDay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseExtension", "type": "string" }], "name": "setBaseExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenID", "type": "uint256" }, { "internalType": "string", "name": "_newBio", "type": "string" }, { "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "setBio", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newCost", "type": "uint256" }], "name": "setCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "setCreditToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newLimit", "type": "uint256" }], "name": "setMaxBioCharLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newLimit", "type": "uint256" }], "name": "setMaxNameCharLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newMaxRank", "type": "uint256" }], "name": "setMaxRank", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenID", "type": "uint256" }, { "internalType": "string", "name": "_newName", "type": "string" }, { "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "setName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_notRevealedURI", "type": "string" }], "name": "setNotRevealedURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newRequiredLevel", "type": "uint256" }], "name": "setRequiredLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stats", "outputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "bio", "type": "string" }, { "internalType": "uint8", "name": "rarity", "type": "uint8" }, { "internalType": "uint8", "name": "level", "type": "uint8" }, { "internalType": "uint8", "name": "rank", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "contract IMintable20", "name": "_paytoken", "type": "address" }, { "internalType": "uint256", "name": "_nameChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "_bioChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "_lvlChangePrice", "type": "uint256" }, { "internalType": "uint256", "name": "_rankChangePrice", "type": "uint256" }], "name": "updatePayTokens", "outputs": [{ "internalType": "contract IMintable20", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "withdrawPaymentTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];


var web3 = new Web3(Web3.givenProvider);
var web3bsc = new Web3(new Web3.providers.HttpProvider(rpcs.BSC.url));
var launchdate = new Date(2022, 7, 16);

var contract;
var contractBsc;
var contractLP;
var contractCrew = new web3.eth.Contract(abiCrew, caCrewNFT);
var contractG2 = new web3.eth.Contract(abiG2, caG2NFT);
var contractVend = new web3.eth.Contract(abiVending, caVending);
var contractCred = new web3.eth.Contract(abiCredits, caCredits);
var contractBSCCrew = new web3bsc.eth.Contract(abiCrew, caCrewNFT);
var contractBSCG2 = new web3bsc.eth.Contract(abiG2, caG2NFT);
var contractBSCVend = new web3bsc.eth.Contract(abiVending, caVending);
var contractBSCCred = new web3bsc.eth.Contract(abiCredits, caCredits);
var pcsRouter = new web3bsc.eth.Contract([{ "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "address", "name": "_WETH", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "WETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }], "0x10ED43C718714eb63d5aA57B78B54704E256024E");

var account = "";
var endDate = new Date();
var api = `https://api.pancakeswap.info/api/v2/tokens/0xFeF0c1670cb569008bB3d070918922dBb4F92De4`;
var holders = {};
var userBalancesTot = 0;
var currentPrice = 0;
var loader = null;
var priceBnb;

async function Init() {
    contract = new web3.eth.Contract(abi, ca);
    contractBsc = new web3bsc.eth.Contract(abi, ca);
    contractLP = new web3bsc.eth.Contract(abilp, calp);
    contractReward = new web3bsc.eth.Contract(abireward, caReward);
    contractRewardUser = new web3.eth.Contract(abireward, caReward);
}

Init();

async function Load() {
    switch (window.location.pathname) {
        case "/":
            LoadDashboard();
            if (loader == null) {
                loader = setInterval(function () { Load(); }, 20000);
            }
            break;
        case "/calculator":
            LoadCalculator();
            break;
        case "/account":
            LoadAccount();
            if (loader == null) {
                loader = setInterval(function () { Load(); }, 20000);
            }
            break;
        case "/crew":
            Init_Crew();
            break;
        case "/staking":
            await LoadPriceTag();
            Init_Staking();
            break;
    }
}

var price;

async function LoadPriceTag() {
    var bnbInfo = await pcsRouter.methods.getAmountsOut(web3.utils.toWei("1"), ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", "0xe9e7cea3dedca5984780bafc599bd69add087d56"]).call();
    priceBnb = Number(web3.utils.fromWei(bnbInfo[1]));

    var circSupp = await contractBsc.methods.balanceOf(calp).call();
    var lpObj = await contractLP.methods.getReserves().call();
    var bnb = Number(web3bsc.utils.fromWei(lpObj._reserve0.toString()));
    var bnbUsd = bnb * priceBnb;
    circSupp = Number(circSupp) / 1e5;

    price = bnbUsd / circSupp;

    //await $.getJSON(api, async function (data) {
    //    price = Number(data.data.price);
    //    price = price == 0 ? Number(0.0000361778) : price;
    //});

    var showPrice = Math.round((price + Number.EPSILON) * 100000) / 100000;

    currentPrice = showPrice;
    $("#pricebot").text(showPrice + "$");

    switch (window.location.pathname) {
        case "/":
            break;
        case "/calculator":
            $("#calc-price").html(`<span class="text-green">$ </span>${showPrice}`);
            $("#input-purprice").val(showPrice);
            $("#input-futprice").val(showPrice);
            break;
        case "/account":
            $("#es2price").html(`$${showPrice}`);
            break;
    }
}

async function LoadAccount() {
    LoadPriceTag();

    if (account !== "") {
        var balance = await contractBsc.methods.balanceOf(account).call();
        balance = Number(balance).FromDec();
        userBalancesTot = Number(balance.toFixed(2));

        var rewards = await contractReward.methods.getUnpaidEarnings(account).call();
        rewards = Number(web3.utils.fromWei(rewards));
        rewards = Math.round((rewards + Number.EPSILON) * 10000) / 10000;

        var totalReward = await contractReward.methods.shares(account).call();
        totalReward = Number(web3.utils.fromWei(totalReward.totalRealised.toString()));
        totalReward = Math.round((totalReward + Number.EPSILON) * 10000) / 10000;

        $('#acc-balance').html(formatter.format(userBalancesTot) + "<span class='text-gradient2'> ES2</span>");
        $("#acc-usdbalance").html("<span class='text-green'>$</span>" + formatter.format((userBalancesTot * currentPrice)));
        $('#acc-rewards').text(`${formatter.format(rewards)} BUSD`);
        $('#acc-totrewards').text(`${formatter.format(totalReward)} BUSD`);


        var dividends = await contractRewardUser.methods.shares(account).call();
        var divi = dividends.amount;
        divi = Number(divi) / 1e5;

        var imbalance = 100 - (divi / balance * 100);

        $('#acc-dividends').html(formatter.format(divi) + "<span class='text-gradient2'> ES2</span>");
        $('#acc-imbalance').text(imbalance.toFixed(2) + "%");

        if (imbalance <= 10) {
            $('#acc-imbalance').css("color", "green");
        }
        if (imbalance > 10) {
            $('#acc-imbalance').css("color", "yellow");
        }
        if (imbalance > 25) {
            $('#acc-imbalance').css("color", "red");
        }


        //7 DAY ROI = 17,14 %
        //30 DAY ROI = 97,02 %
        var nextRew = userBalancesTot * Number(1.0002355) - userBalancesTot;

        var roi1v2 = (userBalancesTot * Math.pow(1.0002355, 96)) - userBalancesTot;
        var roi2v2 = (userBalancesTot * Math.pow(1.0002355, 672)) - userBalancesTot;
        var roi3v2 = (userBalancesTot * Math.pow(1.0002355, 2880)) - userBalancesTot;

        var _math1 = Math.log(10000 / userBalancesTot);
        var _math2 = Math.log(1.0002355);
        var _math3 = _math1 / _math2;
        var _math4 = _math3 / 96;
        var _days = Math.ceil(_math4);
        
        //var roi1 = (nextRew * currentPrice * 96).toFixed(3);
        //var roi2 = (userBalancesTot * Number(1.1114) - userBalancesTot).toFixed(3);
        //var roi3 = (userBalancesTot * Number(1.9702) - userBalancesTot).toFixed(3);

        $('#nextreward').html(`${nextRew.toFixed(2)} ES2`);
        $('#nextrewardusd').text(`$${(nextRew * currentPrice).toFixed(2)}`);
        $('#nextrewardtime').text('0.02355%');

        if (_days > 0) {
            $("#10k-club").text(_days + " Days");
        } else {
            $("#10k-club").text("Eligible!");
        }

        $('#roi1').text(`$${(roi1v2 * currentPrice).toFixed(2)}`);
        $('#roi2').text('17.14%');
        $('#roi3').text(`$${(roi2v2 * currentPrice).toFixed(2)}`);
        $('#roi4').text(`97.02%`);
        $('#roi5').text(`$${(roi3v2 * currentPrice).toFixed(2)}`);
        $("#nextrewarddaily").html(`${roi1v2.toFixed(2)} ES2`);

        //var contract10k = new web3bsc.eth.Contract(abi10k, "0x4b9E4c8e03491b79D585Fabc49dfA47e54c9e46a");
        var nftsLeft = 0;// await contract10k.methods.balanceOf("0x69d52ad7df65b572f8e51706b685f1042d11d656").call();        
        $("#10k-club-count").text(nftsLeft);
        var boughtBalance = 0;

        await $.getJSON(`https://api.bscscan.com/api?module=account&action=tokentx&address=${account}&startblock=20364807&endblock=9999999999&page=1&sort=asc&apikey=QAZWG36U14KKIDIIP76RZ4Q4T38XYS6TZF&offset=9999`, async function (data) {
            for (let obj in data.result) {
                var item = data.result[obj];
                if (item.tokenName == "EverSAFUv2") {
                    var value = Number(item.value) / 1e5;
                    var incoming = item.to.toLowerCase() == account.toLowerCase() ? true : false;

                    if (incoming) {
                        boughtBalance += value;
                    } else {
                        boughtBalance -= value;
                    }
                }
            }
        });

        $("#acc-rebasegain").html(`${(balance - boughtBalance).toFixed(2)}<span class="text-gradient2"> ES2</span>`);
        $("#acc-rebasegainusd").html("<span class='text-green'>$</span>" + formatter.format(((balance - boughtBalance) * currentPrice)));
    } else {
        //var contract10k = new web3bsc.eth.Contract(abi10k, "0x4b9E4c8e03491b79D585Fabc49dfA47e54c9e46a");
        var nftsLeft = 0;// await contract10k.methods.balanceOf("0x69d52ad7df65b572f8e51706b685f1042d11d656").call();
        $("#10k-club-count").text(nftsLeft);
        $('#acc-balance').html("0<span class='text-gradient2'> ES2</span>");
        $('#acc-rewards').text('0 BUSD');
        $('#acc-totrewards').text('0 BUSD');
        $("#acc-usdbalance").text('$0')
        $("#acc-dividends").text("0");
        $("#acc-imbalance").text("0%");
        $('#nextreward').html("0 ES2");
        $('#nextrewardusd').text("$0");
        $('#nextrewardtime').text('0.02355%');
        $('#roi1').text("$0");
        $('#roi2').text('11.96%');
        $('#roi3').text("$0");
        $('#roi4').text(`97.02%`);
        $('#roi5').text(`$0`);
        $("#acc-rebasegain").html("0 ES2");
        $("#nextrewarddaily").html("0 ES2");
        $("#acc-rebasegainusd").text("$0")
        $("#10k-club").text("N/A");
    }
    RebaseTimer2();
}

async function Claim() {
    try {
        if (account == "") {
            $("#txt-claim").text("Please Connect Wallet");
            setTimeout(function () { $("#txt-claim").text("CLAIM REWARDS"); }, 1500);
        }

        contractRewardUser.methods.claimDividend().send({ from: account })
            .on("receipt", function (receipt) {
            })
            .catch("error", function (error) {
                alert(error.message);
            });
    }
    catch (error) {
        alert(error);
    }
}

async function LoadCalculator() {
    LoadPriceTag();

    var end = launchdate.addDays(365);
    var tdy = new Date();
    var dif = tdy.getTime() - end.getTime();
    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    var Minutes_Between_Dates = Seconds_Between_Dates / 60;
    var Hours_Between_Dates = Minutes_Between_Dates / 60;
    var Days_Between_Dates = Math.floor(Hours_Between_Dates / 24);

    if (Days_Between_Dates <= 365) {
        $("#range-year1").attr('max', Days_Between_Dates);
    }

    if (account !== "") {
        var balance = await contractBsc.methods.balanceOf(account).call();
        balance = Number(balance).FromDec();
        userBalancesTot = balance;
        $('#calc-balance').html(`${balance.toFixed(2)} <span class="text-gradient2">ES2</span>`)
        $('#input-invest').val(balance.toFixed(2));
        CalcProfit();
    }
}
var inputBNB = 10;
async function LoadDashboard() {
    try {
        RebaseTimer();
        await LoadPriceTag();

        var forSale = await contractBsc.methods.balanceOf("0x2d9815206b5f2c954d4671dce01e76bb64bce77b").call();
        forSale = Number(forSale).FromDec();

        var liquidity = 0;
        var lpObj = await contractLP.methods.getReserves().call();
        var es2 = Number(lpObj._reserve1) / 1e5;
        var bnb = Number(web3bsc.utils.fromWei(lpObj._reserve0.toString()));
        liquidity += bnb * priceBnb;
        liquidity += es2 * price;

        var totalBusdDist = await contractReward.methods.totalDistributed().call();
        totalBusdDist = Number(web3.utils.fromWei(totalBusdDist.toString()));

        var treasury = await contractBsc.methods.balanceOf("0x1aaE66E0e40cd1c4b4bBFca06Eda7032f94d42FC").call();
        treasury = Number(treasury).FromDec() * price;
        var treasuryBnb = await web3bsc.eth.getBalance("0x1aaE66E0e40cd1c4b4bBFca06Eda7032f94d42FC");
        treasury += Number(web3bsc.utils.fromWei(treasuryBnb)) * priceBnb;

        var totalSupply = await contractBsc.methods.totalSupply().call();
        totalSupply = Number(totalSupply).FromDec();
        var burned = await contractBsc.methods.balanceOf("0x000000000000000000000000000000000000dead").call();
        burned = Number(burned).FromDec();
        var circulatingsupply = totalSupply - burned;
        var burnedvalue = burned * price;
        var marketcap = Number(totalSupply) * price;

        if (burned > 0) {
            var perc = burned / totalSupply;
            var diluted = totalSupply * price;
            marketcap = diluted * (1 - perc);
        }

        var burnpercentage = Math.round(((burned / totalSupply * 100) + Number.EPSILON) * 100) / 100;
        var circpercentage = Math.round(((circulatingsupply / totalSupply * 100) + Number.EPSILON) * 1000) / 1000;

        var salepercentage = Math.round(((forSale / totalSupply * 100) + Number.EPSILON) * 100) / 100;
        var walletspercentage = Number(100) - salepercentage;

        var lppercentage = Math.round(((liquidity / marketcap * 100) + Number.EPSILON) * 100) / 100;
        var mcpercentage = Math.round(((Number(100) - lppercentage) + Number.EPSILON) * 100) / 100;


        $("#circulatingsupply").html(formatterNoDec.format(Math.round(circulatingsupply)) + '<span class="text-gradient2"> ES2</span');
        $("#totalsupply").html(formatterNoDec.format(Math.round(totalSupply)) + '<span class="text-gradient2"> ES2</span');
        $("#burned").html(formatterNoDec.format(Math.round(burned)) + '<span class="text-gradient2"> ES2</span');
        $("#burnedvalue").html(`<span class="text-green">$ </span>${formatterNoDec.format(Math.round(burnedvalue))}`);
        $("#burnedratio").text(burnpercentage + "%");
        $("#treasury").html(`<span class="text-green">$ </span>${formatterNoDec.format(Math.round(treasury))}`);
        $("#marketcap").html(`<span class="text-green">$ </span>${formatterNoDec.format(Math.round(marketcap))}`);
        $("#liquidity").html(`<span class="text-green">$ </span>${formatterNoDec.format(Math.round(liquidity))}`);
        $("#totalbusd").html(`<span class="text-warning">$ </span>${formatterNoDec.format(Math.round(totalBusdDist))}`);
        $("#prog-burned").text(Math.round(burnpercentage) + "%").width(Math.round(burnpercentage) + "%")
        $("#prog-circulating").text(Math.round(circpercentage) + "%").width(Math.round(circpercentage) + "%")

        $("#prog-forsale").text(Math.round(salepercentage) + "%").width(Math.round(salepercentage) + "%")
        $("#prog-wallets").text(Math.round(walletspercentage) + "%").width(Math.round(walletspercentage) + "%")

        $("#prog-liquidity").text(Math.round(lppercentage) + "%").width(Math.round(lppercentage) + "%")
        $("#prog-marketcap").text(Math.round(mcpercentage) + "%").width(Math.round(mcpercentage) + "%")

        var blockNr = await web3bsc.eth.getBlockNumber();
        var blockNr2 = blockNr - 28800;
        var blockNr3 = blockNr - (28800 * 7);
        var volume = 0;
        var volume2 = 0;
        var pcsLP = "0x2d9815206b5f2C954d4671Dce01e76Bb64bcE77b".toLowerCase();
        var adds = [];

        await $.getJSON(`https://api.bscscan.com/` + `api?module=account&action=tokentx&address=${pcsLP}&startblock=${blockNr2}&endblock=${blockNr}&page=1&sort=asc&apikey=QAZWG36U14KKIDIIP76RZ4Q4T38XYS6TZF&offset=9999`, async function (data) {

            for (let obj in data.result) {
                var item = data.result[obj];
                if (item.tokenSymbol.toLowerCase() == "wbnb") {
                    var value = Number(item.value) / 1e18;
                    volume += value * priceBnb;
                }
            }
        });
        
        $("#24volume").html(`<span class="text-green">$ </span>${formatter.format(volume)}`);
              
        var pair = await contract.methods.pairContract().call();
        var pairContract = new web3.eth.Contract(abilp, pair);
        var LP = await pairContract.methods.getReserves().call();
        var LPBNB = web3.utils.fromWei(LP._reserve0.toString());


        var LP_USD = Number(LPBNB) * priceBnb;
        var supply = await contract.methods.balanceOf(pair).call();
        supply = Number(supply).FromDec();        
        var inputUSD = inputBNB * priceBnb;

        var futureLP = inputUSD + LP_USD;
        var futureSupply = LP_USD / futureLP * supply;
        var futurePrice = futureLP / futureSupply;
        var futureMC = Number(totalSupply) * futurePrice;        

        if (burned > 0) {
            var perc = burned / totalSupply;
            var diluted = totalSupply * futurePrice;
            futureMC = diluted * (1 - perc);
        }

        console.log(futureMC);

        //await $.getJSON(`https://api.bscscan.com/` + `api?module=account&action=tokentx&address=${pcsLP}&startblock=${blockNr3}&endblock=${blockNr}&page=1&sort=asc&apikey=QAZWG36U14KKIDIIP76RZ4Q4T38XYS6TZF&offset=9999`, async function (data) {

        //    for (let obj in data.result) {
        //        var item = data.result[obj];
        //        if (item.tokenSymbol.toLowerCase() == "wbnb") {
        //            var value = Number(item.value) / 1e18;
        //            volume2 += value * priceBnb;
        //        }
        //    }
        //});

        //console.log(volume2);

        //var addsurl = `https://api.bscscan.com/api?module=account&action=tokentx&address=0x2d9815206b5f2C954d4671Dce01e76Bb64bcE77b&startblock=20364807&endblock=999999999&page=1&sort=asc&apikey=QAZWG36U14KKIDIIP76RZ4Q4T38XYS6TZF&offset=9999`;

        //await $.getJSON(addsurl, async function (data) {
        //    for (let obj in data.result) {
        //        var item = data.result[obj];
        //        if (item.tokenSymbol.toLowerCase() == "es2") {

        //            adds.push(item.to);
        //        }
        //    }

        //    var adds2 = [];

        //    for (let itm in uniq(adds)) {
        //        var _val = adds[itm];
        //        var blc = await contractBsc.methods.balanceOf(_val).call();
        //        if (Number(blc) > 0) {
        //            adds2.push(_val);
        //        }
        //    }

        //    await $.ajax({
        //        type: 'post',
        //        url: 'https://dutchdapps-api.vercel.app/setholders',
        //        data: `{"value": ${adds2.length}}`,
        //        contentType: "application/json; charset=utf-8",
        //        traditional: true,
        //        success: function (data) {
        //            console.log(data);
        //        }
        //    });
        //});
    }

    catch (error) { console.log(error); }
}

async function RebaseTimer() {
    var timer;
    var firstRB = 1660695451;
    firstRB = new Date(Number(firstRB) * 1000);

    timer = setInterval(function () {
        var td = new Date();
        var dif = td.getTime() - firstRB.getTime();
        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
        var Minutes_Between_Dates = Seconds_Between_Dates / 60;
        var Quarters_Between_Dates = Minutes_Between_Dates / 15;
        var floor = Math.floor(Quarters_Between_Dates);
        var floorDiff = Quarters_Between_Dates - floor;

        var minutes = 15 - (floorDiff * 15);
        var minutesFlat = Math.floor(minutes);
        var seconds = Math.floor((minutes - minutesFlat) * 60);

        $("#timer").text(Math.floor(minutes) + "M " + seconds + "S");

        if (minutes == 0 && seconds == 0) {
            $("#timer").text("Rebasing");
            clearInterval(timer);
            setTimeout(function () { Load() }, 1500);
        }

    }, 1000);
}

async function RebaseTimer2() {
    var timer;

    timer = setInterval(function () {
        var td = new Date();
        var firstRB = 1660695451;
        firstRB = new Date(Number(firstRB) * 1000);
        var dif = td.getTime() - firstRB.getTime();
        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
        var Minutes_Between_Dates = Seconds_Between_Dates / 60;
        var Quarters_Between_Dates = Minutes_Between_Dates / 15;
        var floor = Math.floor(Quarters_Between_Dates);
        var floorDiff = Quarters_Between_Dates - floor;

        var minutes = 15 - (floorDiff * 15);
        var minutesFlat = Math.floor(minutes);
        var seconds = Math.floor((minutes - minutesFlat) * 60);

        var quarters = Math.floor(Quarters_Between_Dates);

        $("#rebasecount").text("~" + quarters);
        $("#acc-rebase").text(Math.floor(minutes) + "M " + seconds + "S");

        if (minutes == 0 && seconds == 0) {
            $("#acc-rebase").text("Rebasing");
            clearInterval(timer);
            setTimeout(function () { Load() }, 1500);
        }

    }, 1000);
}

async function AddCoin() {
    try {
        const isAdded = await web3.currentProvider.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: ca,
                    symbol: "ES2",
                    decimals: 5,
                    image: "data:image/jpeg;base64,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"
                },
            },
        });
    } catch (error) {
        // handle errors
        alert(error);
    }
}



async function AddBUSD() {
    try {
        const isAdded = await web3.currentProvider.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    symbol: "BUSD",
                    decimals: 18,
                    image: "data:image/jpeg;base64,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"
                },
            },
        });
    } catch (error) {
        // handle errors
        alert(error);
    }
}