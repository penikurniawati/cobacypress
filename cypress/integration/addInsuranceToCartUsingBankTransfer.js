describe('Add To Cart Insurance Using Bank Transfer (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

        //masuk ke halaman login
      cy.get('[href="id/login"]').click()
      cy.get('form').within(() =>{
        cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
        
        cy.get('input[type=password]').type(`${'242210'}{enter}`)  
    })
        
      //selesai login
      cy.get('.col-6 > div > .btn').click()
      cy.get(':nth-child(1) > .row > :nth-child(1) > .radio-btn > input').click()
      cy.get(':nth-child(2) > .row > :nth-child(1) > .radio-btn > input').click()
      cy.get(':nth-child(3) > :nth-child(2) > .btn').click()
      cy.get('.action > .btn').click()
      cy.get('.form-group > .input-group > .form-control').type("Gamping, Yogyakarta")
      cy.get('.panel-body > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type("Yogyakarta")
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .form-control').type("11211")
      cy.get(':nth-child(3) > :nth-child(3) > .input-group > .form-control').type("8767816111")
      cy.get(':nth-child(4) > :nth-child(1) > .input-group > .form-control').type("AH119822")
      cy.get(':nth-child(4) > :nth-child(2) > .input-group > .form-control').select("Wanita")
      cy.get('#insurance-city-info > .input-group > .form-control').type("Sakura")
      cy.get(':nth-child(5) > :nth-child(2) > .input-group > .form-control').type("Kamboja")
      cy.get(':nth-child(6) > :nth-child(1) > .input-group > .form-control').type('War')
      cy.get(':nth-child(6) > :nth-child(2) > .input-group > .form-control').select("Adik")
      cy.get('.checkbox > input').click()
      cy.get(':nth-child(1) > .btn').click()
      cy.get('.btn-wrap > .btn').click()
      cy.get(':nth-child(5) > .input-group > .form-control').type("083869056900")
      cy.get('.panel-btn-payment > .btn').click()
      //pembayaran Bank transfer
      cy.get('#bank').click()
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    })
  })

  describe('Booking Insurance Using Bank Transfer Before Login (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

      cy.get('.col-6 > div > .btn').click()
      cy.get(':nth-child(1) > .row > :nth-child(1) > .radio-btn > input').click()
      cy.get(':nth-child(2) > .row > :nth-child(1) > .radio-btn > input').click()
      cy.get(':nth-child(3) > :nth-child(2) > .btn').click()
      cy.get('.action > .btn').click()
      cy.get('.panel-body > :nth-child(1) > :nth-child(1) > .input-group > .form-control').type("Peni")
      cy.get(':nth-child(1) > :nth-child(2) > .input-group > .form-control').type("Test")
      cy.get('.form-group > .input-group > .form-control').type("Gamping, Yogyakarta")
      cy.get('.panel-body > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type("Yogyakarta")
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .form-control').type("11211")
      cy.get('.panel-body > :nth-child(3) > :nth-child(1) > .input-group > .form-control').type("peni@skyshi.io")
      cy.get(':nth-child(3) > :nth-child(3) > .input-group > .form-control').type("8767816111")
      cy.get(':nth-child(4) > :nth-child(1) > .input-group > .form-control').type("AH119822")
      cy.get(':nth-child(4) > :nth-child(2) > .input-group > .form-control').select("Wanita")
      cy.get('#insurance-city-info > .input-group > .form-control').type("Sakura")
      cy.get(':nth-child(5) > :nth-child(2) > .input-group > .form-control').type("Kamboja")
      cy.get(':nth-child(6) > :nth-child(1) > .input-group > .form-control').type('War')
      cy.get(':nth-child(6) > :nth-child(2) > .input-group > .form-control').select("Adik")
      cy.get('.checkbox > input').click()
      cy.get(':nth-child(1) > .btn').click()
      cy.get('.btn-wrap > .btn').click()
      cy.wait(3000)

      //masuk ke halaman login
      cy.get('form').within(() =>{
        cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
        
        cy.get('input[type=password]').type(`${'242210'}`)  
    })
      cy.get('form').find('button').contains('Masuk').click()


      cy.get(':nth-child(5) > .input-group > .form-control').type("083869056900")
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