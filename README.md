# Password Generator Project

This application will allow users to generate strong passwords. This application will ask the users series of prompts to create a strong passwords.

## User Story 
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Usage
* open the application at ...
* Once the application is open, the user will see "generate password" button.
* When the user click on the button, the user is asked series of questions. (length, lowercase, uppercase, numbers, and special characters)
* After answering all the prompts, the password will generate accroding to the users answers.