/** @format */
///<reference types='cypress' />

describe('Todo App UI', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	// it('Should display error when there is no response from API', () => {
	// 	cy.request('http://localhost:8080/todos').then((res) => {
	// 		cy.log(res.body);
	// 		cy.get(res.body).should('have.length.greaterThan', 0);
	// 		cy.get('.Todo-List ul').should('be.visible');
	// 	});
	// });
	it('Should not add a empty todo', () => {
		cy.addNewTodo('');
		cy.get('.error').should('be.visible');
	});
	it('Should add a new todo correctly ', () => {
		// cy.get('.todo-input').type('FIRST TODO{enter}').type('{enter}');
		// cy.get('.todo-input').type('FIRST TODO{enter}');
		// cy.get('.success').should('be.visible');
		cy.intercept({ method: 'POST', url: 'http://localhost:8080/todos' }).as(
			'postRequest'
		);
		cy.addNewTodo('First Todo');
		cy.wait('@postRequest').then((xhr) => {
			expect(xhr.request.body.name).to.eq('First Todo');
		});
		cy.get('.todo-item').last().should('contain', 'First Todo');
	});
	it('Should be able to toggle the status', () => {
		// cy.get('.todo-input').type('FIRST TODO{enter}');
		// cy.get('.success').should('be.visible');
		cy.addNewTodo('Second Todo');
		cy.get('.todo-checkbox').check().should('be.checked');
		cy.get('.todo-checkbox').uncheck().should('not.be.checked');
	});
	it('Should delete the todo correctly', () => {
		cy.addNewTodo('Third Todo');
		cy.get('.delete-item').click();
	});
	afterEach(() => {
		cy.get('body').then(($el) => {
			if ($el.find('.delete-item').length) {
				cy.get('.delete-item').click({ multiple: true });
			}
		});
	});
});
