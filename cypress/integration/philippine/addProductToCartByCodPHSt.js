describe('Add Product to Cart By Cod PH (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_PH'));

        //masuk ke halaman login
      cy.get('[href="en/login"').click()
      cy.get('input[type=text]').type('testingqaph@gmail.com')
      cy.get('input[type=password]').type('testingph12345')
      cy.get('form').find('button').contains('Login').click()
        
      //selesai login
      cy.wait(3000)
      cy.get('div.slick-active div.dest-box.shop:eq(0)').click()
      var i = 1;
      while(i<2){
        cy.get('.btn-plus').click()
        i++;
      }
      cy.wait(1000)
      cy.get(':nth-child(1) > .btn').click()
      cy.get('.btn-wrap > .btn').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()
      //pilih cod
      cy.wait(2000)
      cy.get('#codpayment').check() //radio button dengan id: codpayment
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
      cy.get('.btn-wrap > div > .btn').click()
    })
  })

  describe('Add Product to Cart By Cod PH Before Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_PH'));

      cy.get('div.slick-active div.dest-box.shop:eq(0)').click()
      var i = 1;
      while(i<2){
        cy.get('.btn-plus').click()
        i++;
      }
      cy.wait(1000)
      cy.get(':nth-child(1) > .btn').click()
      cy.get('.btn-wrap > .btn').click()

      //masuk ke halaman login
      cy.get('input[type=text]').type('testingqaph@gmail.com')
      cy.get('input[type=password]').type('testingph12345')
      cy.get('form').find('button').contains('Login').click()

      //masuk ke halaman checkout
      cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
      cy.get('.panel-btn-payment > .btn').click()
      //pilih cod
      cy.get('#codpayment').check() //radio button dengan id: codpayment
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
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