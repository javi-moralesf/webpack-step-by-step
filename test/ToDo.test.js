describe('toggle all', function () {
	it('should toggle all todos to completed', function () {
		var todos = [{
			id: 42,
			title: 'my todo',
			completed: false
		}, {
			id: 21,
			title: 'another todo',
			completed: false
		}];


		expect(todos[0].id).to.equal(42);
		expect(todos[0].title).to.equal('my todo');
		expect(todos[1].id).to.equal(21);
		expect(todos[1].completed).to.be.false;
	});
});