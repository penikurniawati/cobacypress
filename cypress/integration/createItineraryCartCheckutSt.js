describe('Create Itinerary, Add to Cart, Checkout (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login 
      //pilih attraction
      cy.get(':nth-child(3) > :nth-child(1) > .member-link').click()
      cy.get('.form-wrap > :nth-child(1) > .form-control').type("My Trip in Singapore")
      //ini buat pilih destinasi
      cy.get('.form-wrap > :nth-child(2) > .form-control').click()
      cy.wait(1000)
      cy.get('.mdest-city-head:visible:eq(0)').click()
      cy.wait(1000)
      cy.get('.mdest-city-link:visible:eq(0)').click()

      cy.get('.form-wrap > :nth-child(3) > .btn').click()
      cy.get(':nth-child(1) > :nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
      cy.get('.react-datepicker__day--keyboard-selected').click()
      cy.get(':nth-child(2) > :nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
      //cy.get('.react-datepicker__day--keyboard-selected + div + div').click()
      //for set and get today date
       var d = new Date();
       d.setDate(d.getDate() + 6);
       cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
       //cy.get('.react-datepicker__day--outside-month:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
       cy.get('.text-center > .btn').click()
       //klik button
       cy.get(':nth-child(4) > .btn').click()

       cy.get('h3 > div > a:eq(0)').click()
       cy.get('div.col-12 div a.explore-card div.card-text div.title:eq(4) > div.LinesEllipsis').click({force:true})
       cy.get('.top-float-box > .btn').click()
    //    cy.get('.modal-body > .input-group > :nth-child(1)').select('08:00')
    //    cy.get('.modal-body > .input-group > :nth-child(2)').select('12:00')
       cy.get('.mb-1 > .btn-orange').click()
       cy.wait(3000)
       cy.get('.trip-info > .btn').click()
       cy.get('.orange-input').click()
       cy.get('.react-datepicker__day--keyboard-selected').click()
       cy.get('#btnSelect').click()
       cy.get('.user-input-form > .form-group > .form-control').click()
       cy.get(':nth-child(1) > .nbr-form-wrap > .max').click()
       cy.get('#btnOk').click()
       cy.get('.yellow').click()
       cy.get('.cart-list > a > img').click()
       cy.get('.btn-wrap > .btn').click()
       cy.get(':nth-child(5) > .input-group > .form-control').type("83869056900")
       cy.get('.panel-btn-payment > .btn').click()
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