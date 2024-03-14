
for (let x in countryList) {
  let country = document.createElement("option");
  country.innerHTML = x;
  document.getElementById('from-drop').append(country);
}

for (let x in countryList) {
  let country = document.createElement("option");
  country.innerHTML = x;
  document.getElementById('to-drop').append(country);
}

document.getElementById('from-drop').addEventListener('change', (e) => {
  for (let element in countryList) {
    if (element == document.getElementById('from-drop').value) {
      document.getElementById('from-img').src = `https://flagsapi.com/${countryList[element]}/flat/64.png`;
    }
  }
});

document.getElementById('to-drop').addEventListener('change', (e) => {
  for (let element in countryList) {
    if (element == document.getElementById('to-drop').value) {
      document.getElementById('to-img').src = `https://flagsapi.com/${countryList[element]}/flat/64.png`;
    }
  }
});


function calculate(){
  
  let currency_from = document.getElementById('from-drop').value
  let currency_to = document.getElementById('to-drop').value
  let amount = document.getElementById('amount').value
  console.log(amount);
  const URL = `https://api.fxratesapi.com/convert?from=${currency_from}&to=${currency_to}&date=2024-03-14&amount=${amount}&format=json`;
  const get_data = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let value = data.result;
    document.getElementById('msg').innerHTML = `${amount} ${currency_from} = ${value} ${currency_to}`
  }
  get_data();
}


document.getElementById('but-id').addEventListener('click',calculate);


