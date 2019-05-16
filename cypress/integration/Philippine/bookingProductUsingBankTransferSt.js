describe('Booking Product Using Bank Transfer PH (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_PH'));

        //masuk ke halaman login
      cy.get('[href="en/login"').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Login').click()
        
      //selesai login
      cy.wait(1000)
      cy.get('div.slick-active div.dest-box.shop:eq(0)').click()
      var i = 1;
      while(i<2){
        cy.get('.btn-plus').click()
        i++;
      }
      cy.wait(1000)
      cy.get('.row > :nth-child(2) > .btn').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get(':nth-child(3) > .shipping-choose-btn').click()
      cy.get('.col-lg-8 > .form-group > .form-control').type("Blab, Philippine")
      cy.get('.col-lg-4 > .form-group > .form-control').type("12121")
      cy.get(':nth-child(3) > .form-group > .form-control').select("APAYAO")
      cy.get(':nth-child(4) > .form-group > .form-control').select("FLORA")
      cy.get(':nth-child(5) > .form-group > .form-control').select("ATOK")
      cy.get(':nth-child(6) > .form-group > .form-control').type("Blab")
      cy.get('.panel-btn-payment > .btn').click()
      //pilih bank transfer
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  describe('Booking Product Using Bank Transfer PH Before Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_PH'));

      cy.get('div.slick-active div.dest-box.shop:eq(0)').click()
      var i = 1;
      while(i<2){
        cy.get('.btn-plus').click()
        i++;
      }
      cy.wait(1000)
      cy.get('.row > :nth-child(2) > .btn').click()

      //masuk ke halaman login
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Login').click()
        
      //selesai login
      cy.wait(1000)
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get(':nth-child(3) > .shipping-choose-btn').click()
      cy.get('.col-lg-8 > .form-group > .form-control').type("Blab, Philippine")
      cy.get('.col-lg-4 > .form-group > .form-control').type("12121")
      cy.get(':nth-child(3) > .form-group > .form-control').select("APAYAO")
      cy.get(':nth-child(4) > .form-group > .form-control').select("FLORA")
      cy.get(':nth-child(5) > .form-group > .form-control').select("ATOK")
      cy.get(':nth-child(6) > .form-group > .form-control').type("Blab")
      cy.get('.panel-btn-payment > .btn').click()
      //pilih bank transfer
      cy.get('#bank').check() //radio button dengan id: bank
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })
  

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})