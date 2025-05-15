describe('Test Suite', function(){
    it('Test Case #1', function(){
	    cy.log('Hola Mundo')
    })
})


before(function(){
    cy.log('Execute BEFORE')
})

after(function(){
    cy.log('Execute AFTER GLOBAL')
})

beforeEach(function(){
    cy.log('Execute befote CADA IT')
})

afterEach(function(){
    cy.log('Execute after CADA IT ')
})

