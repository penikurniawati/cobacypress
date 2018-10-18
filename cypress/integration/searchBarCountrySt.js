describe('Search Bar In Country (Staging)', function() {
    it('Visits Passpod', function() {
      Cypress.config()// ==>{defaultCommandTiemout}
      cy.visit(Cypress.env('BASE_URL'));
        
      //selesai login
      cy.get('.input-group > .form-control').click()
      cy.get('.link-category:contains("Asia")').trigger('mouseover')
      cy.get('.city-link-wrap a:contains("Singapore")').click()
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})