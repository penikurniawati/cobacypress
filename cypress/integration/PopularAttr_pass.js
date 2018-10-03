describe('Popular Attraction', function() {
    it('Popular Attraction Page', () => {
        cy.server(); // enable response stubbing
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_STAGING'));

        cy.get('div.slick-active div.dest-title:eq(1)').click()
        cy.get('.orange-input').click()
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 3);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
        //cy.get('.react-datepicker__day--today:contains('+d.getDate()+')').eq(0).then(function($el){$el.pikaday("show")}).click()
        //cy.get('.react-datepicker__day--today + div + div + div').click()
        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(2) > .form-group > .form-control').select('09:00:00')
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown0 .btn-user > #btnOk').click()
        cy.get('.yellow').click()

        cy.wait(1500)
        cy.get('.btn-wrap > .btn').click()
        //User direct to login page because user not login
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('testingqa2b@gmail.com')
            
            // {enter} causes the form to submit
            cy.get('.form-pwd > .form-control').type(`${'testing@12345'}`)
            
        })

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