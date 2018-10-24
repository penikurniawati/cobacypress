describe('Search Bar By Top Destination', function() {
    it('Visits Passpod', function() {
      cy.server();
      cy.route('**/attractions/**/short?**').as("getAttraction")
      Cypress.config()// ==>{defaultCommandTiemout}
      cy.visit(Cypress.env('BASE_URL'));

      cy.get(':nth-child(2) > :nth-child(1) > .member-link').click()
      cy.get('div.slick-slide div.dest-title:contains("Tiket Waterbom Bali")').click()
      cy.get('#btnFloat').click()
      cy.get('.orange-input').click()
      cy.wait(1000)
      //for set and get today date
      var d = new Date();
      d.setDate(d.getDate() + 4);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()

      cy.wait(1000)
      cy.get(':nth-child(1) #btnSelect:eq(0)').click()
      cy.get('#dropdown0 :nth-child(2) .form-control').select("09:00:00")
      cy.get('#dropdown0 :nth-child(3) .user-input-form .form-control').click()
      cy.get('#dropdown0 :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 :nth-child(1) > .nbr-form-wrap > .max').click()
      // cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()

      cy.get('.yellow').click()
      cy.wait(1000)
      cy.get('.btn-wrap > .btn:visible').click()

      cy.get('form').within(() =>{
        cy.get('input[type=text]').type('pietro.ryanditha@skyshi.io')
        
        cy.get('input[type=password]').type(`${'242210'}`)  
    })
    cy.get('form > .btn-orange').click()

    cy.get(':nth-child(5) > .input-group > .form-control').type('8765432190')
    cy.wait(1000)
    cy.get('.panel-btn-payment > .btn').click()

    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})