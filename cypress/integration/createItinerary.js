describe('Create Itinerary', function() {
    it('Visits Passpod', function() {
      cy.visit(Cypress.env('BASE_URL_LIVE'));

      //masuk ke halaman login
      cy.get('.account-wrap > [href="/id/login"]').click()
      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login 
      //pilih attraction
      cy.get(':nth-child(3) > :nth-child(1) > .member-link').click()
      cy.get('.form-wrap > :nth-child(1) > .form-control').type("My Trip")
      //ini buat pilih destinasi
      cy.get('.form-wrap > :nth-child(2) > .form-control').click()
      cy.get('#head885e90a3-a83d-56d3-b5e8-040b4017c825').click()
      cy.get('#dest885e90a3-a83d-56d3-b5e8-040b4017c825 > .mdest-city-link > a').click()

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
    })
  })

  describe('Itinerary', function() {
    it('Itinerary Page', () => {
        cy.server(); // enable response stubbing
        cy.route('**/trip-plan/**/short?**').as("getTrip-plan")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_LIVE'));

        cy.get(':nth-child(3) > :nth-child(1) > .member-link').click()
        cy.wait(1500)
        //User direct to login page because user not login
        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('testingqa2b@gmail.com')
            
            // {enter} causes the form to submit
            cy.get('.form-pwd > .form-control').type(`${'testing@12345'}`)
            
        })
        cy.get('form > .btn-orange').click()
        
        cy.get(':nth-child(3) > :nth-child(1) > .member-link').click()
        cy.get('.form-wrap > :nth-child(1) > .form-control').type('jalan-jalan ke berastagi')
        cy.get('.form-control.form-trip').click()
        cy.get('#head6d00a09f-f616-5c08-9007-edd20bfd11cc').click()
        cy.get('#dest6d00a09f-f616-5c08-9007-edd20bfd11cc > :nth-child(1) > a').click()
        cy.get('.form-wrap > :nth-child(3) > .btn').click()
        //set Start Date
        cy.get(':nth-child(1) > :nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 6);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
        //set End Date
        cy.get(':nth-child(2) > :nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        //for set and get today date
        var d = new Date();
        d.setDate(d.getDate() + 9);
        //cy.get('.react-datepicker__day--outside-month:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
        cy.get('.text-center > .btn').click()
        cy.get(':nth-child(4) > .btn').click()
        })
    })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})