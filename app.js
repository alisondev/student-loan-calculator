const button = document.getElementById('calculate');
let numberOfPayments;
let numberOfYears;

function addEmailField(){
    document.getElementById('emailP').innerHTML = `
    <form id="emailMe">
        <ul class="wrapper">
            <li class="form-row">
                <label for="email">Email results to:</label><br>
                <input type="email" id="email" name="email">
            </li>
            <li class="form-row">
                <button type="button" id="emailSubmit" onclick="validateEmail()">Submit</button>
            </li>
        </ul>
    </form>
    `
}

function validateEmail(){
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailMe.email.value))
        {
        return (true)
        }
        alert("Please enter a valid email address.")
        return (false)
}

function calculate(){
    const currentBalance = document.getElementById('currentBalance').value;
    const interestRate = document.getElementById('interestRate').value;
    const monthlyPayment = document.getElementById('monthlyPayment').value;

    let endMonthBalance = currentBalance;
    let paymentCounter = 0;
    do {
        endMonthBalance = endMonthBalance * 1.005 - monthlyPayment;
        paymentCounter++;
    } while (endMonthBalance > 0 && paymentCounter <= 1464);
    numberOfPayments = paymentCounter;
    let numberOfYears = numberOfPayments/12;

    if (paymentCounter <= 1464){
        const totalPaid = paymentCounter * (monthlyPayment -1) + endMonthBalance;
        const totalInterestPaid = totalPaid - currentBalance;
        document.getElementById('results').innerHTML = `It will take you ${numberOfPayments} payments to reach a zero balance. That is ${numberOfYears.toFixed(1)} years. You will have paid approximately $${totalPaid.toFixed(2)}, including $${totalInterestPaid.toFixed(2)} in interest.`;
        addEmailField();
        calculateDate();
    } else {
        document.getElementById('results').innerHTML = `It will take you more than 122 years to pay off the loan. That is longer than the lifespan of the oldest human ever. Try increasing your payments or decreasing the interest rate.`;
        addEmailField();
    }
}

/*
function calculateDate(){
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let then = new Date(year + numberOfYears, month, day);
    let days = (then - now)/(60*60*24*1000);

    document.getElementById('payoffDate').innerHTML = `Your loan will be paid off by ${then}, which is ${days} days from now.`
}
*/

button.addEventListener('click', calculate);