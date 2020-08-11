class Interface extends Elements {
    constructor() {

        super()

        this.data = new Data();
        this.btnGenerate.addEventListener('click', this.generate.bind(this)); // przycisk generujący hasło i odpalający mechanizm przetwarzania danych
        this.btnCopy.addEventListener('click', this.copyPassword.bind(this)); // przycisk kopiowania hasła 
        this.charBar.addEventListener('input', this.showCharBarValue.bind(this)) //wyzwala suwak aby przekazywał informacje do spanu jako informację dla użytkownika
        this.numberChecker.addEventListener('click', this.getNumberCheckerValue.bind(this)); //przełącza przycisk wyboru liczb
        this.charactersChecker.addEventListener('click', this.getSpecialCharCheckerValue.bind(this)); //przełącza przycisk wyboru znaków specjalnych



        //this.textArea.setAttribute('contenteditable', true)
        // możliwość edycji aby można było skopiować opcjonalnie na razie zostawiam
        this.isNumber = this.getNumberCheckerValue()
        this.isChar = this.getSpecialCharCheckerValue()




    } // tu byśmy chcieli zagnieździć działanie listenerów ale narazie nie idzie to najlepiej 
    generate() {

        this.data.startRandom(this.textArea, this.charBar, this.isNumber, this.isChar); // tutaj wiążemy dalej textArea żeby było przetwarzane poprzez przekazanie do tyłu argumentu o tak własnie się przekazuje argument, dopiero przy wywołaniu funkcji z tym argumentem //prawdopodobnie w wypadku tej klasy tak będzie trzeba robić cały czas 
        //this.data.chcekboxesChoice(this.charBar)

    }

    showCharBarValue() {

        this.numberOfLetters.textContent = this.charBar.value;


    }
    getNumberCheckerValue(checked) { // zastanawiam się czy nie przenieść to na stronę danych  aplikacji 
        // może trzeba zrobić domknięcie żeby to przekazać?

        if (this.numberChecker.checked == false) checked = false;
        else if (this.numberChecker.checked == true) checked = true;

        ;
        // trzeba drugą taką zrobić i przekazać dane do obiektu dane
        return this.isNumber = checked // tu chyba wyszło swego rodzaju domknięcie to co jest w argumencie zostaje przesunięte do innego zakresu do wywałania
    }

    getSpecialCharCheckerValue(checked) {

        if (this.charactersChecker.checked == false) checked = false;
        else if (this.charactersChecker.checked == true) checked = true;

        ;
        // trzeba drugą taką zrobić i przekazać dane do obiektu dane
        return this.isChar = checked // tu chyba wyszło swego rodzaju domknięcie to co jest w argumencie zostaje przesunięte do innego zakresu do wywałania

    }

    passwordRender(textArea, password) {


        textArea.textContent = password



    }


    copyPassword() {

        if (!this.textArea.textContent) alert('aby skopiować najpierw wygeneruj hasło');
        else {

            const range = document.createRange();
            range.selectNode(this.textArea);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            alert('hasło zostało skopiowane');
        }




    }
}