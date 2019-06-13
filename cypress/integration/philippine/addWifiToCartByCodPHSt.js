describe('Add Wifi To Cart By Cod PH (Staging)', function() {
    it('Visits Passpod', function() {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL_PH'));

      //masuk ke halaman login
      cy.get('[href="en/login"]').click()
      cy.get('input[type=text]').type('testingqaph@gmail.com')
      cy.get('input[type=password]').type('testingph12345')
      cy.get('form').find('button').contains('Login').click()
      cy.wait(2000)
        
      //selesai login
      //pilih wifi
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      //memasukkan data wifi
      cy.get('div.form-group:contains("Start Date") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 2);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#qty').select("2")
      cy.get('div.form-group:contains("Choose your Bank") select'). select("Citibank, N.A.")
      cy.get('div.form-group:contains("Account Number") input'). type("1234567")
      //pengambilan oleh kurir
      cy.get('#courier').click()
      cy.get('#address').type("Alaska")
      cy.get('#province').select("APAYAO")
      cy.get('#city').select("FLORA")
      cy.get('#district').select("ATOK")
      cy.get('#collapseCourier > .form-collapse-wrap > .row > :nth-child(5) > .form-group > .form-control').type("Babaq, Alaska")
      cy.get('#post').type('65754')
      cy.get(':nth-child(3) > .payment-wrap > .btn').click()

      //ini button mulai bayar
      cy.wait(1000)
      cy.get('.btn-wrap > .btn:visible()').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()

      //pilih cod
      cy.get('#codpayment').check() //radio button dengan id: codpayment
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
      cy.get('.btn-wrap > div > .btn').click()
    })
  })

  describe('Add Wifi To Cart By Cod PH Before Login (Staging)', function() {
    it('Visits Passpod', function() {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL_PH'));

      //pilih wifi
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      //memasukkan data wifi
      cy.get('div.form-group:contains("Start Date") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 2);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#qty').select("2")
      cy.get('div.form-group:contains("Choose your Bank") select'). select("Citibank, N.A.")
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

      //masukkan ke keranjang
      cy.get(':nth-child(3) > .payment-wrap > .btn').click()

      //ini button mulai bayar
      cy.wait(1000)
      cy.get('.btn-wrap > .btn:visible()').click()

      //diarahkan ke halaman login terlebih dahulu
      cy.get('input[type=text]').type('testingqaph@gmail.com')
      cy.get('input[type=password]').type('testingph12345')

      //kembali ke halaman checkout
      cy.get('form').find('button').contains('Login').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.wait(2000)
      cy.get('.panel-btn-payment > .btn').click()
      cy.wait(2000)

      //pilih cod
      cy.get('#codpayment').check() //radio button dengan id: codpayment
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
      cy.get('.btn-wrap > div > .btn').click()
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})