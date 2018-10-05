describe('Booking Attraction Using Invalid Data', function() {
    it('Visits Passpod', function() {
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
      cy.get('.react-datepicker__day--keyboard-selected + div + div').click()
      cy.get('#qty').select("2")
      cy.get('div.form-group:contains("Pilih Nama Bank") select'). select("BCA")
      cy.get('div.form-group:contains("Nomor Rekening") input'). type("qwert")
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
      cy.get('#timeTwo').select("10:00")
      cy.get('#collapseAirportTwo > .form-collapse-wrap > .row > :nth-child(3) > .form-group > .select-group > :nth-child(3)').select("10:00")

      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})