describe('Destination', function() {
    it('contains "Masuk"', () => {
        //cy.server();
        //cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_LIVE'));

        cy.get('.slick-current > :nth-child(1) > #topBox > a > :nth-child(1) > .destination-box > img').click()
        cy.get('.col-lg-9 > .row > :nth-child(2)').click()
        cy.wait(500)
        cy.get('div.col-lg-9.col-12 div.dest-title:contains("E-voucher Bali Bird Park")').click()
        //cy.wait(10000)
        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(1) > .form-group > :nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 4);
        cy.get('.react-datepicker__day--outside-month:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
        //cy.get('.react-datepicker__day--today + div + div + div').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(2) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()
        cy.get('.yellow').click()

        cy.get('.btn-wrap > .btn').click()

        //user must login first
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('testingqa2b@gmail.com')
            
            cy.get('.form-pwd > .form-control').type(`${'testing@12345'}`)  
        })
        cy.get('form > .btn-orange:visible').click()

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
