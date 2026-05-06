function calculateMortgage() {

    let loan = parseFloat(document.getElementById("loanAmount").value);
    let rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    let months = parseFloat(document.getElementById("years").value) * 12;

    let monthlyPayment =
        (loan * rate) / (1 - Math.pow(1 + rate, -months));

    document.getElementById("result").innerHTML =
        "$" + monthlyPayment.toFixed(2);
}

function resetMortgage() {

    document.getElementById("loanAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("years").value = "";

    document.getElementById("result").innerHTML = "$0.00";
}