describe('Create Itinerary (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_STAGING'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login 
      //pilih attraction
      cy.get(':nth-child(3) > :nth-child(1) > .member-link').click()
      cy.get('.form-wrap > :nth-child(1) > .form-control').type("My Trip")
      //ini buat pilih destinasi
      cy.get('.form-wrap > :nth-child(2) > .form-control').click()
      cy.get('#head885e90a3-a83d-56d3-b5e8-040b4017c825').click()
      cy.get('#dest885e90a3-a83d-56d3-b5e8-040b4017c825 > :nth-child(1)').click()

      cy.get('.form-wrap > :nth-child(3) > .btn').click()
      cy.get(':nth-child(1) > :nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
      cy.get('.react-datepicker__day--keyboard-selected').click()
      cy.get(':nth-child(2) > :nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
      //for set and get today date
       var d = new Date();
       d.setDate(d.getDate() + 5);
       cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
       cy.get('.text-center > .btn').click()

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