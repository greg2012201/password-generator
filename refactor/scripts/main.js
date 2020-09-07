const data = new Data();
const checkboxes = new Checkboxes();
const inputs = new Inputs();
const outputArea = new OutputArea();
const clipboard = new Clipboard();




const init = () => {
    const draw = new Draw(data.getNumbers(), data.getSepcialChars(), data.getWords());
    draw.calculations(checkboxes.isNumber(), checkboxes.isSpecialChars())



}


document.querySelector('.generate').addEventListener('click', init);