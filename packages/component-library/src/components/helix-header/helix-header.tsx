import { h, Component, Prop } from '@stencil/core';

@Component({
	tag: 'fe-helix-header',
	styleUrl: 'helix-header.css',
	shadow: true,
})
export class HelixHeader {
	@Prop() name: string;

	@Prop() email: string;

	render() {
		return (
			<h1>
				Welcome {this.name}, your email is {this.email}
			</h1>
		);
	}
}
