/** @format */
/** @format */

describe('filter functionality test case', () => {
	//test data
	// 1. UI
	// 2. API
	// 3. MOCK
	beforeEach(() => {
		// cy.addDummyTodos();
		//this will do interaction with cypress server not with the real server
		cy.intercept(
			{
				method: 'GET',
				url: 'http://localhost:8080/todos',
			},
			{
				fixture: 'todos',
			}
		);
		cy.visit('/');
	});
	it('Should filter out the complete todos correctly', () => {
		cy.contains('Complete').click();
		cy.url().should('contain', '/complete');
		cy.get('.todo-checkbox').each((element) => {
			// cy.wrap(element).should('be.checked');
			cy.get(element).should('be.checked');
		});
	});
	it('Should filter out the active todos correctly', () => {
		cy.contains('Active').click();
		cy.url().should('contain', '/active');
		cy.get('.todo-checkbox').each((element) => {
			// cy.wrap(element).should('not.be.checked');
			cy.get(element).should('not.be.checked');
		});
	});
});
