const data = new Data();
const checkboxes = new Checkboxes();
const inputs = new Inputs();
const outputArea = new OutputArea();
const clipboard = new Clipboard();




const init = () => {
    const draw = new Draw(data.getNumbers(), data.getSepcialChars(), data.getWords(), inputs.getInputValue());
    draw.input(checkboxes.isNumber(), checkboxes.isSpecialChars())
    print(draw)

}
const print = (draw) => {
    const password = draw.output();
    outputArea.renderPassword(password);

}



document.querySelector('.generate').addEventListener('click', init);