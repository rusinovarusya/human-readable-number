module.exports = function toReadable (number) {
    let num = Number(number);

    let words = {
        1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
        10: "ten", 11: "eleven", 12: "twelve",
        13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
        20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
        100: "hundred", 1000: "thousand"
    };


    let getUnits = (n) => Math.floor(n % 10);
    let getDozens = (n) => Math.floor(n / 10) % 10;
    let getHundreds = (n) => Math.floor(n / 100) % 10;
    let getThousand = (n) => Math.floor(n / 1000) % 10;


    let t = getThousand(num);
    let h = getHundreds(num);
    let d = getDozens(num);
    let u = getUnits(num);

    if (!t && !h && !d && !u) return "zero";
    if (!t && !h && !d && u) return `${words[u]}`;
    if (!t && !h && d && !u) return `${words[d * 10]}`;
    if (!t && !h && d && u) {
        if (d == 1)`${words[d * 10 + u]}`
        else return `${words[d * 10]} ${words[u]}`;
    }

    if (!t && h && !d && !u) {
        return `${words[h]} hundred `;
    }
    if (!t && h && !d && u) {
        return `${words[h]} hundred ${words[u]}`;
    }
    if (!t && h && d && !u) {
        return `${words[h]} hundred and ${words[d * 10]}`;
    }
    if (!t && h && d && u) {
        if (d == 1)`${words[h]} hundred and ${words[d * 10 + u]}`;
        else return `${words[h]} hundred and ${words[d * 10]} ${words[u]}`;
    }

    if (t && !h && !d && !u) {
        if (t == 1) return `${t} thousand`;
        else return `${t} thousands`;
    }
    if (t && !h && !d && u) {
        if (t == 1) return `${words[t]} thousand ${words[u]}`;
        else return `${words[t]} thousands ${words[u]}`;
    }
    if (t && !h && d && !u) {
        if (t == 1) return `${words[t]} thousand ${words[d * 10]}`;
        else return `${words[t]} thousands ${words[d * 10]}`;
    }
    if (t && !h && d && u) {
        if (t == 1) {
            if (d == 1) return `${words[t]} thousand ${words[d * 10 + u]}`;
            else return `${words[t]} thousand ${words[d * 10]} ${words[u]}`;
        }
        else {
            if (d == 1) return `${words[t]} thousands ${words[d * 10 + u]}`;
            else return `${words[t]} thousands ${words[d * 10]} ${words[u]}`;
        }
    }

    if (t && h && !d && !u) {
        if (t == 1) return `${words[t]} thousand ${words[h]} hundred`;
        else return `${words[t]} thousands ${words[h]} hundred`;
    }
    if (t && h && !d && u) {
        if (t == 1) return `${words[t]} thousand ${words[h]} hundred ${words[u]}`;
        else return `${words[t]} thousands ${words[h]} hundred ${words[u]}`;
    }
    if (t && h && d && !u) {
        if (t == 1) return `${words[t]} thousand ${words[h]} hundred and ${words[d * 10]}`;
        else return `${words[t]} thousands ${words[h]} hundred and ${words[d * 10]}`;
    }
    if (t && h && d && u) {
        if (t == 1) {
            if (d == 1) return `${words[t]} thousand ${words[h]} hundred and ${words[d * 10 + u]}`;
            else return `${words[t]} thousand ${words[h]} hundred and ${words[d * 10]} ${words[u]}`;
        } else {
            if (d == 1) return `${words[t]} thousands ${words[h]} hundred and ${words[d * 10 + u]}`;
            else return `${words[t]} thousands ${words[h]} hundred and ${words[d * 10]} ${words[u]}`;
        }
    }

}
