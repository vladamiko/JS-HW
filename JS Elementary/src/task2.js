'use strict'

/* Task 2 */

function Envelope (height, width, number) {
    this.height = height;
    this.width = width;
    this.number = number;
}

function task2 (envelope1, envelope2) {
    let errorMessage = preValidateTask2(envelope1, envelope2),
        result;

    if (!errorMessage) {
        result = analyseEnvelops(envelope1, envelope2);
    } else {
        result = {status: 'failed', reason: errorMessage};
    }

    return result;
}

function analyseEnvelops (envelope1, envelope2) {
    let result = 0;

    if (firstIsSmaller(envelope1, envelope2)) {
        result = envelope1.number;
    } else if (firstIsSmaller(envelope2, envelope1)) {
        result = envelope2.number;
    }

    return result;
}

function firstIsSmaller (envelope1, envelope2) {
    return envelope1.height < envelope2.height && envelope1.width < envelope2.width ||
        envelope1.height < envelope2.width && envelope1.width < envelope2.height;
};

function preValidateTask2 (envelope1, envelope2) {
    let errorMessage = '';

    if (!envelope1 || !envelope2) {
        errorMessage = 'please, enter all the arguments';
    } else if ((!envelope1.height || !envelope1.width || !envelope1.number) ||
        (!envelope2.height || !envelope2.width || !envelope2.number)) {
        
        errorMessage = 'envelope1 and/or envelope2 doesn\'t contain all the properties';
    } else if ((typeof envelope1.height !== 'number' || typeof envelope1.width !== 'number') ||
        (typeof envelope2.height !== 'number' || typeof envelope2.width !== 'number') ||
        (typeof envelope1.number !== 'number' || typeof envelope2.number !== 'number')) {
        
        errorMessage = 'envelope1 and/or envelope2 contain wrong properties - not a number';
    }

    return errorMessage;
}