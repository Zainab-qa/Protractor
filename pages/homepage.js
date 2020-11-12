const { Browser } = require("selenium-webdriver");

let homepage = function(){

    //locators
    let firstNumber_input = element(by.model('first'))
    let secondNumber_input = element(by.model('second'))
    let gotButton = element(by.css('[ng-click="doAddition()"]'))
    let output = element(by.cssContainingText('.ng-binding','7'))
   
    console.log("New change added from dev branch");
    console.log('Hi i am from dev2 brnach');
    this.get = function(url){
        browser.get(url)
    }

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    }
    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo)
    }
    this.clickGo = function(){
        gotButton.click();
    }
    this.verifyResult = function(result){
        expect(output.getText()).toEqual(result);
    }
   




};

module.exports = new homepage();