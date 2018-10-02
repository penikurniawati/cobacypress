describe('Profile', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_LIVE'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
     cy.get('#dropdownProfile').click()
     cy.get(':nth-child(1) > .dropdown-item').click()
     cy.get('form > :nth-child(2) > :nth-child(1) > .form-control').clear()
     cy.get('form > :nth-child(2) > :nth-child(1) > .form-control').type("Kurniawati")
     cy.get('form > .btn').click()
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})