$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/apappinisserikoranku/Desktop/Planit Docs/eclipseworkspace2/testone/Feature/google.feature");
formatter.feature({
  "line": 2,
  "name": "Test search in google",
  "description": "",
  "id": "test-search-in-google",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "user has to open browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user opens chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters url",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_opens_chrome_browser()"
});
formatter.result({
  "duration": 7913258300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_enters_url()"
});
formatter.result({
  "duration": 1465555000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify search field",
  "description": "",
  "id": "test-search-in-google;verify-search-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user serch for a text in search field",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user clicks on google search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user gets the result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_serch_for_a_text_in_search_field()"
});
formatter.result({
  "duration": 158080200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_google_search_button()"
});
formatter.result({
  "duration": 4630518000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_gets_the_result()"
});
formatter.result({
  "duration": 4346225400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user has to open browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user opens chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters url",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_opens_chrome_browser()"
});
formatter.result({
  "duration": 7312290100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_enters_url()"
});
formatter.result({
  "duration": 1480997700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify logo is displayed",
  "description": "",
  "id": "test-search-in-google;verify-logo-is-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user search whether logo is present",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "returns true",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_search_whether_logo_is_present()"
});
formatter.result({
  "duration": 101092600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.returns_true()"
});
formatter.result({
  "duration": 9220356100,
  "status": "passed"
});
});