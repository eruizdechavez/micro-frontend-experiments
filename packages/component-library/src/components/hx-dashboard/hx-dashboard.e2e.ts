import { newE2EPage } from '@stencil/core/testing';

describe('fe-hx-dashboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fe-hx-dashboard></fe-hx-dashboard>');

    const element = await page.find('fe-hx-dashboard');
    expect(element).toHaveClass('hydrated');
  });
});
