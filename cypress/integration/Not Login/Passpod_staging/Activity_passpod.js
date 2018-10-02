describe('Activity', function() {
    it('contains "Masuk"', () => {
        cy.server();
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_STAGING'));

        cy.get(':nth-child(2) > :nth-child(1) > .member-link').click()
        cy.get('div.slick-slide div.dest-title:contains("Tiket Waterbom Bali")').click()
        cy.get('div.top-float-box #btnFloat').click()
        cy.get('.orange-input').click()
        
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 4);
        cy.get('.react-datepicker__day--outside-month:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()

        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(2) > .form-group > .form-control').select("09:00:00")
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()

        cy.get('.yellow').click()
        cy.wait(1000)
        cy.get('.btn-wrap > .btn:visible').click()
        
        cy.wait(1500)
        cy.get('form').within(() =>{
          cy.get('input[type=text]').type('testingqa2b@gmail.com')
          
          cy.get('.form-pwd > .form-control').type(`${'testing@12345'}`)  
      })
      cy.get('form > .btn-orange').click()

      cy.get(':nth-child(5) > .input-group > .form-control').type('8765432190')
      cy.wait(1000)
      cy.get('.panel-btn-payment > .btn').click()

        // returning false here prevents Cypress from
        Cypress.on('uncaught:exception', (err, runnable) => {
        // failing the test
        return false
        })
      })
    })