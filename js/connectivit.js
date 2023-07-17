var timerChain = null;

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


    if (chainid !== 56) {
        SwapChain(rpcs.BSC);
    }
}

async function SwapChain(rpc) {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(rpc.chainid) }],
        });
    } catch (e) {
        if (e.toString().includes("available")) {
            alert("Please change your chain through your wallet menu.");
        }

        if (e.code === 4902) {
            try {
                await window.ethereum.request({
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

async function Connect() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            web3.setProvider(Web3.givenProvider);
            var acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
            account = acc.toString();
            $("#btn-connect").hide();
            $("#btn-connect-mob").hide();
            $("#btn-disconnect").show();
            $("#btn-disconnect-mob").show();
            $("#walletModal").modal("hide");
            $("#btn-withdraw").attr('disabled', false);
            $("#btn-deposit").attr('disabled', false);
            $("#btn-compound").attr('disabled', false);

            $("#useraccount").text(account.substring(0, 6) + "..." + account.substring(account.length - 4, account.length));


            Load();
            CheckChain();
        }
        catch (error) {
            console.log(error);
            if (error.code === 4001) {
                alert("Connection Rejected");
            }
        }
    }
}

const WalletConnectProvider = window.WalletConnectProvider.default;
const provider = new WalletConnectProvider({
    rpc: {
        56: "https://bsc-dataseed.binance.org/",
        1: "https://mainnet.infura.io/v3/",
        137: "https://polygon-rpc.com/",
        43114: "https://api.avax.network/ext/bc/C/rpc",
        25: "https://rpc.artemisone.org/cronos"
    }
});

async function ConnectWC() {
    try {
        if (provider.connected != true) {
            var acc = await provider.enable();
            web3.setProvider(provider);
            account = acc[0];
            $("#btn-connect").hide();
            $("#btn-connect-mob").hide();
            $("#btn-disconnect").show();
            $("#btn-disconnect-mob").show();
            $("#walletModal").modal("hide");
            Load();
        }
        else {
        }
    } catch (error) {
        console.log(error);
        if (error.code === 4001) {
            alert("Connection Rejected");
        }
    }
}

async function Disconnect() {
    $("#btn-connect").show();
    $("#btn-connect-mob").show();
    $("#btn-disconnect").hide();
    $("#btn-disconnect-mob").hide();
    $("#btn-withdraw").attr('disabled', true);
    $("#btn-deposit").attr('disabled', true);
    $("#btn-compound").attr('disabled', true);
    $("#input-ref1").val(`https://eternity-revamp.vercel.app/?ref=`);
    $("#input-ref2").val(`https://eternity-revamp.vercel.app/?ref=`);

    $("#userBalance1").text("0 CRO");
    $("#userBalance2").text("CRO Balance: 0");
    $("#userAeon").text("0");
    $("#input-rewards").val("0");
    $("#useraccount").text("");
    $("#acc-dividends").text("0");
    $("#acc-imbalance").text("0%");
    account = "";
    userBalancesTot = 0;
    clearInterval(loader);
    if (provider.connected == true) { await provider.disconnect(); }
    Load();
}