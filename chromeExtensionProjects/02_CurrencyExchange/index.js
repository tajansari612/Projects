
const convertBtn = document.getElementById('convert-btn')

convertBtn.addEventListener("click",(e) =>{
  e.preventDefault()

  const input_1 = document.getElementById('currency-1').value
  const input_2 = document.getElementById('currency-2').value
  const amount = document.getElementById('amount').value

  const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${input_1}&to=${input_2}&amount=${amount}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '2ccc11f6c7msh9c4cfc38e515f73p1c1d14jsn36297ff7be12',
      'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
  };

  async function rapid(){
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      console.log(result)
      const output = document.getElementById('output')
      output.innerHTML = result.result
    } catch (error) {
      console.error(error);
    }
  }

  rapid()

})





