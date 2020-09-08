class Inputs {
    constructor() {

        this.input = document.querySelector('.charBar');
        this.numberOfLettersSpan = document.querySelector('.numberOfLetters');
        this.input.addEventListener('input', this.showNumberOfLetters.bind(this))

    }

    getInputValue() {
        return this.input.value;
    }
    showNumberOfLetters() {
        this.numberOfLettersSpan.textContent = this.getInputValue();
    }
}