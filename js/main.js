
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

$("#btn").on("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

$(".bx-search").on("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

$(".navbar-toggler").on("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

function ToggleMenu() {
    toggle = true;
    $(".nav-mob").show(400);
    $(document.body).css('overflow', 'hidden');
}

function HideMenu() {
    $(".nav-mob").hide(400);
    $(document.body).css('overflow', 'visible');
}


$(document).ready(async function () {
    var connected = await web3.eth.net.isListening();
    if (connected) {
        try {
            Connect();
        } catch { }
    }
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        $(".dropdown-toggled").removeClass("dropdown-toggled").addClass("dropdown-toggle");
        $(".logo_name").show();
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        $("#content").addClass("opened").removeClass("closed");
    } else {
        $(".dropdown-toggle").addClass("dropdown-toggled").removeClass("dropdown-toggle");
        $(".logo_name").hide();
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        $("#content").addClass("closed").removeClass("opened");
    }
}

$("#log_out").on("click", function () {
    alert("log out!");
});

$("#range-year1").on('input', function () { CalcProfit(); });
$("#range-year2").on('input', function () { CalcProfit(); });
$("#input-futprice").on('input', function () { CalcProfit(); });
$("#input-purprice").on('input', function () { CalcProfit(); });
$("#input-invest").on('input', function () { CalcProfit(); });
$("#input-apy").on('input', function () { CalcProfit(); });
$("#max-btn").on('click', function () { CalcProfit(); });
$("#curr1").on('click', function () { CalcProfit(); });
$("#curr2").on('click', function () { CalcProfit(); });

async function CalcProfit() {
    var purchasePrice = Number($('#input-purprice').val());
    var futurePrice = Number($('#input-futprice').val());
    var daysY1 = Number($("#range-year1").val());
    var amountES2 = Number($('#input-invest').val());
    var APY = Number(383125.80);

    const returnAmountY1 = amountES2 * Math.pow(1 + Number(APY) / (1 * 100), 1 * (daysY1 / 365));

    const initial = Math.round(((amountES2 * purchasePrice) + Number.EPSILON) * 100) / 100;
    const worth = Math.round(((amountES2 * currentPrice) + Number.EPSILON) * 100) / 100;
    const estimate = Math.round((returnAmountY1 - amountES2 + Number.EPSILON) * 100) / 100;
    const gains = Math.round(((returnAmountY1 * futurePrice - initial) + Number.EPSILON) * 100) / 100;

    $('#inv-initial').text("$" + formatter.format(initial));
    $('#inv-worth').text("$" + formatter.format(worth));
    $('#inv-estimate').text(formatter.format(estimate) + " ES2");
    $('#inv-gains').text("$" + formatter.format(gains));
    $('#inv-gainsbnb').text(formatter.format((gains / priceBnb)) + " BNB");
}