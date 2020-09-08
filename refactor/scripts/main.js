const data = new Data();
const checkboxes = new Checkboxes();
const inputs = new Inputs();
const outputArea = new OutputArea();
const clipboard = new Clipboard();




const init = () => {
    const draw = new Draw(data.getNumbers(), data.getSepcialChars(), data.getWords(), inputs.getInputValue()); // zastanowić się nad jakąś nazwą zamienną za inputs
    draw.input(checkboxes.isNumber(), checkboxes.isSpecialChars())
    const password = draw.output();
    console.log(password);



}


document.querySelector('.generate').addEventListener('click', init);