const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver")

// const example = async () =>{
//         let username = "admin";
//         let password = "campus"
//
//         let driver = await new Builder().forBrowser('chrome').build();
//
//         // To fetch browser
//         await driver.get("https://polr.jsz4n.dev");
//
//         // to methods
//         //await driver.findElement(By.css("#navbar > li:nth-child(1) > a")).click();
//         // await driver.findElement(By.css("body > div.container > div > div > div.col-md-6 > form > input:nth-child(1)")).sendKeys(username,Key.RETURN);
//         // await driver.findElement(By.css("body > div.container > div > div > div.col-md-6 > form > input:nth-child(2)")).sendKeys(password,Key.RETURN);
//         // await driver.findElement(By.css("input.login-submit.btn.btn-success")).click();
//
//         // to quit the browser after execution
//         // await driver.quit();
// }


const displayPolr = () =>{
    test("display site", async () => {
        var username = "admin";
        var password = "campus"

        let driver = await new Builder().forBrowser('chrome').build();

        // To fetch browser
        await driver.get("https://polr.jsz4n.dev/login");

        // To methods.
        //await driver.findElement(By.css("#navbar > li:nth-child(1) > a")).click();
        await driver.findElement(By.css("body > div.container > div > div > div.col-md-6 > form > input:nth-child(1)")).sendKeys(username,Key.END);
        await driver.findElement(By.css("body > div.container > div > div > div.col-md-6 > form > input:nth-child(2)")).sendKeys(password,Key.RETURN);
        // await driver.findElement(By.css("input.login-submit.btn.btn-success")).click();

        // to quit
        // await driver.quit();

    }, 30000)
}

displayPolr();

