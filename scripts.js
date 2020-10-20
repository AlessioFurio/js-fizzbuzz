// stampa numeri da 1 a 100
// per i multipli di 3 stampi fizz
// per i multipli di 5 stampi buzz
// per i multipli di 3 e 5 stampi fizzBuzz

// var numeri = [];
// var modulo3 = 0;
// var modulo5 = 0;
//
// for (var i = 1; i <= 100; i++) {
//     numeri.push(i);
// }
//
// for (var i = 0; i < numeri.length; i++) { // leggo array da 1 a 100
//
//     modulo3 = numeri[i] % 3;
//     modulo5 = numeri[i] % 5;
//
//     if (modulo3 == 0 && modulo5 ==0) {
//         numeri[i] = 'FizzBuzz';
//     }
//
//     else if (modulo5 == 0 ) {
//        numeri[i] = 'Buzz';
//     }
//
//     else if (modulo3 == 0 ) {
//        numeri[i] = 'Fizz';
//     }
//
//     console.log(numeri[i]);
// }


//**********senza array***********


var modulo3 = 0;
var modulo5 = 0;

for (var i = 1; i < 100; i++) { // leggo array da 1 a 100

    modulo3 = i % 3;
    modulo5 = i % 5;

    if (modulo3 == 0 && modulo5 == 0) {
        console.log('fizzbuzz');

    }

    else if (modulo5 == 0 ) {
       console.log('Buzz');
    }

    else if (modulo3 == 0 ) {
       console.log('Fizz');
    }

    console.log(i);
}
