describe('Add Attraction To Cart Using Bank Transfer (Staging)', function() {
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

      cy.wait(1000)
      cy.get('.btn-wrap > .btn:visible()').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83643771553")
      cy.get('.panel-btn-payment > .btn').click()
      cy.wait(1000)
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  describe('Add Attraction To Cart Using Bank Transfer Before Login (Staging)', function() {
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
        cy.get('.user-input-form > .form-group > .form-control').click()
        cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get(':nth-child(2) > .nbr-form-wrap > .max').click()
        cy.get('#btnOk').click()

        //cy.wait(10000)
        //cy.get('.col-wrap > #btnSelect:eq(1)').click()
        //cy.get('#dropdown1 > .package-box-down > .package-form-wrap > .row > :nth-child(1) > .form-group > :nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        //for set and get today date
        // var d = new Date();
        // d.setDate(d.getDate() + 4);
        // cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
        // //cy.get('.react-datepicker__day--today + div + div + div').click()
        // cy.get('#dropdown1 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
        // cy.get('#dropdown1 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        // cy.get('#dropdown1 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        // cy.get('#dropdown1 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(2) > .nbr-form-wrap > .max').click()
        // cy.get('#dropdown1 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()
        cy.get('.yellow').click()

        cy.wait(1000)
        cy.get('.btn-wrap > .btn:visible').click()

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