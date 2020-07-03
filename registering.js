//Worked on by Stephen Mackey
const form =  document.querySelector('form'); //grabbing element on page

form.addEventListener('submit', (event) =>
{
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const addr1 = formData.get('addr1');
    const addr2 = formData.get('addr2');
    const city = formData.get('city');
    const state = formData.get('states');
    const zipcode = formData.get('zipcode');

    const profile_complete = {
        name,
        addr1,
        addr2,
        city,
        state,
        zipcode
    };
    //after this we will access the database and put this information into 
    //the correct user information to complete the profile information
});