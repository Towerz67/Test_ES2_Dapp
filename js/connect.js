async function CheckChain() {
    var chainid = web3.currentProvider.chainId;
    var network = web3.currentProvider.networkVersion;

    try {
        chainid = Number(chainid);
    }
    catch {
        try {
            chainid = Number(network);
        }
        catch {
            // No Chain found
        }
    }

    var rpc;
    for (let l in rpcs) {
        if (chainid == rpcs[l].chainid) {
            rpc = rpcs[l];
        }
    }

    if (rpc !== undefined) {
        if (rpc.chainid !== selectedChain.chainid) {            
            try {                
                return false;
            }
            catch { }
        } else {
            return true;
        }
    }

    return false;
}

async function SwapChain(rpc) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(rpc.chainid) }],
        });
    } catch (e) {
        if (e.toString().includes("available")) {
            alert("Please change your chain through your wallet menu.");
        }

        if (e.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [rpc.rpcToAdd],
                });
            } catch (addError) {
                console.error(addError);
            }
        }
        console.error(e)
    }

}

async function IsConnected() {
    try {
        getConAccount();
        var returnValue = account.isConnected;
        return returnValue;

        //if (window.ethereum) {
        //    const accounts = await ethereum.request({ method: 'eth_accounts' });
        //    if (accounts.length) {
        //        return true;
        //    } else {
        //        return false;
        //    }
        //} else {
        //    var WC = localStorage.getItem("walletconnect")
        //    if (WC !== null) {
        //        WC = JSON.parse(WC);
        //        if (WC.connected) {
        //            await provider.enable();
        //        }
        //        if (provider.connected) {
        //            return true;
        //        } else {
        //            return false
        //        }
        //    }
        //}
    }
    catch {
        return false;
    }
}

var rt = 0;

async function GetChainId() {
    //var chainid = web3.currentProvider.chainId;
    //var network = web3.currentProvider.networkVersion;

    //try {
    //    chainid = Number(chainid);
    //}
    //catch {
    //    try {
    //        chainid = Number(network);
    //    }
    //    catch {
    //        // No Chain found
    //    }
    //}
    try {
        getConAccount();
        var chain = await getNetwork();
        var data = chain.chain.id;
        rt = 0;
        return data;
    } catch {
        rt++;
        if (rt > 5) {
            return -1;
        }
        return GetChainId();
    }
}

//const WalletConnectProvider = window.WalletConnectProvider.default;
//var provider = new WalletConnectProvider({
//    rpc: {
//        56: "https://bsc-dataseed.binance.org/",
//        1: "https://mainnet.infura.io/v3/",
//        137: "https://polygon-rpc.com/",
//        43114: "https://api.avax.network/ext/bc/C/rpc",
//        25: "https://rpc.artemisone.org/cronos"
//    }
//});

async function Connect() {
    try {
        return;        
        if (window.ethereum) {
            web3.setProvider(Web3.givenProvider);
            await ethereum.request({ method: 'eth_requestAccounts' });
            $("#walletaddress").text(ethereum.selectedAddress.substring(0, 7) + "...." + ethereum.selectedAddress.substring(ethereum.selectedAddress.length - 5, ethereum.selectedAddress.length));
        } else {
           // provider = new wcp({ rpc: { 56: "https://bsc-dataseed.binance.org/", 1: "https://mainnet.infura.io/v3/", 137: "https://polygon-rpc.com/", 43114: "https://api.avax.network/ext/bc/C/rpc", 25: "https://rpc.artemisone.org/cronos" } });
           // await provider.enable();
           // $("#walletaddress").text(provider.accounts[0].substring(0, 7) + "...." + provider.accounts[0].substring(provider.accounts[0].length - 5, provider.accounts[0].length));
           // web3.setProvider(provider);
        }
        $("#btn-connect").hide();
        $("#btn-disconnect").show();
        //CanProceed();
    }
    catch (error) {
        console.log(error);
    }
}

async function ConnectStep(variant) {
    await connectWallet(true, variant);
}

if (window.ethereum) {
    ethereum.on("accountsChanged", async function () {
        setTimeout(function () {
            getConAccount();
            try { ResetAirFlow(); } catch { }
            try { ResetTerraFlow(); } catch { }
        }, 1000);
    });

    ethereum.on("chainChanged", async function () {
        CheckChain();
        setTimeout(function () { getConAccount(); }, 1000);
        try { ResetAirFlow(); } catch { }
        try { ResetTerraFlow(); } catch { }
    });
}