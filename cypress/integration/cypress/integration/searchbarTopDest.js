describe('Search Bar By Top Destination', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_LIVE'));

      //masuk ke halaman login
    //   cy.contains('Masuk').click({multiple: true}) 
    //   cy.get('input[type=text]').type('peni@skyshi.io')
    //   cy.get('input[type=password]').type('penikurniawati')
    //   cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      cy.get('.input-group > .form-control').click() 
      //ini untuk yang dipilih nama negara 
      //cy.get(':nth-child(2) > .link-category > .city-titl').click()
      //ini untuk yang dipilih semua
      //cy.get(':nth-child(2) > .link-category').click()
      cy.get('.topdest-wrap > :nth-child(1) > img').click()
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})