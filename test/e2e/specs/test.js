// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('https://localhost.local:8443/apiTest.html')
      .waitForElementVisible('body', 500)
      .assert.elementPresent('#apis')
      .assert.elementPresent('#input')
      .assert.elementPresent('#result')
      .elements('css selector', '.e2e', function (result) {
	var selector;
	var element;
	for (var i = 0; i < result.value.length; i++) {	  
	  selector = '.e2e:nth-child(' + (i+2) + ')';
	  (function(selector){
	    browser
	      .getText(selector, function(result) {
		console.log(result.value)
		if(!/dispose/.test(result.value)){
		  browser
		    .click(selector)
		    .pause(100)
		    .assert.containsText('#input', 'apiType')
		    .click("#button")
		    .pause(200)
		    .assert.containsText('#result', '"err": null')	  
		}
	      })
	  })(selector);
	}
      })
      .end();
  }
}
