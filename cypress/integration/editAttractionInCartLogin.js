describe('Edit Attraction In Cart', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login 
      cy.get('.cart-list > a > img').click()
      
      cy.get('.act > :nth-child(1)').click()
      cy.get('.react-datepicker__input-container > .form-control').click()
      //cy.get(':nth-child(5) > .react-datepicker__day--tue').click()
      var d = new Date();
       d.setDate(d.getDate() + 6);
       cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()

      cy.get(':nth-child(4) > .form-control').click()
      cy.get('.user-wrap > :nth-child(1) > .max').click()
      cy.get('.user-wrap > .btn').click()
      cy.get(':nth-child(4) > .form-control').click()
      cy.get(':nth-child(5) > .btn').click()
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})