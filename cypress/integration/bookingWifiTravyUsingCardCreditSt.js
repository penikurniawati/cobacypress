describe('Booking Wifi Travy Using Credit Card (Staging)', function() {
    it('Visits Passpod', function() {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL_TRAVY'));

      //masuk ke halaman login
      cy.get('[href="id/login"]').click()
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
      //pengambilan di bandara
      cy.get('#terminal').select('Terminal 2 Bandara Soekarno Hatta')
      cy.get('div.form-group:contains("Tanggal Penerimaan") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 2);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#timeBefore1').select("10:00")
      cy.get('#timeAfter1').select("13:00")
      
      //pengembalian di bandara
      cy.get('#terminalTwo').select('Terminal 2 Bandara Soekarno Hatta')
      cy.get('div.form-group:contains("Tanggal Pengembalian") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 5);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#timeBefore2').select("10:00")
      cy.get('#timeAfter2').select("13:00")

      //--- ini button mulai bayar
      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()

      //input kartu kredit
      cy.get('.col-xl-4 > .input-group > .form-control').type("4141 4141 4141 4141")
      cy.get(':nth-child(2) > .input-group > .form-control').type("11/22")
      cy.get(':nth-child(3) > .input-group > .form-control').type("123")
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()

    })
  })

  describe('Booking Wifi Travy Using Credit Card Before Login (Staging)', function() {
    it('Visits Passpod', function() {
        cy.visit(Cypress.env('BASE_URL_TRAVY'));

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

      //pengambilan di bandara
      cy.get('#terminal').select('Terminal 2 Bandara Soekarno Hatta')
      cy.get('div.form-group:contains("Tanggal Penerimaan") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 2);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#timeBefore1').select("10:00")
      cy.get('#timeAfter1').select("13:00")

      //pengembalian di bandara
      cy.get('#terminalTwo').select('Terminal 2 Bandara Soekarno Hatta')
      cy.get('div.form-group:contains("Tanggal Pengembalian") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 5);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#timeBefore2').select("10:00")
      cy.get('#timeAfter2').select("13:00")

      //--- ini button mulai bayar
      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
      cy.wait(1000)
      // diarahkan ke halaman login
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()

      //bayar
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
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})