describe('Booking Wifi Using Credit Card', function() {
    it('Visits Passpod', function() {
      cy.visit('https://passpod.com/')

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
      d.setDate(d.getDate() + 2);
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
      cy.get('#airportTwo').click()
      cy.get('#terminalTwo').select('Terminal 2 Bandara Soekarno Hatta')
      cy.get('div.form-group:contains("Tanggal Pengembalian") input').click()
      cy.get('.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range').click()
      cy.get('#timeTwo').select("08:00")
      cy.get('#collapseAirportTwo > .form-collapse-wrap > .row > :nth-child(3) > .form-group > .select-group > :nth-child(3)').select("10:00")

      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
      cy.get('.panel-btn-payment > .btn').click()

      //input kartu kredit
      cy.get('.col-xl-4 > .input-group > .form-control').type("4141414141414141")
      cy.get(':nth-child(2) > .input-group > .form-control').type("12/19")
      cy.get(':nth-child(3) > .input-group > .form-control').type("123")

      cy.get('.payment-input > .form-control').type("awkarin")
      cy.get(':nth-child(1) > .ck-right-wrap > .panel-payment-white > .btn').click()
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