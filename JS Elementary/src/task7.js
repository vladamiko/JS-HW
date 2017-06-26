'use strict'

function task7 (context) {
    let errorMessage = preValidateTask7(context),
        result;

    if (!errorMessage) {
        result = findFibonacci(context);
    } else {
        result = {status: 'failed', reason: errorMessage};
    }

    return result;
}

function findFibonacci (context) {
    let fibList = [],
        a = 1, b = 1,
        c;

    while (b < context.max ) {
        if (b > context.min) {
            fibList.push(b);
        }
        c = a + b;
        a = b;
        b = c;
    }

    return fibList;
}

function preValidateTask7 (context) {
    let errorMessage = '';

    if (!context) {
        errorMessage = 'please, enter the argument';
    } else if (!context.min || !context.max) {
        errorMessage = 'context doesn\'t contain min and/or max';
    } else if (typeof context.min !== 'number' || typeof context.max !== 'number') {
        errorMessage = 'context.min and/or context.max are not a number';
    } else if (context.min >= context.max) {
        errorMessage = 'context.min must be less than the context.max';
    }

    return errorMessage;
}