const btnE1 = document.getElementById("btn");


// ------------------call the button using document.getElementby id



// multiplication table

function multiplication() {
    const table1 = document.getElementById("result")
    const num1 = document.getElementById("Number1").value;

    const num2 = document.getElementById("Number2").value;

    //----------------converting string to Number--------------------
    const startNumber = parseInt(num1);
    const endNumber = parseInt(num2);
    // ---------table---------------------
    var table;
    table = "<table id = mtable>";

    console.log(table)
    if (startNumber == null || startNumber == "")
        startNumber = 1;
    if (endNumber == null || endNumber == "")
        endNumber = 10;
    for (i = 1; i <= 10; i++) {
        table += "<tr>";
        for (j = startNumber; j <= endNumber; j++) {
            table += "<td>" + i * j + "</td>";

           
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("result").innerHTML = table;
}


btnE1.addEventListener("click", multiplication);
