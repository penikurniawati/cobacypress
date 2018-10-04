describe('Add Attraction From itinerary To Cart', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_LIVE'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login 
      //pilih buat jadwal
      cy.get(':nth-child(3) > :nth-child(1) > .member-link').click()

      //pilih salah satu nama jadwal
      cy.get(':nth-child(1) > .trip-desc > h3 > div > a').click()
      cy.get('.d-flex > :nth-child(2) > a').click()
      cy.get('.trip-info > .btn').click()
      cy.get('.orange-input').click()
      cy.get('.react-datepicker__day--keyboard-selected').click()
      cy.get(':nth-child(1) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .input-user > .nbr-form-wrap > .max').click()
      cy.get('#dropdown0 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()
      cy.get('.yellow').click()
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})