import { newE2EPage } from '@stencil/core/testing';

describe('my-other-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-other-component></my-other-component>');

    const element = await page.find('my-other-component');
    expect(element).toHaveClass('hydrated');
  });
});
