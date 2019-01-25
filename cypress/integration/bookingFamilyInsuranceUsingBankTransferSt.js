describe('Booking Family Insurance Using Bank Transfer (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

        //masuk ke halaman login
      cy.get('[href="id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      cy.get('.col-6 > div > .btn').click()
      cy.get(':nth-child(1) > .row > :nth-child(2) > .radio-btn > input').click()
      cy.get(':nth-child(2) > .row > :nth-child(2) > .radio-btn > input').click()
      cy.get(':nth-child(1) > .input-group > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
      var d = new Date();
      d.setDate(d.getDate() + 3);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get(':nth-child(2) > .input-group > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
      var d = new Date();
      d.setDate(d.getDate() + 5);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get(':nth-child(3) > :nth-child(2) > .btn').click()
    //   cy.get('.action > .btn').click()
      cy.wait(3000)
      cy.get('div.slick-active div.action:eq(2) > button').click()
    //   cy.get('.form-group > .input-group > .form-control').type("Gamping, Yogyakarta")
    //   cy.get('.panel-body > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type("Yogyakarta")
    //   cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .form-control').type("11211")
    //   cy.get(':nth-child(3) > :nth-child(3) > .input-group > .form-control').type("8767816111")
    //   cy.get(':nth-child(4) > :nth-child(1) > .input-group > .form-control').type("AH119822")
    //   cy.get(':nth-child(4) > :nth-child(2) > .input-group > .form-control').select("Wanita")
    //   cy.get('#insurance-city-info > .input-group > .form-control').type("Sakura")
    //   cy.get(':nth-child(5) > :nth-child(2) > .input-group > .form-control').type("Kamboja")
    //   cy.get(':nth-child(6) > :nth-child(1) > .input-group > .form-control').type('War')
    //   cy.get(':nth-child(6) > :nth-child(2) > .input-group > .form-control').select("Adik")
    //   cy.get('.checkbox > input').click()
    //   cy.get(':nth-child(4) > :nth-child(2) > .btn').click()
    //   cy.get(':nth-child(5) > .input-group > .form-control').type("083869056900")
    //   cy.get('.panel-btn-payment > .btn').click()
    //   //pembayaran Bank transfer
    //   cy.get('#bank').click()
    //   cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})