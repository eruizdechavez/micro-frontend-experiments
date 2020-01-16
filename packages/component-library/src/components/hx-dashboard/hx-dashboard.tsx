import { h, Component } from '@stencil/core';

@Component({
	tag: 'fe-hx-dashboard',
	styleUrl: 'hx-dashboard.css',
	shadow: true,
})
export class HxDashboard {
	render() {
		return <h1>I am the HX Dashboard 💥</h1>;
	}
}
