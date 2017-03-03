Feature: Register a New User

  @ContinuousIntegration
  Scenario: Display an error if a weak password is used
    Given I open the home page
    When I select Budget
    And I click Register
    And I enter "test@fake.com" into the email field
    And I enter "123" into the password field
    Then I expect to see an error indicating my password is too weak
