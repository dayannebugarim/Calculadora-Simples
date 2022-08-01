const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const valores = [];
    let getValores = document.getElementById('input');
    console.log(getValores.);
    getValores.addEventListener('change', (event) => {
        event.preventDefault() 
        valores.push(getValores.value);
    })
})