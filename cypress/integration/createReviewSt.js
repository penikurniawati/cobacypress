describe('Create Review In Attraction (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      //pilih attraction
      cy.get('div.slick-active div.dest-title:eq(0) > h1').click()
      cy.get('.more-wrap > div > a').click()
      cy.get('.write').click()
      cy.get('[for="rating1create"]').click()
      cy.get('[for="rating2create"]').click()
      cy.get('[for="rating3create"]').click()
      cy.get('form > :nth-child(2) > .form-control').type("Bagus")
      cy.get(':nth-child(3) > .form-control').type("Atraksi menyenangkan")
      cy.get(':nth-child(4) > .btn').click()
    })
  })
  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})