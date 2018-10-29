describe('Booking Wifi Using Bank Transfer and voucher (Staging)', function() {
    it('Visits Passpod', function() {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      //pilih wifi
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      //memasukkan data wifi
      cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 4);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#qty').select("2")
      cy.get('div.form-group:contains("Pilih Nama Bank") select'). select("BCA")
      cy.get('div.form-group:contains("Nomor Rekening") input'). type("1234567")
      //pengambilan oleh kurir
      cy.get('#courier').click()
      cy.get('#address').type("Griya Mahkota, Gamping")
      //cy.get('#collapseCourier > .form-collapse-wrap > .row > :nth-child(3) > .form-group:contains("Provinsi") select').click()
      cy.get('#province').select("DI YOGYAKARTA")
      //cy.get('div.form-group:contains("Kota") select').click({multiple: true})
      cy.get('#city').select("KAB. SLEMAN")
      //cy.get('div.form-group:contains("Kecamatan") select').click({multiple: true})
      cy.get('#district').select("GAMPING")
      cy.get('#collapseCourier > .form-collapse-wrap > .row > :nth-child(5) > .form-group > .form-control').type("Jalan Kabupaten")
      cy.get('#post').type('65754')

      //pengembalian di bandara
      cy.get('#courierTwo').click()
      cy.get('.form-check-input').click()

    //   //--- ini button mulai bayar
      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()

    //   cy.get(':nth-child(4) > label > :nth-child(1)').click()
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get('.payment-input > .form-control').type("free")
      cy.get(':nth-child(1) > .ck-right-wrap > .panel-payment-white > .btn').click()
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    //   //cy.get(':nth-child(1) > .ck-right-wrap > .panel-payment-white > .btn').click()
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