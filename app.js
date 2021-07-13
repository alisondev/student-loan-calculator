button = document.getElementById('calculate');

function calculate(){
    const currentBalance = document.getElementById('currentBalance').value;
    const interestRate = document.getElementById('interestRate').value;
    const monthlyPayment = document.getElementById('monthlyPayment').value;
    
    const periodicInterest = (interestRate * 0.01)/12;
    const precisePayments = ((-1) * (Math.log(1 - currentBalance/monthlyPayment * (periodicInterest)))) / Math.log(1 + periodicInterest);
    const numberOfPayments = Math.ceil(precisePayments);

    const numberOfYears = (numberOfPayments/12).toFixed(2);
    const totalPaid = numberOfPayments * monthlyPayment;
    const totalInterestPaid = totalPaid - currentBalance;
    
    document.getElementById('results').innerHTML = `It will take you ${numberOfPayments} payments to reach a zero balance. That is ${numberOfYears} years. You will have paid approximately $${totalPaid}, including $${totalInterestPaid} in interest.`;
}

button.addEventListener('click', calculate);