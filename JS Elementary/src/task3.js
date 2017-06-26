'use strict'

function task3 (trianglesList) {
    let errorMessage = preValidateTask3(trianglesList),
        result;

    if (!errorMessage) {
        result = sortTriangles(trianglesList);
    } else {
        result = {status: 'failed', reason: errorMessage};
    }

    return result;
}

function sortTriangles (trianglesList) {
    let namesList = [];

    trianglesList.forEach((triangle) => findSquareTriangle(triangle));

    trianglesList.sort((a, b) => b.square - a.square);

    trianglesList.forEach((triangle) => namesList.push(triangle.vertices));

    return namesList;
}

function findSquareTriangle (triangle) {
    let p, s;

    p = (triangle.a + triangle.b + triangle.c) / 2;
    s = Math.sqrt(p * (p - triangle.a) * (p - triangle.b) * (p - triangle.c));
    triangle.square = s;
    
    return s;
}

function preValidateTask3 (trianglesList) {
    let errorMessage = '';

    if (!trianglesList) {
        errorMessage = 'please, enter the argument';
    } else if (!Array.isArray(trianglesList)) {
        errorMessage = 'argument is not an array';
    } else {
        for (let i = 0; i < trianglesList.length; i++) {
            if (!trianglesList[i].vertices) {
                errorMessage = 'please, enter all the vertices of all the triangles';
            } else if (!trianglesList[i].a || !trianglesList[i].b || !trianglesList[i].c) {
                errorMessage = 'please, enter all the sides of all the triangles';
            } else if (typeof trianglesList[i].a !== 'number' || typeof trianglesList[i].b !== 'number' || typeof trianglesList[i].c !== 'number') {
                errorMessage = 'one or more of the sides contain not a number value';
            }
        } 
    }

    return errorMessage;
}