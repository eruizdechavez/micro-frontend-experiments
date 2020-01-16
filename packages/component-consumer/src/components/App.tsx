import React, { Component } from 'react';

export class App extends Component {
	state = { first: '', last: '', email: '' };

	names = [
		{ first: 'Erick', last: 'Ruiz de Chavez', email: 'erick.ruizdechavez@fireeye.com' },
		{ first: 'John', last: 'Doe', email: 'john.doe@example.com' },
	];

	setName(item) {
		this.setState(item);
	}

	render() {
		const { first, last, email } = this.state;
		return (
			<>
				<fe-hx-dashboard></fe-hx-dashboard>
				<p>
					{this.names.map((item, idx) => (
						<button key={idx} onClick={() => this.setName(item)}>
							{item.first}
						</button>
					))}
				</p>
				<p>{first ? <my-component first={first} last={last}></my-component> : <span>Select an item first.</span>}</p>
				<p>
					{first ? (
						<fe-helix-header name={`${first} ${last}`} email={email}></fe-helix-header>
					) : (
						<span>Select an item first.</span>
					)}
				</p>
				<p>
					<my-other-component></my-other-component>
				</p>
				<p>
					<d3-demo></d3-demo>
				</p>
			</>
		);
	}
}
