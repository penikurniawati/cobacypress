describe('Cart', function() {
    it('contains "Masuk"', () => {
        //cy.server();
        //cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL'));

        cy.get('.cart-list > a > img').click()
        cy.get('.btn-wrap > div > .btn').click()
        cy.get('.btn-index-wrap > div > .btn').click()
        cy.get(':nth-child(1) > .form-group > #country').select("4G Wifi for Japan (Promo 5 days package)")
        cy.get('#qty').select("3")

        //start date
        cy.get(':nth-child(3) > .form-group > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        var d = new Date();
        d.setDate(d.getDate() + 10);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()

        //end date
        cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
        var d = new Date();
        d.setDate(d.getDate() + 15);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()

        cy.get('div.form-group:contains("Pilih Nama Bank") select').select("CIMB NIAGA")
        cy.get(':nth-child(7) > .form-group > #acnNumber').type('1234567890')
        cy.get(':nth-child(8) > .form-group > #acnNumber').type('John Doe')

        cy.get('#self').click()
        cy.get('#selfTwo').click()

        cy.get(':nth-child(3) > .payment-wrap > .btn').click()
        cy.get('.box-btn-wrap > div > .btn').click()

        cy.wait(1000)
        cy.get('.popular-activity-wrap div.slick-slide.slick-active:eq(2):visible').click()
        cy.wait(1500)
        cy.get(':nth-child(5) > .package-box-top > .row > .col-lg-5 > .col-wrap > #btnSelect').click()
        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(1) > .form-group > :nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()

        var d = new Date();
        d.setDate(d.getDate() + 15);
        cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()

        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .form-control').click()
        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > :nth-child(1) > .nbr-form-wrap > .max').click()
        cy.get('#dropdown4 > .package-box-down > .package-form-wrap > .row > :nth-child(3) > .user-input-form > .form-group > .user-wrap > .btn-user > #btnOk').click()

        cy.get('.yellow').click()
        cy.get('.btn-wrap > .btn').click()

        //cy.screenshot()

        //To turn off all uncaught exception handling
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
       })
    })
})