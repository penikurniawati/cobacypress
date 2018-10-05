describe('Add Attraction And Wifi To Cart', function() {
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

  describe('Cart', function() {
    it('contains "Masuk"', () => {
        //cy.server();
        //cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL'));

        cy.get('.cart-list > a > img').click()
        cy.get('.btn-wrap > div > .btn').click()
        cy.get('.btn-index-wrap > div > .btn').click()
        cy.get(':nth-child(1) > .form-group > #country').select("Wifi Hong Kong Package 5 Days")
        cy.get('#qty').select("3")

        //start date
        cy.get(':nth-child(3) > .form-group > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        var d = new Date();
        d.setDate(d.getDate() + 10);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()

        //end date
        cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
        var d = new Date();
        d.setDate(d.getDate() + 15);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()

        cy.get('div.form-group:contains("Pilih Nama Bank") select').select("CIMB NIAGA")
        cy.get(':nth-child(7) > .form-group > #acnNumber').type('1234567890')
        cy.get(':nth-child(8) > .form-group > #acnNumber').type('John Doe')

        cy.get('#self').click()
        cy.get('#selfTwo').click()

        cy.get(':nth-child(3) > .payment-wrap > .btn').click()
        cy.get('.box-btn-wrap > div > .btn').click()

        cy.wait(1000)
        cy.get('div.slick-active div.dest-title:eq(1) > h1').click()
        cy.wait(1500)
        cy.get(':nth-child(5) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(1) > .form-group > :nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()

        var d = new Date();
        d.setDate(d.getDate() + 15);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()

        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()

        cy.get('.yellow').click()
        cy.wait(1000)
        cy.get('.btn-wrap > .btn:visible').click()
    })
})
  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})