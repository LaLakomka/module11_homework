export function dataTypes(x) {

    if (typeof x === 'number') {
        return `${x}-число`;
    }
    else if (typeof x === 'string') {
        return`${x}-строка`; 
    }
    else {
        return `Тип ${x} не определён`;
    } 

}

dataTypes();