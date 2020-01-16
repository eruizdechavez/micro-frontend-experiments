import { newE2EPage } from '@stencil/core/testing';

describe('fe-helix-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fe-helix-header></fe-helix-header>');

    const element = await page.find('fe-helix-header');
    expect(element).toHaveClass('hydrated');
  });
});
