describe('Add Attraction And Wifi To Cart Using Bank Transfer (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      //pilih attraction
      cy.get('div.slick-active div.dest-title:eq(1) > h1').click()
      cy.get('div.date-choose-wrap:contains("kedatangan") input').click()
      //cy.get('.react-datepicker__day--today + div').click()
      //for set and get today date
      var d = new Date();
      d.setDate(d.getDate() + 3);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(2) > .form-group > .form-control').select("09:00:00")
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()
      cy.get('.yellow').click()
      //kembali ke halaman home
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

      cy.get('.btn-wrap > .btn:visible()').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83643771553")
      cy.get('.panel-btn-payment > .btn').click()
      cy.wait(1000)
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  describe('Add Attraction And Wifi To Cart Using Bank Transfer Before Login (Staging)', function() {
    it('contains "Masuk"', () => {
        //cy.server();
        //cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL'));

        cy.wait(1000)
        cy.get('.slick-current > :nth-child(1) > #topBox > a > :nth-child(1) > .destination-box > img').click()
        cy.get('.col-lg-9 > .row > :nth-child(2)').click()
        cy.wait(1000)
        cy.get('div.dest-box div.dest-title:eq(2)').click()

        cy.get('.orange-input').click()
        cy.get('.react-datepicker__day--keyboard-selected').click()

        cy.get('#btnSelect').click()
        cy.get(':nth-child(2) > .form-group > .form-control').select("19:00:00")
        cy.get('.user-input-form > .form-group > .form-control').click()
        cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get(':nth-child(2) > .nbr-form-wrap > .max').click()
        cy.get('#btnOk').click()
        cy.get('.yellow').click()

        cy.wait(1000)
        cy.get('.brand > img').click()
        cy.wait(1000)

        cy.get('div.slick-active div.wifi-title:eq()').click()
        cy.get('#qty').select('4')
        //cy.get('div.form-group:contains("Tanggal selesai")input').click()
        cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai")').click()
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 7);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
        //cy.get('.react-datepicker__day--keyboard-selected + div + div + div').click()
        //Jumlah Qty
        cy.get('#qty').select("2")
        cy.get(':nth-child(6) > .form-group > #country').select("MANDIRI")
        cy.get(':nth-child(7) > .form-group > #acnNumber').type('1234567890')
        cy.get(':nth-child(8) > .form-group > #acnNumber').type('Jojo')
        cy.get('#self').click()
        //cy.get('#selfTwo').click()
       
        //pengembalian di bandara
       cy.get('#airportTwo').click()
       cy.get('#terminalTwo').select('Terminal 2 Bandara Soekarno Hatta')
       cy.get('div.form-group:contains("Tanggal Pengembalian") input').click()
       cy.get('.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range').click()
       // cy.get('#timeTwo').select("08:00")
       // cy.get('#collapseAirportTwo > .form-collapse-wrap > .row > :nth-child(3) > .form-group > .select-group > :nth-child(3)').select("10:00")
       cy.get('#timeBefore2').select("10:00")
       cy.get('#timeAfter2').select("13:00")
       
       cy.get(':nth-child(4) > .payment-wrap > .btn').click()
       cy.wait(1000)
        cy.get('.btn-wrap > .btn:visible()').click()

        cy.wait(1000)
        //user must login first
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
            
            cy.get('input[type=password]').type(`${'242210'}`)  
        })
        cy.get('form > .btn-orange:visible').click()
        cy.get(':nth-child(5) > .input-group > .form-control').type("8765432190")
        cy.get('.panel-btn-payment > .btn').click()
        cy.wait(1000)
        //Details payment
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