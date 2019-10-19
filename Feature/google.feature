
Feature:Test search in google


Background:user has to open browser
Given user opens chrome browser
Then user enters url
Scenario:Verify search field
Given user serch for a text in search field
And user clicks on google search button
Then user gets the result

Scenario:Verify logo is displayed
Given user search whether logo is present
And returns true