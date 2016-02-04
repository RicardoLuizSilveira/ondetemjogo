'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe("ondetemjogo", function() {

  it('should navigate to login', function() {
    browser.get('#login');
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });

});
