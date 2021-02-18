///<reference types="cypress"/>

it('A external test...', () => {

})

describe('Should group test...', () =>{
    describe('Should group more specific test...', () =>{
        it('A specific test...', () => {

        })
    })
    
    describe('Should group moe specific test...', () =>{
        it('A specific  test 2...', () => {

        })
    })

    it('A internal test...', () => {

    })
});