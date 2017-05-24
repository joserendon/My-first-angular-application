import { MiProyecto2Page } from './app.po';

describe('mi-proyecto2 App', () => {
  let page: MiProyecto2Page;

  beforeEach(() => {
    page = new MiProyecto2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
