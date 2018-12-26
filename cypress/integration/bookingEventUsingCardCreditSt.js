describe('Booking Event Using Card Credit Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

        //masuk ke halaman login
      cy.get('[href="id/login"]').click()
      cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
      cy.get('input[type=password]').type('242210')
      cy.get('form').find('button').contains('Masuk').click()
        
    //selesai login
       cy.get(':nth-child(4) > :nth-child(1) > .new-member-item').click()
       cy.get('.col-lg-9 > :nth-child(2) .dest-title:eq(0)').click()
       cy.get(':nth-child(2) > .nav-link').click()
       cy.get(':nth-child(1) .btn-plus:eq(0)').click()
       cy.get(':nth-child(1) .btn-plus:eq(0)').click()

    //pembelian tiket
        cy.get('.col-lg-3 > .btn').click()

    //isi data wisatawan
        cy.get(':nth-child(2) > :nth-child(3) > .input-group > .form-control').type('8765432190')
        cy.get('.panel-btn-payment > .btn').click()

    //metode pembayaran CC
        cy.get('.col-xl-4 > .input-group > .form-control').type('4141 4141 4141 4141')
        cy.get(':nth-child(2) > .input-group > .form-control').type('11/22')
        cy.get(':nth-child(3) > .input-group > .form-control').type('123')

        cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()


    })
  })

  describe('Booking Event Using Card Credit Before Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));
   
    //Pemesanan sebelum login
       cy.get(':nth-child(4) > :nth-child(1) > .new-member-item').click()
       cy.get('.col-lg-9 > :nth-child(2) .dest-title:eq(0)').click()
       cy.get(':nth-child(2) > .nav-link').click()
       cy.get(':nth-child(1) .btn-plus:eq(0)').click()
       cy.get(':nth-child(1) .btn-plus:eq(0)').click()

       cy.get('.col-lg-3 > .btn').click()
       
    //masuk ke halaman login
        cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
        cy.get('input[type=password]').type('242210')
        cy.get('form').find('button').contains('Masuk').click()

    //isi data wisatawan
        cy.get(':nth-child(2) > :nth-child(3) > .input-group > .form-control').type('8765432190')
        cy.get('.panel-btn-payment > .btn').click()

    //metode pembayaran CC
        cy.get('.col-xl-4 > .input-group > .form-control').type('4141 4141 4141 4141')
        cy.get(':nth-child(2) > .input-group > .form-control').type('11/22')
        cy.get(':nth-child(3) > .input-group > .form-control').type('123')

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