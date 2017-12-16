import { TasteoflifePage } from './app.po';

describe('tasteoflife App', () => {
  let page: TasteoflifePage;

  beforeEach(() => {
    page = new TasteoflifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
