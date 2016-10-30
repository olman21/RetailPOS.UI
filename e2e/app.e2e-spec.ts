import { RetailStorePage } from './app.po';

describe('retail-store App', function() {
  let page: RetailStorePage;

  beforeEach(() => {
    page = new RetailStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
