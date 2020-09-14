class OutputArea {
    constructor() {

        this.textArea = document.querySelector('.text-area');


    }
    renderPassword(password) {
        this.textArea.textContent = password;

    }
}