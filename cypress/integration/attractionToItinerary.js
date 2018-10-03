describe('Add Attraction To Itinerary', function() {
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
      //cy.get('li div.trip-desc:eq(0) > h3').click()
      cy.get(':nth-child(1) > .trip-desc > h3 > div > a').click()
      //pilih salah satu attraction
      cy.get('div.col-12 div.title:eq(0) > div.LinesEllipsis').click({force: true})
      cy.get('.top-float-box > .btn').click()
      cy.get('.mb-1 > .btn-orange').click()
    })
  })
  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})