// describe('Booking Wifi Using Credit Card (Staging)', function() {
//     it('Visits Passpod', function() {
//         Cypress.config()// ==>{defaultCommandTiemout}
//         cy.visit(Cypress.env('BASE_URL'));

//       //masuk ke halaman login
//       cy.get('[href="id/login"]').click()
//       cy.get('input[type=text]').type('peni@skyshi.io')
//       cy.get('input[type=password]').type('penikurniawati')
//       cy.get('form').find('button').contains('Masuk').click()
        
//       //selesai login
//       //pilih wifi
//       cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
//       //memasukkan data wifi
//       cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
//       var d = new Date();
//       d.setDate(d.getDate() + 4);
//       cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
//       cy.get('#qty').select("2")
//       cy.get('div.form-group:contains("Pilih Nama Bank") select'). select("BCA")
//       cy.get('div.form-group:contains("Nomor Rekening") input'). type("1234567")
//       //pengambilan oleh kurir
//       cy.get('#courier').click()
//       cy.get('#address').type("Griya Mahkota, Gamping")
//       cy.get('#province').select("DI YOGYAKARTA")
//       cy.get('#city').select("KAB. SLEMAN")
//       cy.get('#district').select("GAMPING")
//       cy.get('#collapseCourier > .form-collapse-wrap > .row > :nth-child(5) > .form-group > .form-control').type("Jalan Kabupaten")
//       cy.get('#post').type('65754')

//       //pengembalian di bandara
//       cy.get('#airportTwo').click()
//       cy.get('#terminalTwo').select('Terminal 2 Bandara Soekarno Hatta')
//       cy.get('div.form-group:contains("Tanggal Pengembalian") input').click()
//       var d = new Date();
//       d.setDate(d.getDate() + 5);
//       cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      
//       cy.get('#timeBefore2').select("10:00")
//       cy.get('#timeAfter2').select("13:00")

//       //Pilih asuransi
//       cy.get('.insurance-box-checkbox > .checkbox > input').click()
//       cy.get('div.package input:eq(3)').click()
//       cy.get('#insurance-city-info > .form-group > .form-control').type("Sakura")
//       cy.get('.travel-data > .row > :nth-child(3) > .form-group > .form-control').type("Kamboja")
//       cy.get('#insurance-tac-check > .checkbox > input').click()
//       cy.get(':nth-child(5) > .payment-wrap > .btn').click()

//       cy.get('.form-group > .input-group > .form-control').type("Banyumili, Gamping, Sleman")
//       cy.get('.panel-body > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type("Yogyakarta")
//       cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .form-control').type("11211")
//       cy.get(':nth-child(3) > :nth-child(3) > .input-group > .form-control').type("83869056900")
//       cy.get(':nth-child(4) > :nth-child(1) > .input-group > .form-control').type("AA1176811")
//       cy.get(':nth-child(5) > :nth-child(1) > .input-group > .form-control').type("Alma")
//       cy.get('div.input-group:contains("Status") select').select("Adik")
//       cy.get('.col-sm-9 > .btn').click()

//       //ini button mulai bayar
//       cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
//       cy.get('.panel-btn-payment > .btn').click()

//       //input kartu kredit
//       cy.get('.col-xl-4 > .input-group > .form-control').type("4141 4141 4141 4141")
//       cy.get(':nth-child(2) > .input-group > .form-control').type("11/22")
//       cy.get(':nth-child(3) > .input-group > .form-control').type("123")
//       cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
//     })
//   })

  describe('Booking Wifi Using Credit Card Before Login(Staging)', function() {
    it('Visits Passpod', function() {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL'));

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
      cy.get('div.form-group:contains("Nama Rekening") input'). type("Peni Kurniawati")
      //pengambilan oleh kurir
      cy.get('#courier').click()
      cy.get('#address').type("Griya Mahkota, Gamping")
      cy.get('#province').select("DI YOGYAKARTA")
      cy.get('#city').select("KAB. SLEMAN")
      cy.get('#district').select("GAMPING")
      cy.get('#collapseCourier > .form-collapse-wrap > .row > :nth-child(5) > .form-group > .form-control').type("Jalan Kabupaten")
      cy.get('#post').type('65754')

      //pengembalian di bandara
      cy.get('#airportTwo').click()
      cy.get('#terminalTwo').select('Terminal 2 Bandara Soekarno Hatta')
      cy.get('div.form-group:contains("Tanggal Pengembalian") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 5);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      
      cy.get('#timeBefore2').select("10:00")
      cy.get('#timeAfter2').select("13:00")

      //Pilih asuransi
      cy.get('.insurance-box-checkbox > .checkbox > input').click()
      cy.get('div.package input:eq(3)').click()
      cy.get('#insurance-city-info > .form-group > .form-control').type("Sakura")
      cy.get('.travel-data > .row > :nth-child(3) > .form-group > .form-control').type("Kamboja")
      cy.get('#insurance-tac-check > .checkbox > input').click()
      cy.get(':nth-child(5) > .payment-wrap > .btn').click()

      cy.get('.panel-body > :nth-child(1) > :nth-child(1) > .input-group > .form-control').type("Peni")
      cy.get(':nth-child(1) > :nth-child(2) > .input-group > .form-control').type("Kurniawati")
      cy.get('.form-group > .input-group > .form-control').type("Banyumili, Gamping, Sleman")
      cy.get('.panel-body > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type("Yogyakarta")
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .form-control').type("11211")
      cy.get('.panel-body > :nth-child(3) > :nth-child(1) > .input-group > .form-control').type("peni@skyshi.io")
      cy.get(':nth-child(3) > :nth-child(3) > .input-group > .form-control').type("83869056900")
      cy.get(':nth-child(4) > :nth-child(1) > .input-group > .form-control').type("AA1176811")
      cy.get(':nth-child(4) > :nth-child(2) > .input-group > .form-control').select("Wanita")
      cy.get(':nth-child(5) > :nth-child(1) > .input-group > .form-control').type("Alma")
      cy.get('div.input-group:contains("Status") select').select("Adik")
      cy.get('.col-sm-9 > .btn').click()
      cy.wait(3000)

      //masuk ke halaman login
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()

      //ini masuk ke halaman order detail
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()

      //input kartu kredit
      cy.get('.col-xl-4 > .input-group > .form-control').type("4141 4141 4141 4141")
      cy.get(':nth-child(2) > .input-group > .form-control').type("11/22")
      cy.get(':nth-child(3) > .input-group > .form-control').type("123")
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  //ini untuk mengatasi error handler
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})