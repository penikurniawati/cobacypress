describe('Register in Github', function() {
    it('Visits Passpod', function() {
      cy.visit('https://github.com/')

      cy.get('.home-hero-signup > .mt-0:contains("Username") input').type("usertest678")
      cy.get('.rounded-1 > .home-hero-signup > :nth-child(4):contains("Email") input').type("user@mail.com")
      cy.get('.home-hero-signup > :nth-child(5):contains("Password") input').type("usertest678")
      cy.get('.home-hero-signup > .btn-mktg').click()
    })
  })