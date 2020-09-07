const data = new Data();
const checkboxes = new Checkboxes();
const inputs = new Inputs();
const outputArea = new OutputArea();
const clipboard = new Clipboard();
const draw = new Draw();



const init = () => {

    console.log(checkboxes.isNumber());
    console.log(checkboxes.isSpecialChars());
    console.log(inputs.getInputValue());
    console.log(data.getSepcialCharacters());

}


document.querySelector('.generate').addEventListener('click', init);