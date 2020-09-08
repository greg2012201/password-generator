class Draw {
    constructor(getNumbers, getSpecialChars, getWords, getInputValue) {
        this.getNumbers = getNumbers;
        this.getSpecialChars = getSpecialChars;
        this.getWords = getWords;
        this.getInputValue = getInputValue;

    }

    input(isNumber, isChar) { // może przejść przez to z isNumber i isChar


        let _input = [];
        this.calculationsWithNumbersAndSpecialChars(_input, isNumber, isChar)
    }


    calculationsWithNumbersAndSpecialChars(_input, isNumber, isChar) {

        if (isNumber && isChar) {
            this.getChosenElements(_input, this.getNumbers);
            this.getChosenElements(_input, this.getSpecialChars);
            // to trzeba przerobić w jedną funkcję na 2
        } else if (isNumber && !isChar) this.getChosenElements(_input, this.getNumbers);
        else if (isChar && !isNumber) this.getChosenElements(_input, this.getSpecialChars);


        this.calculationsWithWords(_input);

    }


    getChosenElements(_input, elements /* numbers, chars */ ) {

        const slicedElements = elements.slice(Math.floor(Math.random() * elements.length - 1), elements.length);
        const singleElement = slicedElements.shift();
        _input.unshift(singleElement);
        // osobna metoda musi wyjść w sensie sliced żeby nie kopiować kodu

    }



    calculationsWithWords(_input) {

        for (let i = 0; i < this.getWords.length; i++) {
            const index = Math.floor(Math.random() * this.getWords.length);
            const output = this.getWords[index];
            _input.push(output);
        }

        this.output(_input);
    }

    output(_input) {

        console.log(_input = _input.join('').split('').slice(0, this.getInputValue).join(''));


    }


}