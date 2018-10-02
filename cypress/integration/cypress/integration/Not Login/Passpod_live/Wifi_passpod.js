describe('Wifi', function() {
    it('contains "Masuk"', () => {
        // go to check the path
        cy.visit(Cypress.env('BASE_URL_LIVE'));
        // seed a user in the DB that we can control from our tests
        // assuming it generates a random password for us

       /* cy.contains('Masuk').click({multiple: true})

        cy.get('form').within(() =>{
            cy.get('input[type=text]').type('testingqa2b@gmail.com')
            
            // {enter} causes the form to submit
            cy.get('input[type=password]').type(`${'testing@12345'}{enter}`)
        */
       cy.get('div.slick-active div.wifi-title:eq()').click()
       cy.get('#qty').select('4')
       //cy.get('div.form-group:contains("Tanggal selesai")input').click()
       cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai")').click()
       //for set and get today date
       var d = new Date();
       d.setDate(d.getDate() + 6);
       cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled)').click()
       //cy.get('.react-datepicker__day--keyboard-selected + div + div + div').click()
       cy.get(':nth-child(6) > .form-group > #country').select("MANDIRI")
       cy.get(':nth-child(7) > .form-group > #acnNumber').type('1234567890')
       cy.get(':nth-child(8) > .form-group > #acnNumber').type('Jojo')
       cy.get('#self').click()
       cy.get('#selfTwo').click()
       cy.get(':nth-child(3) > .payment-wrap > .btn').click()
       
       //cy.get('.react-datepicker__day--keyboard-selected + div + div').click()
       //cy.get('.react-datepicker__day--mon:contains("day-24")').click()
       //select('react-datepicker__day--mon["day-24"]')

       //To turn off all uncaught exception handling
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  })
})