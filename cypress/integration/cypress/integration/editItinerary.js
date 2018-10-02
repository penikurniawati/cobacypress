describe('Edit Itinerary', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_LIVE'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login 
      //pilih buat jadwal
      cy.get(':nth-child(3) > :nth-child(1) > .member-link').click()

      //pilih salah satu nama jadwal
      cy.get('.edit-wrap > span').click()
      cy.get('.form-inline > .form-control').clear()
      cy.get('.form-inline > .form-control').type("Fun Trip")
      cy.get('.edit-wrap > div > :nth-child(2)').click()
    })
  })
  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})