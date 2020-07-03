//Worked on by David Cloud

const form =  document.querySelector('form'); //grabbing element on page

form.addEventListener('submit', (event) =>
{
    event.preventDefault();
    const formData = new FormData(form);

    const galRequest = formData.get('gallons');
    const delvAddr = formData.get('delvAddr')
    const delvDate = formData.get('delvDate');
    const price = formData.get('price')

    const fuel_quote = {
        galRequest,
        delvAddr,
        delvDate,
        price
    };
    //after this we will access the database and put this information into 
    //the correct user fuel quote history
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
