//Worked on by David Cloud and Travis Bostick

const form =  document.querySelector('form'); //grabbing element on page
const API_URL = 'http://localhost:5000/fuel_quote';

form.addEventListener('submit', (event) =>
{
    event.preventDefault();
    const formData = new FormData(form);

    const galRequest = formData.get('galRequest');
    const delvAddr = formData.get('delvAddr')
    //const delvAddr = "Client's Address"
    const delvDate = formData.get('delvDate');
    const price = formData.get('price')
    // const price = galRequest * 1.823;

    const fuel_quote = {
        galRequest,
        delvAddr,
        delvDate,
        price
    };
    //after this we will access the database and put this information into 
    //the correct user fuel quote history
    console.log(fuel_quote);
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(fuel_quote),
        headers: {
            'content-type': 'application/json'
        }
    });
});

//priceModule for calculating current fuel quote
class priceModule {

    constructor(quote) {
      this.currentQuote = quote;
    }

    calcQuote(galRequest, price) {
        quote = galRequest * price;
        return quote
    }
}
