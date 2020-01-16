import { newE2EPage } from '@stencil/core/testing';

describe('d3-demo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d3-demo></d3-demo>');

    const element = await page.find('d3-demo');
    expect(element).toHaveClass('hydrated');
  });
});
