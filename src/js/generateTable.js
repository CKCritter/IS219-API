export default function generateTable(data) {
  console.log('gen table');
  console.log(data);
  const table = document.getElementById('hw_100');
  for (const row of data) {
    console.log(row);
    const newRow = table.insertRow();
    for (const key of Object.entries(row)) {
      console.log(key);
      const cell = newRow.insertCell();
      const text = document.createTextNode(key[1]);
      cell.appendChild(text);
    }
  }
}
