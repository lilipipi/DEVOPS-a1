const { launch } = require("qawolf");
const selectors = require("../selectors/createuser");
const clearDB = require('../clear-db');

describe('createuser', () => {
  let browser;

  beforeAll(async () => {
    try {
      await clearDB();
    }catch(err) {
      console.error(err);
    }
    browser = await launch({ url: 'http://localhost:3000/' });
  });

  afterAll(async () => {
    try {
      await browser.close();
    }catch(err) {
      console.log(err);
    }
  });
  
  it('can click "username" input', async () => {
    await browser.click(selectors[0]);
  });
  
  it('can clear "username" input', async () => {
    await browser.type(selectors[1], "TestUser");
  });
  
  it("can click input", async () => {
    await browser.click(selectors[2]);
    const hasText = await browser.hasText("TestUser");
    expect(hasText).toBe(true);
  });
});