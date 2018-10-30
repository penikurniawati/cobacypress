describe('Add Wifi Extend to Cart Using Bank Transfer (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      cy.get('.btn-index-wrap > div > .btn').click()
      cy.get('.wf-btn-wrap > div > .btn').click()
      cy.get('.input-group-append > .form-control').type("UR218512")
      cy.get('.form-group > .input-group-append > .btn').click()
      cy.get('#country').select("4G Wifi for Canada")
      cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 2);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get(':nth-child(1) > .payment-wrap > .btn').click()

      cy.wait(1000)
      cy.get('.btn-wrap > .btn:visible()').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83643771553")
      cy.get('.panel-btn-payment > .btn').click()
      cy.wait(1000)
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  describe('Add Wifi Extend to Cart Using Bank Transfer Before Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));
    
      //selesai login
      cy.get('.btn-index-wrap > div > .btn').click()
      cy.get('.wf-btn-wrap > div > .btn').click()
      cy.get('.input-group-append > .form-control').type("UR218512")
      cy.get('.form-group > .input-group-append > .btn').click()
      cy.get('#country').select("4G Wifi for Canada")
      cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 2);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get(':nth-child(1) > .payment-wrap > .btn').click()
      cy.wait(3000)
      //masuk ke halaman login
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()

      cy.wait(1000)
      cy.get('.btn-wrap > .btn:visible()').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83643771553")
      cy.get('.panel-btn-payment > .btn').click()
      cy.wait(3000)
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })
  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})