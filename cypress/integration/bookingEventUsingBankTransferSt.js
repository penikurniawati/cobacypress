describe('Booking Event Using Bank Transfer (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

        //masuk ke halaman login
      cy.get('[href="id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      cy.get('div.slick-active div.dest-type:eq(1) > span').click()
      cy.get('.col-md-4 > .btn').click()
      cy.get('.btn-plus').click()
      cy.get('.col-lg-3 > .btn').click()
      
    })
  })
  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})