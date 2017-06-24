import { Angular2apiPage } from './app.po';

describe('angular2api App', () => {
  let page: Angular2apiPage;

  beforeEach(() => {
    page = new Angular2apiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
