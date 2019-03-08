describe('Add Product To Cart Using Bank Transfer (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

        //masuk ke halaman login
      cy.get('[href="id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login
      cy.wait(1000)
      cy.get('div.slick-active div.dest-box.shop:eq(2)').click()
      cy.get('.variant-list > :nth-child(2)').click()
      var i = 1;
      while(i<2){
        cy.get('.btn-plus').click()
        i++;
      }
      cy.get(':nth-child(1) > .btn').click()
      cy.get('.btn-wrap > .btn').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get(':nth-child(3) > .shipping-choose-btn').click()
      cy.get('.col-lg-8 > .form-group > .form-control').type("Gamping, Yogyakarta")
      cy.get('.col-lg-4 > .form-group > .form-control').type("12121")
      cy.get(':nth-child(3) > .form-group > .form-control').select("DI YOGYAKARTA")
      cy.get(':nth-child(4) > .form-group > .form-control').select("KAB. SLEMAN")
      cy.get(':nth-child(5) > .form-group > .form-control').select("GAMPING")
      cy.get(':nth-child(6) > .form-group > .form-control').type("Gamping")
      cy.get('.panel-btn-payment > .btn').click()
      //pembayaran Bank transfer
      cy.get('#bank').click()
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  describe('Add Product To Cart Using Bank Transfer Before Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

      cy.get('div.slick-active div.dest-box.shop:eq(2)').click()
      cy.get('.variant-list > :nth-child(2)').click()
      var i = 1;
      while(i<2){
        cy.get('.btn-plus').click()
        i++;
      }
      cy.get(':nth-child(1) > .btn').click()
      cy.get('.btn-wrap > .btn').click()

      //masuk ke halaman login
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()

      //isi data pembeli
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get(':nth-child(3) > .shipping-choose-btn').click()
      cy.get('.col-lg-8 > .form-group > .form-control').type("Gamping, Yogyakarta")
      cy.get('.col-lg-4 > .form-group > .form-control').type("12121")
      cy.get(':nth-child(3) > .form-group > .form-control').select("DI YOGYAKARTA")
      cy.get(':nth-child(4) > .form-group > .form-control').select("KAB. SLEMAN")
      cy.get(':nth-child(5) > .form-group > .form-control').select("GAMPING")
      cy.get(':nth-child(6) > .form-group > .form-control').type("Gamping")
      cy.get('.panel-btn-payment > .btn').click()
      //pembayaran Bank transfer
      cy.get('#bank').click()
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