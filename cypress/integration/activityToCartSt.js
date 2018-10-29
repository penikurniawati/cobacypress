describe('Activity to cart before login', function() {
    it('contains "Masuk"', () => {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.server();
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL')).log('Open Homepage');

        cy.get(':nth-child(2) > :nth-child(1) > .member-link').click().log('Click 1')
        cy.get('div.slick-slide div.dest-title:eq(0)').click().log('Click 2')
        cy.get('div.top-float-box #btnFloat').click().log('Click 3')
        cy.get('.orange-input').click().log('Click 4')
        
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 4);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click().log('Click 5')

        cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click().log('Click 6')
        cy.get('#dropdown0 :nth-child(2) > .form-group > .form-control').select('09:00:00')
        cy.get('#dropdown0 .user-input-form .form-group .form-control').click()
        cy.get('#dropdown0 :nth-child(1) > .nbr-form-wrap > .max').click().log('Click 7')
        cy.get('#dropdown0 :nth-child(1) > .nbr-form-wrap > .max').click().log('Click 8')
        cy.get('#btnOk').click().log('Click 9')

        cy.get('.btn-wrap > .orange:visible').click().log('Click 10')
        
        cy.wait(1500)
        cy.get('form').within(() =>{
          cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
          
          cy.get('.form-pwd > .form-control').type(`${'242210'}`)
          
      })
      cy.get('form > .btn-orange').click()
      
      cy.wait(1000)
      cy.get(':nth-child(5) > .input-group > .form-control').type('8765432190')
      cy.get('.panel-btn-payment > .btn').click()

      cy.wait(1000)

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