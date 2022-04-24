


function appendRow() {
    let table = document.getElementById('tbl');
    let num_rows = table.rows.length
    let cells = table.rows[num_rows-1].cells.length;
    table.insertRow(num_rows)
    for (let i = 0; i < cells; i++) {
        table.rows[num_rows].insertCell()
        //let txt = document.createTextNode('test')
        //table.rows[num_rows].cells[i].appendChild(txt)
    }
    return table.rows.length + table.rows[num_rows].cells.length
}

console.log(appendRow())