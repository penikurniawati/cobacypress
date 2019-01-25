describe('Booking Attraction Bank Transfer After Login', function() {
    it('opening Homepage', () => {
        cy.server();
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_TRAVY'));

        //Login
        cy.get('[href="id/login"]').click()
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
            
            cy.get('.form-pwd > .form-control').type(`${'123456'}`)  
        })
        cy.get('form > .btn-orange').click()
        cy.wait(1000)

        //Select from popular
        cy.get('#popular .slick-list .slick-track div.dest-text-panel:eq(1)').click()            
        cy.wait(1000)              
        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()          
        
        //for set and get today date
        cy.get('#dropdown0 :nth-child(1) .react-datepicker__input-container > .form-control').click()
        var d = new Date();
        d.setDate(d.getDate() + 4);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()

        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
        cy.get('#dropdown0 :nth-child(2) .form-control').select('09:00:00')
        cy.get('#dropdown0 :nth-child(3) .form-group > .form-control').click()
        var i = 1;
        while(i<2){
        cy.get('#dropdown0 :nth-child(1) > .nbr-form-wrap > .max').click()
        i++;
         }
        cy.get('#btnOk').click()
        cy.get('.btn-wrap > .orange').click()
        cy.wait(1500)
        //cy.get('.footer-cart .btn').click()

        cy.get(':nth-child(5) > .input-group > .form-control').type('8765432190')

        cy.get('.panel-btn-payment > .btn').click()

        //Details payment Using Bank Transfer
        cy.get('#bank').click()

        // cy.get('.col-xl-4 > .input-group > .form-control').type('4141 4141 4141 4141')
        // cy.get(':nth-child(2) > .input-group > .form-control').type('12/20')
        // cy.get(':nth-child(3) > .input-group > .form-control').type('123')

        cy.get('.panel-payment-white > .btn').click()
        })
    })
    

describe('Booking Attraction Using Bank Transfer Before Login', function() {
    it('contains "Masuk"', () => {
        cy.server();
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_TRAVY'));

        //Select from popular
        cy.get('#popular .slick-list .slick-track div.dest-text-panel:eq(1)').click()            
        cy.wait(1000)              
        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()          
        
        //for set and get today date
        cy.get('#dropdown0 :nth-child(1) .react-datepicker__input-container > .form-control').click()
        var d = new Date();
        d.setDate(d.getDate() + 4);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()

        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
        cy.get('#dropdown0 :nth-child(2) .form-control').select('09:00:00')
        cy.get('#dropdown0 :nth-child(3) .form-group > .form-control').click()
        var i = 1;
        while(i<2){
        cy.get('#dropdown0 :nth-child(1) > .nbr-form-wrap > .max').click()
        i++;
         }
        cy.get('#btnOk').click()
        cy.get('.btn-wrap > .orange').click()
        cy.wait(1500)

        //Login 
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
            
            cy.get('.form-pwd > .form-control').type(`${'123456'}`)  
        })
        cy.get('form > .btn-orange').click()
        cy.wait(1000)

        //cy.get('.footer-cart .btn').click()

        cy.get(':nth-child(5) > .input-group > .form-control').type('8765432190')

        cy.get('.panel-btn-payment > .btn').click()

        //Details payment Using Bank Transfer
        cy.get('#bank').click()

        // cy.get('.col-xl-4 > .input-group > .form-control').type('4141 4141 4141 4141')
        // cy.get(':nth-child(2) > .input-group > .form-control').type('12/20')
        // cy.get(':nth-child(3) > .input-group > .form-control').type('123')

        cy.get('.panel-payment-white > .btn').click()
    
        

        //To turn off all uncaught exception handling
        Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
       })
    })
})
