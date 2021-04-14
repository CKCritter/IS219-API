export default function generateTable(data){
    console.log("gen table");
    console.log(data);
    const table = document.getElementById("hw_100");
    for(let row of data){
        console.log(row);
        const newRow = table.insertRow()
        for (let key of Object.entries(row)){
            console.log(key);
            let cell = newRow.insertCell();
            let text = document.createTextNode(key[1]);
            cell.appendChild(text);
        }
    }
}
