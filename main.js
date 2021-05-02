// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];


// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = array => {
    let finalArray = [];
    // checking from last if every other digit is odd or even and only doubling the element if even, and additional check added if element is over 9;
    for (let i = array.length - 1; i >= 0; i--) {
        if (((array.length - i) % 2) === 0) {
            finalArray.unshift(array[i] * 2);
            if (finalArray[0] > 9) {
                finalArray[0] -= 9;
            }
        } else {
            finalArray.unshift(array[i]);
        }
    }
    let arraySum = finalArray.reduce((acc, currVal) => acc + currVal);
    return (arraySum % 10 === 0);
};

const findInvalidCards = arrays => {
    // pushing only those element from arrays which return false as a return value of invoking validateCred() on arrays;
    let invalidCard = [];
    for (let array of arrays) {
        if (!validateCred(array)) {
            invalidCard.push(array);
        };
    }
    return invalidCard;
};

const idInvalidCardCompanies = invalidNumArrays => {
    // pushing elements to companiesArray as per the condition of first digit of cards;
    let companiesArray = [];
    for (let invalidNumArray of invalidNumArrays) {
        switch (invalidNumArray[0]) {
            case 3:
                if (companiesArray.indexOf('Amex (American Express)') === -1) {
                    companiesArray.push('Amex (American Express)');
                }
                break;
            case 4:
                if (companiesArray.indexOf('Visa') === -1) {
                    companiesArray.push('Visa');
                }
                break;
            case 5:
                if (companiesArray.indexOf('Mastercard') === -1) {
                    companiesArray.push('Mastercard');
                }
                break;
            case 6:
                if (companiesArray.indexOf('Discover') === -1) {
                    companiesArray.push('Discover');
                }
                break;
            default:
                console.log('Company not found');
                break;

        }
    }
    return companiesArray;

};

// // Test functions:
// console.log(validateCred(valid1)); // Should print true
// console.log(validateCred(invalid1)); // Should print false

// // Test function
// console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
// console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

// console.log(findInvalidCards(batch)); // Test what the mystery numbers are


// console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
// console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
// console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards

const creditCardGenerator = string => {
    let creditCardArray = string.split('');
    for (let char of creditCardArray) {
        char = parseInt(char);
    }
    return creditCardArray;
};



const toCheck1 = creditCardGenerator('4485083402414850');
const toCheck2 = creditCardGenerator('4539258714408396');
const toCheck3 = creditCardGenerator('5352660860710239');
const toCheck4 = creditCardGenerator('5323815806822920');
const toCheck5 = creditCardGenerator('348314578500999');
const toCheck6 = creditCardGenerator('345802788822743');
const toCheck7 = creditCardGenerator('6011585739820474');
const toCheck8 = creditCardGenerator('6011201543373824967');

const toCheck = [toCheck1, toCheck2, toCheck3, toCheck4, toCheck5, toCheck6, toCheck7, toCheck8];

const checked = array => {
    let checkedArray = {};
    for (let i = 0; i < array.length; i++) {
        checkedArray[array[i]] = validateCred(array[i]);
    }
    return checkedArray;
};
// Test function
// console.log(checked(toCheck));

// function to convert invalid number to valid number
const toValid = invalidArray => {
    let finalArray = [];
    // checking from last if every other digit is odd or even and only doubling the element if even, and additional check added if element is over 9;
    for (let i = invalidArray.length - 1; i >= 0; i--) {
        if (((invalidArray.length - i) % 2) === 0) {
            finalArray.unshift(invalidArray[i] * 2);
            if (finalArray[0] > 9) {
                finalArray[0] -= 9;
            }
        } else {
            finalArray.unshift(invalidArray[i]);
        }
    }
    const arraySum = finalArray.reduce((acc, currVal) => acc + currVal);
    const differenceToValid = arraySum % 10;
    let i = 0;
    while ((finalArray[i] + differenceToValid) > 9) {
        finalArray[i] += differenceToValid;
    }
    const validSum = arraySum - differenceToValid;
    return differenceToValid;
};
console.log(toValid(invalid1));
console.log(toValid(invalid2));
console.log(toValid(invalid3));
console.log(toValid(invalid4));
console.log(toValid(invalid5));