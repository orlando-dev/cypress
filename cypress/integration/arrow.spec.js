const { it } = require("mocha");

it('nada agora', function() { })

// function soma(a, b){
//     return a + b;
// }

// const soma = function (a , b){
//     return a + b;
// }

// const soma = (a , b) => a + b

// const soma = (a, b) => {
//     return(a+b);
// }

// const soma = (a) => a + a

// const soma = a => a + a;

const soma = () => 5 + 5

console.log(soma(3,4))

it('a function test...', function() {
    console.log('Function', this)
})

it('a arrow test...', () => {
    console.log('Arrow', this)
})