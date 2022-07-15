// odds 1-20.
function odds(){
    for (var i = 1; i <= 20; i++) {
        let num = i % 2;
        if (num != 0) {
            console.log(i);
        }
    }
}

// nums evenly divisible by 3.
function divisibleBy3() {
    for (var i = 100; i >= 0; i--) {
        let num = i % 3;
        if (num == 0) {
            console.log(i);
        }
    }
}

// print the sequence. 
function printSequence() {
    let values = [4, 2.5, 1, -0.5, -2, -3.5];
    for (var i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}


// Sigma
function sigma() {
    let sum = 0;
    for( var i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

// Factorial
function factorial() {
    let product = 1;
    for( var i = 1; i <= 12; i++) {
        product = product * i;
    }
    console.log(product);
}

odds();
divisibleBy3();
printSequence();
sigma();
factorial();