import { MutualtalkHomepagePage } from './app.po';

describe('mutualtalk-homepage App', function() {
  let page: MutualtalkHomepagePage;

  beforeEach(() => {
    page = new MutualtalkHomepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
