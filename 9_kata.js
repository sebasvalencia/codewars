

/**
 
    Training JS #9:
    loop statement --while and do..while

    Coding in function ```padIt```, function accept 2  parameters:

    1.```str```,  it's a string representing the string to pad, we need pad some ```"*"``` at leftside or rightside of ```str```

    2.```n```, it's a number, how many times to pad the string.

    You need to write a loop statement within the function that loops n times. 
    Each time through the loop it will add one * to str, 
    alternating on which side it is padded: the first time will add a * to the left side of str,
    the second time will add a * to the right side, and so on.

 */


function padIt(str, n) {
    var cant = n / 2;
    var strn = "";

    while (cant > 0) {
        if (n == 1) {
            strn = '*' + str;
        }

        if (Number.isInteger(cant)) {
            strn = "*".repeat(cant) + str + "*".repeat(cant);
        } else {
            strn = "*".repeat(cant + 0.5) + str + "*".repeat(cant - 0.5);
        }
        cant = 0;
        return strn;
    }

}

function padIt(str, n) {
    while (n > 0) {
        if (n % 2 === 0) {
            str = str + "*";
        } else {
            str = "*" + str;
        }
        n--;
    }
    return str;
}

function padIt(str, n) {
    while (n > 0) {
        str = n-- % 2 ? '*' + str : str + '*';
    }
    return str;
}
