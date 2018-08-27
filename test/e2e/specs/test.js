// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    element('#username').val('jang')
    element('#password').val('1234')
    expect(element('#password').val()).toEqual("1234"
  )
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .element('#username').val('jang')
      .element('#password').val('1234')
      .expect(element('#password').val()).toEqual("1234")
      .assert.elementPresent('#username')
      .assert.containsValue('#username', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end()
  }
}
