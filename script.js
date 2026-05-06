// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("invoiceDate").valueAsDate = new Date();
    addRow(); // start with one row
    calculateTotals();
});


// ADD ROW (ITEM + AMOUNT IN ONE CELL)
function addRow() {
    let table = document.querySelector("#invoiceTable tbody");
    let row = table.insertRow();

    // ITEM + AMOUNT BOX (COMBINED)
    let itemCell = row.insertCell(0);
    itemCell.innerHTML = `
        <div class="item-box">
            <input type="text" class="item-input" placeholder="Item description">
            <input type="number" class="amount" min="0" step="0.01" placeholder="0.00">
        </div>
    `;

    // DELETE BUTTON
    let actionCell = row.insertCell(1);
    actionCell.innerHTML = `<button type="button" onclick="deleteRow(this)">Delete</button>`;

    // AUTO-FOCUS NEW ITEM INPUT
    itemCell.querySelector(".item-input").focus();
}


// DELETE ROW
function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
    calculateTotals();
}


// CLEAR FORM
function clearForm() {
    document.querySelector("#invoiceTable tbody").innerHTML = "";

    document.getElementById("taxRate").value = 0;
    document.getElementById("extraCosts").value = 0;

    document.getElementById("subtotal").textContent = "$0.00";
    document.getElementById("total").textContent = "$0.00";

    document.getElementById("invoiceDate").valueAsDate = new Date();

    addRow();
}


// CALCULATE TOTALS
function calculateTotals() {
    let amounts = document.querySelectorAll(".amount");
    let subtotal = 0;

    amounts.forEach(input => {
        let value = parseFloat(input.value);

        if (isNaN(value) || value < 0) {
            value = 0;
        }

        subtotal += value;
    });

    let taxRate = parseFloat(document.getElementById("taxRate").value) || 0;
    let extraCosts = parseFloat(document.getElementById("extraCosts").value) || 0;

    if (taxRate < 0) taxRate = 0;
    if (extraCosts < 0) extraCosts = 0;

    let taxAmount = subtotal * (taxRate / 100);
    let total = subtotal + taxAmount + extraCosts;

    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
}


// LIVE UPDATE
document.addEventListener("input", calculateTotals);