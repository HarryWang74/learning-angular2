import { LearningAngular2Page } from './app.po';

describe('learning-angular2 App', () => {
  let page: LearningAngular2Page;

  beforeEach(() => {
    page = new LearningAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
