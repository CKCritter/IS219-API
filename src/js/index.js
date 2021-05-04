import generateTable from './generateTable';

const req = new XMLHttpRequest();
const url = 'http://localhost:9080/api/v1/hw_100';
req.open('GET', url);
req.send();

req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    const data = JSON.parse(req.responseText);
    generateTable(data.data);
  }
};
