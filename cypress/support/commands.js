/** @format */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addNewTodo', (todo) => {
	cy.get('.todo-input').type(`${todo}{enter}`);
	if (!!todo) {
		cy.get('.success').should('be.visible');
	} else {
		cy.get('.error').should('be.visible');
	}
});
Cypress.Commands.add('addDummyTodos', () => {
	const todosExample = [
		{ isComplete: false, name: 'Learn Cypress' },
		{ isComplete: true, name: 'Learn React' },
		{ isComplete: false, name: 'Drink Coffee' },
		{ isComplete: true, name: 'Eat Maggi' },
		{ isComplete: false, name: 'Drink Water' },
	];

	todosExample.forEach((body) => {
		cy.request({
			method: 'POST',
			url: 'http://localhost:8080/todos',
			body,
		});
	});
});
