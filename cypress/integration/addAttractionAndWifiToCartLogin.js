describe('Add Attraction And Wifi To Cart', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_LIVE'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      //pilih attraction
      cy.get('div.slick-active div.dest-title:eq(0) > h1').click()
      cy.get('div.date-choose-wrap:contains("kedatangan") input').click()
      cy.get('.react-datepicker__day--today + div').click()
      cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()
      cy.get('.yellow').click()

      cy.get('.brand > img').click()
      //pilih wifi
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      //memasukkan data wifi
      cy.get('div.form-group:contains("Tanggal Mulai") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 4);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 6);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      //cy.get('.react-datepicker__day--keyboard-selected + div + div').click()
      cy.get('div.form-group:contains("Pilih Nama Bank") select'). select("BCA")
      cy.get('div.form-group:contains("Nomor Rekening") input'). type("1234567")
      cy.get('.payment-wrap:contains("TAMBAH KE KERANJANG") button').click()

      cy.wait(1000)
      cy.get('.cart-list > a > img:visible').click()

      cy.get('.btn-wrap > .btn').click()
      cy.get('.panel-btn-payment > .btn').click()
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