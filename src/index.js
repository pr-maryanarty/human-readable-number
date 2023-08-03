function convertSingleDigit(digit) {
    switch (digit) {
        case 0: {
            return "zero";
        }
        case 1: {
            return "one";
        }
        case 2: {
            return "two";
        }
        case 3: {
            return "three";
        }
        case 4: {
            return "four";
        }
        case 5: {
            return "five";
        }
        case 6: {
            return "six";
        }
        case 7: {
            return "seven";
        }
        case 8: {
            return "eight";
        }
        case 9: {
            return "nine";
        }
    }
}
function convertFrom10To19(digit) {
    let b = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    return b[digit];
}

function convertTensDigit(first_digit) {
    let a = first_digit;
    let num = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    return num[a];
}

module.exports = function toReadable(number) {
    if (number.toString().length == 3) {
        let hundreds_number = Math.floor(number / 100);
        if (number % 100 <= 9 && number % 100 != 0) {
            let ones_digit = number % 100;
            return (
                convertSingleDigit(hundreds_number) +
                " hundred " +
                convertSingleDigit(ones_digit)
            );
        } else if (number % 100 == 0) {
            let ones_digit = number / 100;
            return convertSingleDigit(ones_digit) + " hundred";
        } else {
            let tens_number = number - hundreds_number * 100;
            return (
                convertSingleDigit(hundreds_number) +
                " hundred " +
                convertFrom0To99(tens_number)
            );
        }
    } else if (number.toString().length < 3) {
        return convertFrom0To99(number);
    }
};

function convertFrom0To99(number) {
    if (number.toString().length == 1) {
        return convertSingleDigit(number);
    } else if (number.toString().length == 2 && number >= 10 && number <= 19) {
        return convertFrom10To19(number);
    } else if (number.toString().length == 2 && number >= 20) {
        let tens_digit = Math.floor(number / 10) * 10;
        let ones_digit = number % 10;
        if (ones_digit == 0) {
            return convertTensDigit(tens_digit);
        } else {
            return (
                convertTensDigit(tens_digit) +
                " " +
                convertSingleDigit(ones_digit)
            );
        }
    }
}
