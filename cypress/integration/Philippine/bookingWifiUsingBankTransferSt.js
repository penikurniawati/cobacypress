describe('Booking Wifi Using Bank Transfer PH (Staging)', function() {
    it('Visits Passpod', function() {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL_PH'));

      //masuk ke halaman login
      cy.get('[href="en/login"]').click()
      cy.get('input[type=text]').type('testingqaph@gmail.com')
      cy.get('input[type=password]').type('testingph12345')
      cy.get('form').find('button').contains('Login').click()
      cy.wait(1000)
        
      //selesai login
      //pilih wifi
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      //memasukkan data wifi
      cy.get('div.form-group:contains("Start Date") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 4);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#qty').select("2")
      cy.get('div.form-group:contains("Choose your Bank") select'). select("BCA")
      cy.get('div.form-group:contains("Account Number") input'). type("1234567")
      //pengambilan oleh kurir
      cy.get('#courier').click()
      cy.get('#address').type("Alaska")
      cy.get('#province').select("APAYAO")
      cy.get('#city').select("FLORA")
      cy.get('#district').select("ATOK")
      cy.get('#collapseCourier > .form-collapse-wrap > .row > :nth-child(5) > .form-group > .form-control').type("Babaq, Alaska")
      cy.get('#post').type('65754')

      //ini button mulai bayar
      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()

      //pilih bank transfer
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  describe('Booking Wifi Using Bank Transfer PH Before Login (Staging)', function() {
    it('Visits Passpod', function() {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL_PH'));

      //pilih wifi
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      //memasukkan data wifi
      cy.get('div.form-group:contains("Start Date") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 4);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#qty').select("2")
      cy.get('div.form-group:contains("Choose your Bank") select'). select("BCA")
      cy.get('div.form-group:contains("Account Number") input'). type("1234567")
      cy.get('div.form-group:contains("Account Name") input'). type("Testing PH")
      //pengambilan oleh kurir
      cy.get('#courier').click()
      cy.get('#address').type("Alaska")
      cy.get('#province').select("APAYAO")
      cy.get('#city').select("FLORA")
      cy.get('#district').select("ATOK")
      cy.get('#collapseCourier > .form-collapse-wrap > .row > :nth-child(5) > .form-group > .form-control').type("Babaq, Alaska")
      cy.get('#post').type('65754')

      //ini button mulai bayar
      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
      cy.wait(1000)

      //diarahkan ke halaman login terlebih dahulu
      cy.get('input[type=text]').type('testingqaph@gmail.com')
      cy.get('input[type=password]').type('testingph12345')

      //kembali ke halaman checkout
      cy.get('form').find('button').contains('Login').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()

      //pilih bank transfer
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