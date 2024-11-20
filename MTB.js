function Multiply() {
    let num = document.getElementById('num').value;
    num = Number(num);  

    let startRange = 1; 

    let range = document.getElementById('range').value;
    range = Number(range);  

    document.getElementById('table').innerHTML = '';

    if (isNaN(num) || num <= 0) {
        document.getElementById('table').innerHTML = "Enter a number greater than 0.";
        return;
    }

    if (isNaN(range) || range <= 0 || range < startRange) {
        document.getElementById('table').innerHTML = "Enter a valid range greater than or equal to 1.";
        return;
    }

    let tableHTML = `<h2>Multiplication Table for ${num} (Range: ${startRange} to ${range})</h2>`;
        tableHTML += `<table><thead><tr><th>Multiplier</th><th>Result</th></tr></thead><tbody>`;

        for (let i = startRange; i <= range; i++) {
        tableHTML += `<tr><td>${i}</td><td>${num * i}</td></tr>`;
        }

    tableHTML += `</tbody></table>`;

    document.getElementById('table').innerHTML = tableHTML;
}