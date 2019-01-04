describe('Booking Wifi With Insurance Using Bank Credit (Staging)', function() {
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
      cy.get('div.form-group:contains("Pilih Nama Bank") select').select("BCA")
      cy.get('div.form-group:contains("Nomor Rekening") input').type("1234567")
      cy.get('div.form-group:contains("Nama Rekening") input').type("Pietro Testing")
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
      var d = new Date();
      d.setDate(d.getDate() + 5);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      
      cy.get('#timeBefore2').select("10:00")
      cy.get('#timeAfter2').select("13:00")

      //check box insurance
      cy.get('.insurance-box-checkbox > .checkbox > input').click()
      cy.wait(5500)
      cy.get(':nth-child(4) > .radio-btn > input').click()
      cy.get('#insurance-city-info > .form-group > .form-control').type("yogya")
      cy.get('.travel-data > .row > :nth-child(3) > .form-group > .form-control').type("malay")
      cy.get('#insurance-tac-check > .checkbox > input').click()

      //button add to cart
      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
      cy.wait(2500)
      
      //pengisian Data Wisatawan
      cy.get('.panel-body > :nth-child(1) > :nth-child(1) > .input-group > .form-control').type('Pietro')
      cy.get(':nth-child(1) > :nth-child(2) > .input-group > .form-control').type('testing')
      cy.get('.form-group > .input-group > .form-control').type('Jl. Godean, kwarasan')
      cy.get('.panel-body > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type("Yogya")
      cy.get(':nth-child(2) > :nth-child(2) > .form-control').type("55678")
      cy.get('.panel-body > :nth-child(3) > :nth-child(1) > .input-group > .form-control').type("pietro.ryanditha@skyshi.io")
      cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').select("Indonesia (+62)")
      cy.get(':nth-child(3) > :nth-child(3) > .input-group > .form-control').type("8765432190")
      cy.get(':nth-child(4) > :nth-child(1) > .input-group > .form-control').type("Yogy8908")
      cy.get(':nth-child(4) > :nth-child(2) > .input-group > .form-control').select("Pria")
      cy.get(':nth-child(1) > .row > :nth-child(1) > .input-group > .form-control').select("10")
      cy.get('.col-6 > .input-group > .form-control').select("Jun")
      cy.get(':nth-child(1) > .row > :nth-child(3) > .input-group > .form-control').select("1995")
      cy.get(':nth-child(5) > :nth-child(1) > .input-group > .form-control').type("Yogi lola")
      cy.get(':nth-child(5) > :nth-child(2) > .input-group > .form-control').select("Sepupu")
      //Simpan
      cy.get('.col-sm-9 > .btn').click()

      //button bayar
      cy.get('.btn-wrap > .btn').click()

      //User direct to login page because user not login
      cy.get('form').within(() =>{
        cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
        
        cy.get('input[type=password]').type(`${'242210'}`)
        
    })
    cy.get('form > .btn-orange').click()

    //isi data wisatawan
    cy.wait(2500)
      cy.get(':nth-child(5) > .input-group > .form-control').type("8765432190")
      cy.get('.panel-btn-payment > .btn').click()

    //pembayaran Bank transfer
    cy.get('#bank').click()
      //input kartu kredit
      //cy.get('.col-xl-4 > .input-group > .form-control').type("4201 9200 6195 7401")
    //   cy.get('.col-xl-4 > .input-group > .form-control').type("4141 4141 4141 4141")
    //   cy.get(':nth-child(2) > .input-group > .form-control').type("11/22")
    //   cy.get(':nth-child(3) > .input-group > .form-control').type("123")

      //cy.get('.payment-input > .form-control').type("awkarin")
      //cy.get(':nth-child(1) > .ck-right-wrap > .panel-payment-white > .btn').click()
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()

    })
  })

  describe('Booking Wifi With Insurance Using Bank Credit (Staging)', function() {
    it('Visits Passpod', function() {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL'));

    //User direct to login page because user not login
    cy.get('#dropdownProfile').click()
    cy.get('form').within(() =>{
        cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
        
        cy.get('input[type=password]').type(`${'242210'}`)
        
    })
    cy.get('form > .btn-orange').click()

      //pilih wifi
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      //memasukkan data wifi
      cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 4);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#qty').select("2")
      cy.get('div.form-group:contains("Pilih Nama Bank") select').select("BCA")
      cy.get('div.form-group:contains("Nomor Rekening") input').type("1234567")
      cy.get('div.form-group:contains("Nama Rekening") input').type("Pietro Testing")
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
      var d = new Date();
      d.setDate(d.getDate() + 5);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      
      cy.get('#timeBefore2').select("10:00")
      cy.get('#timeAfter2').select("13:00")

      //check box insurance
      cy.get('.insurance-box-checkbox > .checkbox > input').click()
      cy.wait(5500)
      cy.get(':nth-child(4) > .radio-btn > input').click()
      cy.get('#insurance-city-info > .form-group > .form-control').type("yogya")
      cy.get('.travel-data > .row > :nth-child(3) > .form-group > .form-control').type("malay")
      cy.get('#insurance-tac-check > .checkbox > input').click()

      //button add to cart
      cy.get(':nth-child(4) > .payment-wrap > .btn').click()
      cy.wait(1000)
      
      //pengisian Data Wisatawan
      cy.get('.panel-body > :nth-child(1) > :nth-child(1) > .input-group > .form-control').type('Pietro')
      cy.get(':nth-child(1) > :nth-child(2) > .input-group > .form-control').type('testing')
      cy.get('.form-group > .input-group > .form-control').type('Jl. Godean, kwarasan')
      cy.get('.panel-body > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type("Yogya")
      cy.get(':nth-child(2) > :nth-child(2) > .form-control').type("55678")
      cy.get('.panel-body > :nth-child(3) > :nth-child(1) > .input-group > .form-control').type("pietro.ryanditha@skyshi.io")
      cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').select("Indonesia (+62)")
      cy.get(':nth-child(3) > :nth-child(3) > .input-group > .form-control').type("8765432190")
      cy.get(':nth-child(4) > :nth-child(1) > .input-group > .form-control').type("Yogy8908")
      cy.get(':nth-child(4) > :nth-child(2) > .input-group > .form-control').select("Pria")
      cy.get(':nth-child(1) > .row > :nth-child(1) > .input-group > .form-control').select("10")
      cy.get('.col-6 > .input-group > .form-control').select("Jun")
      cy.get(':nth-child(1) > .row > :nth-child(3) > .input-group > .form-control').select("1995")
      cy.get(':nth-child(5) > :nth-child(1) > .input-group > .form-control').type("Yogi lola")
      cy.get(':nth-child(5) > :nth-child(2) > .input-group > .form-control').select("Sepupu")
      //Simpan
      cy.get('.col-sm-9 > .btn').click()

      //button bayar
      cy.get('.btn-wrap > .btn').click()

      
    //isi data wisatawan
    cy.wait(1500)
      cy.get(':nth-child(5) > .input-group > .form-control').type("8765432190")
      cy.get('.panel-btn-payment > .btn').click()

    //pembayaran Bank transfer
    cy.get('#bank').click()
      //input kartu kredit
      //cy.get('.col-xl-4 > .input-group > .form-control').type("4201 9200 6195 7401")
    //   cy.get('.col-xl-4 > .input-group > .form-control').type("4141 4141 4141 4141")
    //   cy.get(':nth-child(2) > .input-group > .form-control').type("11/22")
    //   cy.get(':nth-child(3) > .input-group > .form-control').type("123")

      //cy.get('.payment-input > .form-control').type("awkarin")
      //cy.get(':nth-child(1) > .ck-right-wrap > .panel-payment-white > .btn').click()
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