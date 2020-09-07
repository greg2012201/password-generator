const data = new Data();
const checkboxes = new Checkboxes();
const inputs = new Inputs();



const init = () => {

    console.log(checkboxes.isNumber());
    console.log(checkboxes.isSpecialChars());
    console.log(inputs.getInputValue());

}


document.querySelector('.generate').addEventListener('click', init);