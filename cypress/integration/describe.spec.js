///<reference types="cypress"/>

it.skip('A external test...', () => {

})

describe('Should group test...', () =>{
    describe('Should group more specific test...', () =>{
        it('A specific test...', () => {

        })
    })
    
    describe('Should group moe specific test...', () =>{
        it.only('A specific  test 2...', () => {

        })
    })

    it.skip('A internal test...', () => {

    })
});