class Draw {
    constructor(getNumbers, getSpecialChars, getWords) {
        this.getNumbers = getNumbers;
        this.getSpecialChars = getSpecialChars;
        this.getWords = getWords;
        /*  let _input = []; */
    }

    calculations(isNumber, isChar) {
        let _input = [];
        if (isNumber && isChar) {
            this.getChosenElements(_input, this.getNumbers);
            this.getChosenElements(_input, this.getSpecialChars);
            // to trzeba przerobić w jedną funkcję na 2
        } else if (isNumber && !isChar) this.getChosenElements(_input, getNumbers);
        else if (isChar && !isNumber) this.getChosenElements(_input, this.getSpecialChars);




    }
    getChosenElements(_input, elements /* numbers, chars */ ) {

        const slicedElements = elements.slice(Math.floor(Math.random() * elements.length - 1), elements.length);
        const singleElement = slicedElements.shift();
        _input.ushift(singleElement);
        // osobna metoda musi wyjść w sensie sliced żeby nie kopiować kodu

    }


}