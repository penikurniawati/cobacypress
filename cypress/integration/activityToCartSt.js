describe('Activity', function() {
    it('contains "Masuk"', () => {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.server();
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL')).log('Open Homepage');

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
      
      cy.get(':nth-child(5) > .input-group > .form-control').type('0851231112')
      cy.get('.panel-btn-payment > .btn').click()

      //Details payment
      cy.get('.col-xl-4 > .input-group > .form-control').type('4141 4141 4141 4141')
      cy.get(':nth-child(2) > .input-group > .form-control').type('12/20')
      cy.get(':nth-child(3) > .input-group > .form-control').type('123')

      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()

      // returning false here prevents Cypress from
        Cypress.on('uncaught:exception', (err, runnable) => {
        // failing the test
        return false
        })
      })
    })