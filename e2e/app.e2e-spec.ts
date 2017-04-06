import { ShowcaseMasterPage } from './app.po';

describe('showcase-master App', () => {
  let page: ShowcaseMasterPage;

  beforeEach(() => {
    page = new ShowcaseMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
