const {By,Key,Builder} = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");

// const example = async () =>{
//         var searchString = "Automation testing with Selenium and JavaScript";
//
//         let driver = await new Builder().forBrowser('chrome').build();
//
//         // To fetch http://google.com from the browser with our code.
//         await driver.get("https://google.com");
//
//         // To send a search query by passing the value in searchString.
//         await driver.findElement(By.css("#L2AGLb")).click();
//         await driver.findElement(By.css("input")).sendKeys(searchString,Key.RETURN);
//
//         // //Verify the page title and print it
//         var title = await driver.getTitle();
//         console.log('Title is:',title);
//
//         // //It is always a safe practice to quit the browser after execution
//         await driver.quit();
// }


const example = () =>{
    test("display text in input search google", async () => {
        var searchString = "Automation testing with Selenium and JavaScript";

        let driver = await new Builder().forBrowser('chrome').build();

        // To fetch http://google.com from the browser with our code.
        await driver.get("https://google.com");

        // To send a search query by passing the value in searchString.
        await driver.findElement(By.css("#L2AGLb")).click();
        await driver.findElement(By.css("input")).sendKeys(searchString,Key.RETURN);
        await driver.findElement(By.css('#hdtb-msb > div:nth-child(1) > div > div:nth-child(2) > a')).click().then(function() {
            driver.sleep(10000);
        });
        await driver.findElement(By.css("#hdtb-msb > div:nth-child(1) > div > div:nth-child(1) > a")).click();

        // Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);

        // It is always a safe practice to quit the browser after execution
        await driver.quit();

    }, 30000)
}

example();
