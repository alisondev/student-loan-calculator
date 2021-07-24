This project is a simple student loan payoff calculator, designed as a portfolio project for Code Louisville's May 2021 JavaScript class.

This app allows the user to input their current loan balance, interest rate, and intended monthly payment. From there, it calculates a) how many payments it will take to reach a zero balance, b) the total amount that will be paid, c) the total interest paid, d) the estimated payoff date. In the process, it checks whether it is actually possible to pay off the current balance, with the interest rate and monthly payment specified, within a human lifespan. If not, it displays a message to that effect. If so, it displays the results.

There is also an email field that allows the user to provide an email address and have the results emailed there. Presently, this field only validates the email address. It does not actually send the results yet.

Features included to meet project requirements include the following:

1. Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format. The email field validates the user input using a regex.

2. Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event). The app calculates the payoff date by starting with the current date.

3. 

