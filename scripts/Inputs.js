class Inputs {
    constructor() {

        this.input = document.querySelector('.char-bar');
        this.numberOfLettersSpan = document.querySelector('.number-of-letters');
        this.input.addEventListener('input', this.showNumberOfLetters.bind(this))

    }

    getInputValue() {
        return this.input.value;
    }
    showNumberOfLetters() {
        this.numberOfLettersSpan.textContent = this.getInputValue();
    }
}