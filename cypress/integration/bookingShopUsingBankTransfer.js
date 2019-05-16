describe('Booking Attraction Bank Transfer After Login', function() {
    it('opening Homepage', () => {
        cy.server();
        //cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL'));
        
        cy.get(':nth-child(5) > :nth-child(1) > .new-member-item').click()
        cy.get(':nth-child(2) > .col-md-4').click()

        //select product
        cy.get(':nth-child(3) > .variant-list > :nth-child(2)').click()
        cy.get(':nth-child(5) > .variant-list > .active').click()
        cy.get('.btn-plus').click()

        cy.get('.row > :nth-child(2) > .btn').click()
        cy.wait(1500)

        //Sign in
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
            
            cy.get('.form-pwd > .form-control').type(`${'242210'}`)  
        })
        cy.get('form > .btn-orange').click()

        //Shipping Methods
        cy.get(':nth-child(3) > .shipping-choose-btn').click()
        cy.get('.col-lg-8 > .form-group > .form-control').type('Godean')
        cy.get('.col-lg-4 > .form-group > .form-control').type('55555')
        cy.get(':nth-child(3) > .form-group > .form-control').select('DI YOGYAKARTA')
        cy.get(':nth-child(4) > .form-group > .form-control').select('KAB. SLEMAN')
        cy.get(':nth-child(5) > .form-group > .form-control').select('GAMPING')
        cy.get(':nth-child(6) > .form-group > .form-control').type('Nogotirto')
        cy.get('.panel-btn-payment > .btn').click()
        
        //Payment method
        cy.get('#bank').click()
        cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()


        //To turn off all uncaught exception handling
        Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
       })
    })
})
