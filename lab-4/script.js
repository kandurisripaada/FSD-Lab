function fetchJSONData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mock = {
          status: 200,
          data: {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com'
          }
        };
        resolve(mock);
      }, 3000);
    });
  }
  
  fetchJSONData().then(response => {
    const tableBody = document.getElementById('json-table').getElementsByTagName('tbody')[0];
    
    const row = tableBody.insertRow();
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
  
    cell1.textContent = response.data.id;
    cell2.textContent = response.data.name;
    cell3.textContent = response.data.email;
  }).catch(error => {
    console.error('Error:', error);
  });
  