describe('Contoh automation', function() {
    it('contains "Masuk"', () => {
        Cypress.config()// ==>{defaultCommandTiemout}
        cy.server();
        cy.route('**/attractions/**/short?**').as("getAttraction")
        // go to check the path
        cy.visit(Cypress.env('BASE_URL2')).log('Open Homepage');

        //pilih wifi
      cy.get('div.slick-active div.wifi-title:eq(0) > h1').click()
      //memasukkan data wifi
      cy.get('div.form-group:contains("Tanggal Mulai") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 4);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      cy.get('div.form-group.end-date-picker:contains("Tanggal Selesai") input').click()
      var d = new Date();
      d.setDate(d.getDate() + 6);
      cy.get('.react-datepicker__day:contains('+d.getDate()+'):not(.react-datepicker__day--disabled):eq(0)').click()
      //cy.get('.react-datepicker__day--keyboard-selected + div + div').click()
      cy.get('div.form-group:contains("Pilih Nama Bank") select'). select("BCA")
      cy.get('div.form-group:contains("Nomor Rekening") input'). type("1234567")
      cy.get('div.form-group:contains("Nama Rekening") input'). type("Peni Kurniawati")
      

      // returning false here prevents Cypress from
        Cypress.on('uncaught:exception', (err, runnable) => {
        // failing the test
        return false
        })
      })
    })