describe('Attraction', function() {
    it('opening Homepage', () => {
        cy.server();
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_STAGING'));

        cy.get(':nth-child(2) > :nth-child(1) > .member-link').click()
        cy.get('div.slick-slide div.dest-title:contains("E-voucher Waterbom Bali")').click()            
        //cy.wait('@getAttraction')
        cy.wait(500)              
        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()          
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(1) > .form-group > :nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()        
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 6);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
        //cy.get('.react-datepicker__day .react-datepicker__day--today + div + div + div').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()
        cy.get('.yellow').click()
        cy.wait(1500)
        cy.get('.footer-cart .btn').click()

        cy.wait(2000)
        //user must login first
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('testingqa2b@gmail.com')
            
            cy.get('.form-pwd > .form-control').type(`${'testing@12345'}`)  
        })
        cy.get('form > .btn-orange').click()

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