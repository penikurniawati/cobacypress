describe('Booking Attraction (Staging)', function() {
    it('Visits Passpod', function() {
        cy.visit(Cypress.env('BASE_URL_STAGING'));

        //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
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

      cy.get('.payment-input > .form-control').type("cobadon")
      cy.get(':nth-child(1) > .ck-right-wrap > .panel-payment-white > .btn').click()
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()

    })
  })

  describe('Activity', function() {
    it('contains "Masuk"', () => {
        cy.server();
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_LIVE')).log('Open Homepage');

        cy.get(':nth-child(2) > :nth-child(1) > .member-link').click().log('Click 1')
        cy.get('div.slick-slide div.dest-title:contains("Hong Kong Disneyland")').click().log('Click 2')
        cy.get('div.top-float-box #btnFloat').click().log('Click 3')
        cy.get('.orange-input').click().log('Click 4')
        
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 4);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click().log('Click 5')

        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click().log('Click 6')
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click().log('Click 7')
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click().log('Click 8')
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click().log('Click 9')

        cy.get('.btn-wrap > .orange:visible').click().log('Click 10')
        
        cy.wait(2000)
        cy.get('form').within(() =>{
          cy.get('input[type=text]').type('testingqa2b@gmail.com')
          
          cy.get('.form-pwd > .form-control').type(`${'testing@12345'}`)  
      })
      cy.get('form > .btn-orange').click()
      
      cy.get('.panel-btn-payment > .btn').click()

      //Details payment
      cy.get('.col-xl-4 > .input-group > .form-control').type('4141 4141 4141 4141')
      cy.get(':nth-child(2) > .input-group > .form-control').type('12/20')
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