class Draw {
    constructor(getNumbers, getSpecialChars, getWords, getInputValue) {
        this.getNumbers = getNumbers;
        this.getSpecialChars = getSpecialChars;
        this.getWords = getWords;
        this.getInputValue = getInputValue;

    }

    input(isNumber, isChar) {


        let _password = [];
        this.calculationsWithNumbersAndSpecialChars(_password, isNumber, isChar)
    }


    calculationsWithNumbersAndSpecialChars(_password, isNumber, isChar) {

        if (isNumber && isChar) {
            this.getChosenElements(_password, this.getNumbers);
            this.getChosenElements(_password, this.getSpecialChars);
        } else if (isNumber && !isChar) this.getChosenElements(_password, this.getNumbers);
        else if (isChar && !isNumber) this.getChosenElements(_password, this.getSpecialChars);

        this.calculationsWithWords(_password);

    }

    getChosenElements(_password, elements) {

        const slicedElements = elements.slice(Math.floor(Math.random() * elements.length - 1), elements.length);
        const singleElement = slicedElements.shift();
        _password.unshift(singleElement);


    }

    calculationsWithWords(_password) {

        for (let i = 0; i < this.getWords.length; i++) {
            const index = Math.floor(Math.random() * this.getWords.length);
            const output = this.getWords[index];
            _password.push(output);
        }

        this.password = _password;

    }

    output() {

        return this.password = this.password.join('').split('').slice(0, this.getInputValue).join('')


    }


}