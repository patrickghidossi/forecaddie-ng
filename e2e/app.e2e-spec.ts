import { ForecaddiePage } from './app.po';

describe('forecaddie App', function() {
  let page: ForecaddiePage;

  beforeEach(() => {
    page = new ForecaddiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
