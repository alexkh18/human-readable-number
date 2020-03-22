module.exports = function toReadable (number) {
    const readableNumber = new Map([
        ['0', 'zero'],
        ['1', 'one'],
        ['2', 'two'],
        ['3', 'three'],
        ['4', 'four'],
        ['5', 'five'],
        ['6', 'six'],
        ['7', 'seven'],
        ['8', 'eight'],
        ['9', 'nine'],
        ['10', 'ten'],
        ['11', 'eleven'],
        ['12', 'twelve'],
        ['13', 'thirteen'],
        ['14', 'fourteen'],
        ['15', 'fifteen'],
        ['16', 'sixteen'],
        ['17', 'seventeen'],
        ['18', 'eighteen'],
        ['19', 'nineteen'],
        ['20', 'twenty'],
        ['30', 'thirty'],
        ['40', 'forty'],
        ['50', 'fifty'],
        ['60', 'sixty'],
        ['70', 'seventy'],
        ['80', 'eighty'],
        ['90', 'ninety'],
    ]);

    let result = [];

    const arrOfNumberDigits = number.toString().split('')

    if(arrOfNumberDigits.length === 3) {
        if(arrOfNumberDigits[2] === '0')  {
            arrOfNumberDigits[2] = 'without units';
        }
        result.push(`${readableNumber.get(arrOfNumberDigits[0])} hundred`);
        arrOfNumberDigits.shift();
    }

    if(arrOfNumberDigits.length === 2) {
        if(+arrOfNumberDigits[0] === 0) {
            arrOfNumberDigits.shift();
        } else if(+arrOfNumberDigits[0] === 1) {
            if(arrOfNumberDigits[1] === 'without units')  {
                arrOfNumberDigits[1] = '0';
            }
            const n = '1' + arrOfNumberDigits[1];
            result.push(`${readableNumber.get(n)}`);
            arrOfNumberDigits.shift();
            arrOfNumberDigits.shift();
        } else if(+arrOfNumberDigits[1] === 0) {
            const n = arrOfNumberDigits[0] + '0';
            result.push(`${readableNumber.get(n)}`);
            arrOfNumberDigits.shift();
            arrOfNumberDigits.shift();
        } else {
            const n = arrOfNumberDigits[0] + '0';
            result.push(`${readableNumber.get(n)}`);
            arrOfNumberDigits.shift();
        }
    }

    if(arrOfNumberDigits.length === 1 && arrOfNumberDigits[0] != 'without units') {
        result.push(`${readableNumber.get(arrOfNumberDigits[0])}`);
    }

    return result.join(' ');
}
