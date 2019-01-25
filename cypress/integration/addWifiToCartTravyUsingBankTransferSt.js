describe('Add Wifi To Cart Travy Using Bank Transfer (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_TRAVY'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
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

      //pengambilan di bandara
      cy.get('#terminal').select('Terminal 2 Bandara Soekarno Hatta')
      cy.get('div.form-group:contains("Tanggal Penerimaan") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 4);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#timeBefore1').select("10:00")
      cy.get('#timeAfter1').select("13:00")
      
      //pengembalian di bandara
      cy.get('#terminalTwo').select('Terminal 2 Bandara Soekarno Hatta')
      cy.get('div.form-group:contains("Tanggal Pengembalian") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 6);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#timeBefore2').select("10:00")
      cy.get('#timeAfter2').select("13:00")

      //Tambah ke keranjang
      cy.get('.payment-wrap:contains("TAMBAH KE KERANJANG") button').click()
      cy.wait(1000)

      //mulai checkout 
      cy.get('.btn-wrap > .btn').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()
      cy.wait(3000)
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  describe('Add Wifi To Cart Travy Using Bank Transfer Before Login (Staging)', function() {
    it('contains "Masuk"', () => {
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_TRAVY'));
        // seed a user in the DB that we can control from our tests
        // assuming it generates a random password for us

       /* cy.contains('Masuk').click({multiple: true})

        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('testingqa2b@gmail.com')
            
            // {enter} causes the form to submit
            cy.get('input[type=password]').type(`${'testing@12345'}{enter}`)
        */
       cy.get('div.slick-active div.wifi-title:eq()').click()
       cy.get('#qty').select('4')
       //cy.get('div.form-group:contains("Tanggal selesai")input').click()
       cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai")').click()
       //for set and get today date
       var d = new Date();
       d.setDate(d.getDate() + 6);
       cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
       //cy.get('.react-datepicker__day--keyboard-selected + div + div + div').click()
       //Jumlah Qty
       cy.get('#qty').select("2")
       cy.get(':nth-child(4) > .form-group > #country').select("MANDIRI")
       cy.get(':nth-child(5) > .form-group > #acnNumber').type('1234567890')
       cy.get(':nth-child(6) > .form-group > #acnNumber').type('Jojo')

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
      d.setDate(d.getDate() + 6);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('#timeBefore2').select("10:00")
      cy.get('#timeAfter2').select("13:00")
       
      cy.get(':nth-child(4) > .payment-wrap > .btn').click()

       cy.wait(1000)
        //User direct to login page because user not login
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
            
            cy.get('input[type=password]').type('123456')
            
        })
        cy.get('form > .btn-orange').click()

        cy.get(':nth-child(5) > .input-group > .form-control').type('8765432190')
        cy.wait(1000)
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