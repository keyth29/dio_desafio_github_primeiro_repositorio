describe('home page',()=>{
    it('acessar interface',()=>{
        cy.viewport(1440,900)
        cy.visit('https://cte.hivecloud.com.br')
        cy.get('.col-left > img')
        cy.get('[style="margin-bottom: 20px"] > .formLabelTelaLogin')
        cy.get(':nth-child(6) > .formLabelTelaLogin')
        cy.get('.btnCadastreTelaLogin')
        cy.get('.formMsgBtnTelaLogin')
        


    })
 
     })