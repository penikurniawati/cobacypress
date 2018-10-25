describe('Add Attraction In Itinerary (Staging)', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL'));

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
      cy.get('div.col-12 div.title:eq(2) > div.LinesEllipsis').click({force: true})
      cy.get('.top-float-box > .btn').click()
      //cy.get('.modal-body > :nth-child(2) > .form-control').select('2018-09-26')
      //cy.get('.modal-body > :nth-child(2) > .form-control:nth-child(2)').select()
      cy.get('.mb-1 > .btn-orange:visible').click()
      //cy.get('.mb-1 > .btn-orange').click()
      cy.get('.top-float-box > .btn:visible').click()
      cy.get('.modal-body > :nth-child(2) > .form-control:visible').select('HARI 2, 25 Okt 2018')
      cy.get('.modal-body > .input-group > :nth-child(1)').select('11:00')
      cy.get('.modal-body > .input-group > :nth-child(2)').select('13:00')
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