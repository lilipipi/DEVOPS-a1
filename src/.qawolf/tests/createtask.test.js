const { launch } = require("qawolf");
const selectors = require("../selectors/createtask");
const clearDB = require('../clear-db');


describe('createtask', () => {
  let browser;

  beforeAll(async () => {
    try {
      await clearDB();
    }catch(err) {
      console.error(err);
    }
    browser = await launch({ url: "http://localhost:3000/" });
    const context = await browser.newContext();
    await qawolf.register(context);
    page = context.newPage();
    await page.goto('http://localhost:3000/')
  });

  afterAll(async () => {
    try {
      await browser.close();
    }catch(err) {
      console.log(err);
    }
  });
  
  it('can click "username" input', async () => {
    await page.click(selectors[0]);
  });
  
  it('can clear "username" input', async () => {
    await page.type(selectors[1], "TestUser");
  });
  
  it("can click input", async () => {
    await page.click(selectors[2]);
  });
  
  it('can click "title" input', async () => {
    await page.click(selectors[3]);
  });
  
  it('can clear "title" input', async () => {
    await page.type(selectors[4], "TestTask");
  });
  
  it("can click input", async () => {
    await page.click(selectors[5]);
    const hasText = await page.hasText("TestTask");
    expect(hasText).toBe(true);
  });

  

});