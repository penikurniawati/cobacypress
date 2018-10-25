describe('Destination', function() {
    it('contains "Masuk"', () => {
        //cy.server();
        //cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.visit(Cypress.env('BASE_URL'));

        cy.get('.slick-current > :nth-child(1) > #topBox > a > :nth-child(1) > .destination-box > img').click()
        cy.get('.col-lg-9 > .row > :nth-child(2)').click()
        cy.wait(500)
        cy.get('.dest-box > .dest-text-panel:eq(0)').click()
        //cy.wait(10000)
        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
        cy.get('.orange-input').click()
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 4);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
        //cy.get('.react-datepicker__day--today + div + div + div').click()
        cy.get('#btnSelect').click()
        cy.get('.user-input-form > .form-group > .form-control').click()
        cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#btnOk').click()
        // pesan sekarang
        cy.get('.yellow').click()
        
        cy.wait(500)
        cy.get('.btn-wrap > .btn:visible').click()

        //user must login first
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
            
            cy.get('.form-pwd > .form-control').type(`${'242210'}`)  
        })
        cy.get('form > .btn-orange').click()

        cy.get(':nth-child(5) > .input-group > .form-control').type('8765432190')
        cy.wait(1000)
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
