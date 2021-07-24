const calculateButton = document.getElementById('calculate');
let numberOfYears;

let averageLoanData = [];
averageLoanData.push("Undergraduate: $28,950","Graduate: $71,000", "MBA: $66,300", "Law: $145,000", "Pharmacy: $179,514", "Medical: $201,490", "Dental: $292,169");
console.log(averageLoanData);

function didYouKnow(){
    const random = Math.floor(Math.random() * averageLoanData.length);
    const randomFact = (random, averageLoanData[random]);
    return randomFact;
}

function addEmailField(){
    document.getElementById('emailP').innerHTML = `
    <form id="emailMe">
        <ul>
            <li class="form-row">
                <label for="email">Email results to:</label><br>
                <input type="email" id="email" name="email" placeholder="user@example.com">
            </li>
            <li class="form-row">
                <button type="button" id="emailSubmit" onclick="validateEmail()">Submit</button>
            </li>
        </ul>
    </form>
    `
}

function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        document.getElementById('results').innerHTML = `<h2>Results</h2><p>It will take you ${numberOfPayments} payment(s) to reach a zero balance.</p><p>You will have paid approximately $${addCommas(totalPaid.toFixed(2))}, including $${addCommas(totalInterestPaid.toFixed(2))} in interest.</p>`;
        addEmailField();

        const now = new Date();
        const then = new Date();
        then.setDate(then.getDate() + (numberOfPayments * 30.44));
        const days = Math.floor((then - now) / (1000*60*60*24));
    
        document.getElementById('payoffDate').innerHTML = `<p>Your loan will be paid off by ${then.toDateString()}, which is ${numberOfYears.toFixed(1)} year(s), ${numberOfPayments} month(s), or ${days} days from now.</p><p>But who's counting?</p>
        <h2>You're not alone</h2>
        <p>Check out the average student loan debt for this degree:<br>${didYouKnow()}</p>
        `
    } else {
        document.getElementById('results').innerHTML = `<h2>Oops</h2><p>It will take you more than 122 years to pay off the loan. That's longer than the lifespan of the oldest human ever. Try increasing your payments or decreasing the interest rate.</h2>`;
        addEmailField();
    }
}

calculateButton.addEventListener('click', calculate);