const { launch } = require("qawolf");
const selectors = require("../selectors/deleteuser");
const clearDB = require('../clear-db');

describe('deleteuser', () => {
  let browser;
  let page;

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
  });

  afterAll(async() => {
    try {
      await browser.close();
    }catch(err) {
      console.log(err);
    }
  });

  browser = await page.goto('http://localhost:3000/')
  
  it('can click "username" input', async () => {
    await browser.click(selectors[0]);
  });
  
  it('can clear "username" input', async () => {
    await browser.type(selectors[1], "TestUser");
  });
  
  it("can click input", async () => {
    await browser.click(selectors[2]);
  });
  
  it('can click "title" input', async () => {
    await browser.click(selectors[3]);
  });
  
  it('can clear "title" input', async () => {
    await browser.type(selectors[4], "Task 1");
  });
  
  it("can click input", async () => {
    await browser.click(selectors[5]);
    const hasText = await browser.hasText("Task 1");
    expect(hasText).toBe(true);
  });
  
  it('can click "delete" link', async () => {
    await browser.click(selectors[6]);
    const hasText = await browser.hasText("Task 1");
    expect(hasText).toBe(false);
  });
});