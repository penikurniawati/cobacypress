describe('My First Test', function() {
    it('Visits Passpod', function() {
      cy.visit('https://passpod.com')

      //masuk ke halaman login
      cy.contains('Masuk').click({multiple: true}) 

      cy.get('input[type=text]').type('peni@skyshi.io')
      cy.get('input[type=password]').type('penikurniawati')
    
      cy.get('form').find('button').contains('Masuk').click()
        
      //selesai login 
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
      cy.get('.react-datepicker__day--keyboard-selected + div + div').click()
  
      //cy.get('form').find('button').contains('TAMBAH KE KERANJANG').click()
        
      //cy.get('select').contains('- Bank -').select('BCA')
      cy.get('div.form-group:contains("Pilih Nama Bank") select'). select("BCA")
      cy.get('div.form-group:contains("Nomor Rekening") input'). type("1234567")
      cy.get('.payment-wrap:contains("TAMBAH KE KERANJANG") button').click()

      //mulai checkout 
      cy.get('.box-btn-wrap > .btn-orange').click()
      cy.get('.panel-btn-payment > .btn').click()
      cy.get(':nth-child(4) > label > :nth-child(1)').click({force: true})
      cy.get(':nth-child(3) > .ck-right-wrap > .panel-payment-white > .btn').click()
      
      //cy.contains('Wifi Australia').click()
     // cy.contains('Wifi Australia').click({multiple: true}) 
     //cy.get('form').find('button').contains('SEWA POCKET WIFI').click()
     //cy.contains('SEWA POCKET WIFI').click() 
     //cy.get('form').find('button).contains('Masuk').click()

      //cy.get('form').find('button').contains('SEWA POCKET WIFI').click()

      //cy.get('button').click('center', {multiple: true})
      //cy.contains('Masuk').click({multiple: true}) 
    //    cy.get('form-control')
    //     .type('fake@email.com')
    //     .should('have.value', 'fake@email.com')

    //  cy.contains('type').click({ force: true })
      //cy.get('button').click({multiple: true})          // Click on button
    //   cy.get('button').click('topRight', {multiple: true})
    //   cy.focused().click({multiple: true})              // Click on el with focus
      
      //menuju button masuk
      //cy.url().should('include', '/id/login')
     // cy.get('.action-opacity>.btn').click({ force: true })
    //   cy.get('[disabled]').click({force: true})
    //   {force: true}
     // Ignore error checking prior to checking
    //  cy.get('.action-checkboxes [disabled]')
    //  .check({ force: true }).should('be.checked')
    //   cy.url().should('include','/id/login').click({force: true})
    //   {force: true}
    })
  })

  //ini untuk mengatasi error handler
  //To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})