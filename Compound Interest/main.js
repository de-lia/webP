function generateTable(form){
    var amount;
    var rate;
    var years;
    var interest;
    var table;
    var year = 1;

    amount = form.elements["depos"].valueAsNumber;
    rate = form.elements["annual"].valueAsNumber;
    years = form.elements["years"].valueAsNumber;

    table = "<table>" + 
    "<tr><th>Year</th><th>Starting Value</th>" +
    "<th>Interest Earned</th><th>Ending Value</th></tr>";

    while(year <= years){
        table += "<tr>";
        table += "<td>" + year + "</td>";
        table += "<td>$" + amount.toFixed(2) + "</td>";
        interest = amount * rate/100;
        table += "<td>$" + interest.toFixed(2) + "</td>";
        amount += interest;
        table += "<td>$" + amount.toFixed(2) + "</td>";
        table += "</tr>";
        year++;
    }

    table += "</table>";
    document.getElementById("result").innerHTML = table;
}