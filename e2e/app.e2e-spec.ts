import { NggalleryPage } from './app.po';

describe('nggallery App', () => {
  let page: NggalleryPage;

  beforeEach(() => {
    page = new NggalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng works!');
  });
});
