# Cloudcase Coding Challenge

## Development

- Initial setup:

  ```sh
  npm install
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

## Hosting

To view this form in a hosted environment you can you use following url: https://cloudcase-coding-challenge.web.app.. The salary deploye with this version is $250000. 

## Assumptions

- Employees salary is set by admin before onboarding form is sent to end user. (this can be changed within the code by changing the constant `EMPLOYEE_SALARY`)
- Employee email is set by admin before onboarding form is sent to end user as this is where the link will be sent.
- Superannuation is calculated at `10.50%` of annual salary
- A password is required to login to this HR system however after onboarding you will be redirected directly to the results page
- Tax is calculated annually as the salary would be set for the year
- Salary would be set by the admin in Australian Dollars
- Passwords need to match before you can submit the form
- Superannuation is calculated on your salary before tax
- Banking information is not part of the onboarding form as the user should enter that information in an authenticated environment

## Design Desicions

- I have kept the fields filled out on the onboarding form really light to prevent the barrier of using the system really low
- I have marked all required fields with a red astrix to show the user that they are required
- I have disbaled the employee number as that cannot be edited.
- Gender is a radio button group as free text would open up the system to unwanted values.
- If more fields were to be required i.e address information/contact information from the get go, I would turn the onboarding form into a multi-step wizard to make the input more digestable.
- Fields are aligned vertically to make reading down the page easier
- On submit of the form you will be shown your results, if reset is clicked you will be shown the form again. (This would not happen in a production environment)

## Testing

To run tests:

```sh
npm run test
```

The following test data has been used to ensure the calculations work correctly:

![Test Data](https://firebasestorage.googleapis.com/v0/b/cloudcase-coding-challenge.appspot.com/o/tax-brackets-test.PNG?alt=media&token=86f905ee-d5b0-4715-80ea-01e2a7068e3e)
