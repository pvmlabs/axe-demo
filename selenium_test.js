    var webdriver = require('selenium-webdriver'),
    AxeBuilder = require('axe-webdriverjs'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get('http://localhost:8082/').then(function () {
    AxeBuilder(driver).analyze(function (results) {
        console.log(results);
      });
  });

  driver.sleep(3000).then(function() {
    driver.findElement(By.tagName('a')).click();
  });

  driver.sleep(2000).then(function() {
    AxeBuilder(driver).analyze(function (results) {
        console.log(results);
      });
  });

  driver.sleep(3000).then(function() {
    driver.findElement(By.tagName('a')).click();
  });

  driver.sleep(2000).then(function() {
    AxeBuilder(driver).analyze(function (results) {
        console.log(results);
      });
  });
driver.quit();
