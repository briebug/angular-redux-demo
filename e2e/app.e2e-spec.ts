import { AngularReduxDemoPage } from './app.po';

describe('angular-redux-demo App', () => {
  let page: AngularReduxDemoPage;

  beforeEach(() => {
    page = new AngularReduxDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
