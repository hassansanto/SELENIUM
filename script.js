const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
//const chrome = require("selenim-webdriver/chrome")

const productName = ("Nike react phantom run flyknit 2")
async function testRun(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://demo.evershop.io/")
    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Nike);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(key.ENTER);
    await driver.findElement(By.xpath(`//a[contains(@herf,'182')]/span[contains(text(,'${productName}')]`)).click();
    await driver.findElement(By.xpath("//input[@name = 'qty']")).clear();
    await driver.sleep(5000)
    await driver.quit();
}

testRun();