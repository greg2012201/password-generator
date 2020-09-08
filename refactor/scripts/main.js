const data = new Data();
const checkboxes = new Checkboxes();
const inputs = new Inputs(); // zastanawiam się nad nazwą tej klasy czy nie zmienić na jakąś bardziej poprawną semantycznie
const outputArea = new OutputArea();
const clipboard = new Clipboard();




const init = () => {
    const draw = new Draw(data.getNumbers(), data.getSepcialChars(), data.getWords(), inputs.getInputValue()); // zastanowić się nad jakąś nazwą zamienną za inputs
    draw.input(checkboxes.isNumber(), checkboxes.isSpecialChars())
    print()

}
const print = () => {
    const password = draw.output();
    outputArea.renderPassword(password);

}


document.querySelector('.generate').addEventListener('click', init);