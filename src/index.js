module.exports = function toReadable (number) {
    let num = Number(number);

    let words = {
        1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
        10: "ten", 11: "eleven", 12: "twelve",
        13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
        20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
        100: "hundred"
    };


    let getUnits = (n) => Math.floor(n % 10);
    let getDozens = (n) => Math.floor(n / 10) % 10;
    let getHundreds = (n) => Math.floor(n / 100) % 10;

    let u = getUnits(num);
    let d = getDozens(num);
    let h = getHundreds(num);
    

    if (!h && !d && !u) return "zero";
    if (!h && !d && u) return `${words[u]}`;
    if (!h && d && !u) return `${words[d * 10]}`;
    if (!h && d && u) {
        if (d == 1) return `${words[d * 10 + u]}`
        else return `${words[d * 10]} ${words[u]}`;
    }

    if (h && !d && !u) {
        return `${words[h]} hundred`;
    }
    if (h && !d && u) {
        return `${words[h]} hundred ${words[u]}`;
    }
    if (h && d && !u) {
        return `${words[h]} hundred ${words[d * 10]}`;
    }
    if (h && d && u) {
        if (d == 1) return `${words[h]} hundred ${words[d * 10 + u]}`;
        else return `${words[h]} hundred ${words[d * 10]} ${words[u]}`;
    }

}
