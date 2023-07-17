const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const formatterThreeDec = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
});

const formatterNoDec = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const formatterOneDec = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
});

Number.prototype.FromGwei = function () {
    return this / Math.pow(10, 9);
};

Number.prototype.ToGwei = function () {
    return this * Math.pow(10, 9);
};

function diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return diff;

}
function RemoveDuplicatesFromArray(array) {
    var unique = [];
    $.each(array, function (i, el) {
        if ($.inArray(el, unique) === -1) unique.push(el);
    });

    return unique;
}

Number.prototype.FromDec = function () {
    return this / Math.pow(10, 5);
};

Number.prototype.ToDec = function () {
    return this * Math.pow(10, 5);
};

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function uniq(a) {
    var prims = { "boolean": {}, "number": {}, "string": {} }, objs = [];

    return a.filter(function (item) {
        var type = typeof item;
        if (type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}


$(`a[href]`).on('click', function (e) {
    var target = $(this).attr("target");
    if (target === undefined) {        
        if (this.href.includes("https://app.arkfi.io")) {
            e.preventDefault();
            location.href = this.href + location.search;
        }        
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}