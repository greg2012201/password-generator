const data = new Data();
const checkboxes = new Checkboxes();



const init = () => {

    console.log(checkboxes.isNumber());
    console.log(checkboxes.isSpecialChars());
}


document.querySelector('.generate').addEventListener('click', init);