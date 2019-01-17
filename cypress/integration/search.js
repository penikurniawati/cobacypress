describe('Search Bar', function() {
    it('Visits Passpod', function() {
      Cypress.config()// ==>{defaultCommandTimeout}
      cy.visit(Cypress.env('BASE_URL'));
        
      //search
      cy.get('.input-group > .form-control').type("singapore")
      //klik button search
      cy.get('.input-group-append > .btn').click()
      //enter
      cy.get('.input-group > .form-control').type(`${'bangkok'}{enter}`) 
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})