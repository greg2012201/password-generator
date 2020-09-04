class Data {
    constructor() {
        this._inputWords = ['coś', 'słOwo', 'pieRdoła', 'Alicja', 'dommieszkalny', 'poszedłemdokina', 'Wlazł', 'koteknapłotek', 'Szpital']; // trzeba rozdzielić te tablice i stworzyć pętle w pętli
        this._inputNumbers = ['1', '6', '1', '6', '0', '2', '8', '7', '9'];
        this._inputSpecialCharacters = ['!', '$', '?', '%', '#', '.', '+', '=', '@']; // na przyszłość warto tą bazę danych połączyć z bazą JSON

    }
    startRandom(textArea, charBar, isNumber, isChar) {

        let _input = []

        if (isNumber && isChar) {

            this.giveMeRandomNumber(_input);
            this.giveMeRandomCharacter(_input);

        } else if (isNumber && !isChar) this.giveMeRandomNumber(_input);
        else if (isChar && !isNumber) this.giveMeRandomCharacter(_input);

        for (let i = 0; i < this._inputWords.length; i++) {
            const index = Math.floor(Math.random() * this._inputWords.length);
            const output = this._inputWords[index];
            _input.push(output);
        }

        _input = _input.join('').split('').slice(0, charBar.value).join('');

        Interface.prototype.passwordRender(textArea, _input); // tutaj dostałem się przez prototyp, bardzo ciekawe rozwiązanie bo poszło wstecz  zastanawiam się czy na pewo jest to dobra praktyka działania
    }
    giveMeRandomNumber(_input) {

        const slicedNum = this._inputNumbers.slice(Math.floor(Math.random() * this._inputNumbers.length - 1), this._inputNumbers.length)
        const singleNubmber = slicedNum.shift();
        _input.unshift(singleNubmber); // jeszcze się pojawia problem z liczbami które są wiecej niż jednocyforwe

    }
    giveMeRandomCharacter(_input) {

        const slicedChar = this._inputSpecialCharacters.slice(Math.floor(Math.random() * this._inputSpecialCharacters.length - 1), this._inputSpecialCharacters.length)
        const singleChar = slicedChar.shift()
        _input.unshift(singleChar);

    }
}