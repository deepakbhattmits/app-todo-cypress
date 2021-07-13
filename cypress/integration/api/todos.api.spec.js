/** @format */
///<reference types='cypress' />

describe('Test all the Todo using the API', () => {
	//add ---> ID
	//get
	//update
	//delete
	let id;
	// it('Get request 1', () => {
	// 	cy.request('http://localhost:8080/todos').then((res) => {
	// 		expect(res.status).to.be.eq(200);
	// 		expect(res.duration).to.be.below(20000);
	// 		expect(res.body[1].isComplete).to.be.false;
	// 	});
	// });

	// it('Get request  single item ', () => {
	// 	cy.request('http://localhost:8080/todos?id=9621').then((res) => {
	// 		expect(res.status).to.be.eq(200);
	// 		expect(res.duration).to.be.below(20000);
	// 		expect(res.body[0].isComplete).to.be.false;
	// 	});
	// });
	// it('Get request with method:GET ', () => {
	// 	cy.request({
	// 		method: 'GET',
	// 		url: 'http://localhost:8080/todos',
	// 		qs: { id: 9621 },
	// 	}).then((res) => {
	// 		expect(res.status).to.be.eq(200);
	// 		expect(res.duration).to.be.below(20000);
	// 		expect(res.body[0].isComplete).to.be.false;
	// 	});
	// });
	// it('Get request without method and with queryString (qs)', () => {
	// 	cy.request({
	// 		url: 'http://localhost:8080/todos',
	// 		qs: { id: 9621 },
	// 	}).then((res) => {
	// 		expect(res.status).to.be.eq(200);
	// 		expect(res.duration).to.be.below(20000);
	// 		expect(res.body[0].isComplete).to.be.false;
	// 	});
	// });

	/*---------------------------*/
	/*---------------------------*/
	//add ---> ID
	//get
	//update
	//delete
	it('POST request', () => {
		cy.request({
			method: 'POST',
			url: 'http://localhost:8080/todos',
			body: {
				isComplete: false,
				name: 'Learn cypress',
			},
		}).then((res) => {
			cy.log(res.body);
			id = res.body.id;
			expect(res.status).to.be.eq(201);
			expect(res.status).to.be.eq(201);
		});
	});
	it('Get request with method:GET ', () => {
		cy.request({
			method: 'GET',
			url: 'http://localhost:8080/todos',
			qs: { id: id },
		}).then((res) => {
			expect(res.status).to.be.eq(200);
			expect(res.duration).to.be.below(20000);
			expect(res.body[0].isComplete).to.be.false;
		});
	});
	it('PUT request', () => {
		cy.request({
			method: 'PUT',
			url: `http://localhost:8080/todos/${id}`,
			body: {
				name: 'guess',
				id: id,
				isComplete: true,
			},
		}).then((res) => {
			cy.log(res.body);
			expect(res.status).to.be.eq(200);
		});
	});
	it('DELETE request', () => {
		cy.request({
			method: 'DELETE',
			url: `http://localhost:8080/todos/${id}`,
			body: {
				name: 'guess',
				id: id,
				isComplete: true,
			},
		}).then((res) => {
			cy.log(res.body);
			expect(res.status).to.be.eq(200);
		});
	});
	// to run only this it block we can use it.only
	// it.only('Secure API request', () => {
	// 	cy.request({
	// 		method: 'GET',
	// 		url: 'http://localhost:8080/courses',
	// 		headers: {
	// 			Authorization:
	// 				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjNAbWFpbC5jb20iLCJpYXQiOjE2MjU5MDI4MjUsImV4cCI6MTYyNTkwNjQyNSwic3ViIjoiNiJ9.3PhPA7xyRj_kRbq5d0IkxW7VvajrqmtaLv3ncep_7Ys',
	// 		},
	// 		// auth: {
	// 		// 	bearer:
	// 		// 		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjNAbWFpbC5jb20iLCJpYXQiOjE2MjU5MDI4MjUsImV4cCI6MTYyNTkwNjQyNSwic3ViIjoiNiJ9.3PhPA7xyRj_kRbq5d0IkxW7VvajrqmtaLv3ncep_7Ys',
	// 		// },
	// 	}).then((res) => {
	// 		cy.log(res.body);
	// 		expect(res.status).to.be.eq(200);
	// 	});
	// });
});
