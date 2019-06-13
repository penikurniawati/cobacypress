describe('Add Attraction to Cart Using Bank Transfer PH (Staging)', function() {
  it('Visits Passpod', function() {
    cy.visit(Cypress.env('BASE_URL_PH'));

      //masuk ke halaman login
      cy.get('[href="en/login"]').click()
      cy.wait(1500)
      cy.get('form').within(() =>{
        cy.get('input[type=text]').type('testingqaph@gmail.com')
        
        cy.get('.form-pwd > .form-control').type(`${'testingph12345'}`)
        
    })
    cy.get('form > .btn-orange').click()
      
    //selesai login
    cy.wait(1000)
    cy.get('div.slick-active div.dest-box:eq(0)').click()
    cy.get('.orange-input').click()
    //atur tanggal
    var d = new Date();
    d.setDate(d.getDate() + 3);
    cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
    cy.get('#btnSelect').click()
    cy.get(':nth-child(2) > .form-group > .form-control').select('19:00:00')
    cy.get('.user-input-form > .form-group > .form-control').click()
    var i = 1;
    while(i<2){
      cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
      i++;
    }
    cy.get(':nth-child(2) > .nbr-form-wrap > .max').click()
    cy.get('#btnOk').click()
    cy.get('.yellow').click()
    cy.get('.btn-wrap > .btn:visible()').click()

    //ini button mulai bayar
    cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
    cy.get('.panel-btn-payment > .btn').click()

    //pilih bank transfer
    cy.get('#bank').check() //radio button dengan id: bank
    cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
    cy.get('.btn-wrap > div > .btn').click()
  })
})

describe('Add Attraction to Cart Using Bank Transfer PH Before Login (Staging)', function() {
  it('Visits Passpod', function() {
    cy.visit(Cypress.env('BASE_URL_PH'));

    cy.wait(1000)
    cy.get('div.slick-active div.dest-box:eq(1)').click()
    cy.get('.orange-input').click()
    //atur tanggal
    var d = new Date();
    d.setDate(d.getDate() + 3);
    cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
    cy.get('#btnSelect').click()
    cy.get(':nth-child(2) > .form-group > .form-control').select('19:00:00')
    cy.get('.user-input-form > .form-group > .form-control').click()
    var i = 1;
    while(i<2){
      cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
      i++;
    }
    cy.get(':nth-child(2) > .nbr-form-wrap > .max').click()
    cy.get('#btnOk').click()
    cy.get('.yellow').click()
    cy.get('.btn-wrap > .btn:visible()').click()

    //masuk ke halaman login
    cy.wait(1500)
    cy.get('form').within(() =>{
      cy.get('input[type=text]').type('testingqaph@gmail.com')
      
      cy.get('.form-pwd > .form-control').type(`${'testingph12345'}`)
      
  })
  cy.get('form > .btn-orange').click()

    //ini button mulai bayar
    cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
    cy.get('.panel-btn-payment > .btn').click()

    //pilih bank transfer
    cy.get('#bank').check() //radio button dengan id: bank
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