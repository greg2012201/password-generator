class Checkboxes {

    constructor() {
        /*  this.numberChecker = document.querySelector('.numberChecker').addEventListener('click', this.isNumber.bind(this));  */



    }
    isNumber() {

        return document.querySelector('.numberChecker').checked

    }
    isSpecialChars() {
        return document.querySelector('.charsChecker').checked;

    }
}