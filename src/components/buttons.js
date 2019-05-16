class Btn extends HTMLButtonElement {
    constructor() {
        super();
        this.className = 'btn'; 
    }

    get large() {
        return this.classList.contains('btn-lg');
    }

    set large(value) {
        if (value) {
            this.small = false;
            this.classList.add('btn-lg');
        } else {
            this.classList.remove('btn-lg');
        }
    }

    get small() {
        return this.classList.contains('btn-sm');
    }

    set small(value) {
        if (value) {
            this.large = false;
            this.classList.add('btn-sm');
        } else {
            this.classList.remove('btn-sm');
        }
    }

    get block() {
        return this.classList.contains('btn-block');
    }

    set block(value) {
        if (value) {
            this.classList.add('btn-block');
        } else {
            this.classList.remove('btn-block');
        }
    }
}

window.customElements.define('bs-button', Btn, {extends: 'button'});