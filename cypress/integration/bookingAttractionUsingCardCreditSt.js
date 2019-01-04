describe('Booking Attraction Using Card Credit (Staging)', function() {
    it('Visits Passpod', function() {
        cy.visit(Cypress.env('BASE_URL'));

        //masuk ke halaman login
      cy.get('[href="id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      //pilih attraction
      cy.get('div.slick-active div.dest-title:eq(1) > h1').click()
      cy.get('div.date-choose-wrap:contains("kedatangan") input').click()
      cy.get('.react-datepicker__day--today + div').click()
      cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(2) > .form-group > .form-control').select("09:00:00")
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()
      cy.get('.btn-wrap > .orange').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83643771553")
      cy.get('.panel-btn-payment > .btn').click()
      
      //input kartu kredit
      cy.get('.col-xl-4 > .input-group > .form-control').type("4141414141414141")
      cy.get(':nth-child(2) > .input-group > .form-control').type("12/19")
      cy.get(':nth-child(3) > .input-group > .form-control').type("123")

      // cy.get('.payment-input > .form-control').type("cocacol")
      // cy.get('[data-layer="Padding"]').click()
      //cy.get(':nth-child(1) > .ck-right-wrap > .panel-payment-white > .btn').click()
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()

    })
  })

  describe('Booking Attraction Using Card Credit Before Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));
        
      //pilih attraction
      cy.get('div.slick-active div.dest-title:eq(1) > h1').click()
      cy.get('div.date-choose-wrap:contains("kedatangan") input').click()
      cy.get('.react-datepicker__day--today + div').click()
      cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(2) > .form-group > .form-control').select("09:00:00")
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()
      cy.get('.btn-wrap > .orange').click()
      cy.wait(5000)

      //masuk ke halaman login
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83643771553")
      cy.get('.panel-btn-payment > .btn').click()

      //input kartu kredit
      cy.get('.col-xl-4 > .input-group > .form-control').type("4141414141414141")
      cy.get(':nth-child(2) > .input-group > .form-control').type("12/19")
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