describe('Main view', () => {
    it('User can create multiple islands', () => {
        cy.visit('/')

        // Click two cells
        cy.get('[data-cy=grid] > :nth-child(1)').click()
        cy.get('[data-cy=grid] > :nth-child(3)').click()

        // Verify if stats changed
        cy.get('[data-cy=board-stats-cells-filled] dd').then($cellsFilled => {
            expect($cellsFilled.text()).equal('2')
        })

        cy.get('[data-cy=board-stats-islands] dd').then($islands => {
            expect($islands.text()).equal('2')
        })
    })

    it('User can resize the board', () => {
        cy.visit('/')

        // // Change grid size
        cy.get('[data-cy=nav-bar-rows]').clear().type(5)
        cy.get('[data-cy=nav-bar-cols]').clear().type(5)
        cy.get('[data-cy=nav-bar-resize-button]').click()

        // Verify the grid changed
        cy.get('[data-cy=grid]').children().its('length').then($length => {
            expect($length).equal(25)
        })

    })
})