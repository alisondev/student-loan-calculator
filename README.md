This project is a simple student loan payoff calculator, designed as a portfolio project for Code Louisville's May 2021 JavaScript class.

The app allows the user to input their current loan balance, interest rate, and intended monthly payment. From there, it calculates a) how many payments it will take to reach a zero balance, b) the total amount paid, c) the total interest paid, and d) the estimated payoff date. In the process, it checks whether it is actually possible to pay off the current balance, with the interest rate and monthly payment specified, within a human lifespan. If not, it displays a message to that effect instead of the results.

There is also an email field that allows the user to provide an email address and have the results emailed there. Currently, this field only validates the email address. It does not actually send the results anywhere.

Features included to meet project requirements include the following:

1. Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format. The email field validates the user input (using a regex) and an alert when the user clicks the submit button.

2. Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event). The app calculates days to payoff by starting with the current date.

3. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application. The app creates an array and populates it with the average student loan debt by type of degree. The calculation function retrieves and displays a random value from this array in the results.