import { NICKPage } from './app.po';

describe('nick App', () => {
  let page: NICKPage;

  beforeEach(() => {
    page = new NICKPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
