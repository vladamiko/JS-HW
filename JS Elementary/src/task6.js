'use strict'

function task6 (n, m) {
    let errorMessage = preValidateTask6(n, m),
        result;

    if (!errorMessage) {
        result = findNaturalNumbers(n, m);
    } else {
        result = {status: 'failed', reason: errorMessage};
    }

    return result;
}

function findNaturalNumbers (n, m) {
    let naturalNumbers = [];
        
    for (let i = 1; i <= n; i++) {
        let square = Math.pow(i, 2);

        if (square > m) {
            naturalNumbers.push(i);
        }
    }

    return naturalNumbers.join(', ');
}

function preValidateTask6 (n, m) {
    let errorMessage = '';

    if (!n || !m) {
        errorMessage = 'please, enter all the arguments';
    } else if (typeof n !== 'number' || typeof m !== 'number') {
        errorMessage = 'n and/or m are not a numbers';
    }

    return errorMessage;
}