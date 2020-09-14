class Clipboard extends OutputArea {
    constructor() {
        super()
        this.copyBtn = document.querySelector('.copy').addEventListener('click', this.copyPasswordToClipboard.bind(this));


    }
    copyPasswordToClipboard() {

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