describe('Booking Event Using Bank Transfer (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

        //masuk ke halaman login
      cy.get('[href="id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      cy.get('div.slick-active div.dest-type:eq(1) > span').click()
      cy.get('.col-md-4 > .btn').click()
      var i = 1;
      while(i<=2){
        cy.get('.btn-plus').click()
        i++;
      }
      cy.get('.col-lg-3 > .btn').click()

      //booking detail
      cy.get(':nth-child(2) > :nth-child(3) > .input-group > .form-control:eq(0)').type("83869056900")
      cy.get(':nth-child(3) > .col-sm-4 > .input-group > .form-control').type("314asd")
      cy.get(":nth-child(1) > .row > :nth-child(1) > .input-group > .form-control").select("12")
      cy.get(':nth-child(2) > :nth-child(3) > .input-group > .form-control:eq(1)').select("1990")
      cy.get('.panel-btn-payment > .btn').click()

      //payment page
      cy.wait(1000)
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
      
      //ke booking detail
      cy.get('.btn-wrap > div > .btn').click()
    })
  })

  describe('Booking Event Using Bank Transfer Before Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));
  
      cy.get('div.slick-active div.dest-type:eq(1) > span').click()
      cy.get('.col-md-4 > .btn').click()
      var i = 1;
      while(i<2){
        cy.get('.btn-plus').click()
        i++;
      }
      cy.get('.col-lg-3 > .btn').click()

      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()

      //booking detail
      cy.get(':nth-child(2) > :nth-child(3) > .input-group > .form-control:eq(0)').type("83869056900")
      cy.get(':nth-child(3) > .col-sm-4 > .input-group > .form-control').type("314asd")
      cy.get(":nth-child(1) > .row > :nth-child(1) > .input-group > .form-control").select("12")
      cy.get(':nth-child(2) > :nth-child(3) > .input-group > .form-control:eq(1)').select("1990")
      cy.get('.panel-btn-payment > .btn').click()

      //payment page
      cy.wait(1000)
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()

      //ke booking detail
      cy.get('.btn-wrap > div > .btn').click()
    })
  })
  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})