describe('All Destination', function() {
    it('Destination Page', () => {
        //cy.server();
        //cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_LIVE'));

        cy.get('.input-group > .form-control').click()
        cy.get('.link-category:contains("Asia")').trigger('mouseover')
        //cy.get('.link-category:contains("Asia")').click()
        cy.get('.city-link-wrap a:contains("Medan")').click()
        cy.get(':nth-child(2) > a > :nth-child(1) > .dest-box > .dest-text-panel').click()
        cy.get('div.top-float-box #btnFloat').click()
        cy.get('.orange-input').click()
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 6);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
        cy.get('#btnSelect').click()
        cy.get(':nth-child(2) > .form-group > .form-control').select("06:00:00")
        cy.get('.user-input-form > .form-group > .form-control').click()
        cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#btnOk').click()
        cy.get('.btn-wrap > .orange:visible').click()

        cy.wait(2000)
        //user must login first
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


         //To turn off all uncaught exception handling
         Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
           })
        })
    })