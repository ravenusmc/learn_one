import { LearnOnePage } from './app.po';

describe('learn-one App', function() {
  let page: LearnOnePage;

  beforeEach(() => {
    page = new LearnOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
