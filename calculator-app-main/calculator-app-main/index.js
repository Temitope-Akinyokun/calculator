document.addEventListener('DOMContentLoaded', () => {

    let displayKeys = document.querySelectorAll('.display-key');
    let displayField = document.querySelector('h1');
    let additionOperator = document.querySelector('.add');
    let evalOperator = document.querySelector('.equal-key');
    let number;
    let values;



    console.log(displayKeys);

    // display text as it's typed

    displayKeys.forEach(displayKey => {
        displayKey.addEventListener('click', () => {

            number = displayKey.textContent;
            displayField.textContent += number;

            values = +displayField.textContent;
            console.log(typeof(values));
            console.log(values);


        })
    })

})






