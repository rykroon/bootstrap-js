
class Card extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add('card');

        this.body = document.createElement('div');
        this.body.classList.add('card-body');
        this.appendChild(this.body);
    }

    get headerElement() {
        return this._header;
    }

    get header() {
        if (this._header) return this._header.textContent;
        return "";
    }

    set header(value) {
        if (value || typeof(value) == 'string') {
            if (! this._header) {
                this._header = document.createElement('div');
                this._header.classList.add('card-header');
                this.body.before(this._header);
            }

            if (typeof(value) == 'string') this._header.textContent = value;
        } else {
            if (this._header) {
                this._header.remove();
                this._header = null;
            }
        }
    }

    get titleElement() {
        return this._title;
    }

    get title() {
        if (this._title) return this._title.textContent;
        return "";
    }

    set title(value) {
        if (value) {
            if (! this._title) {
                this._title = document.createElement('h5');
                this._title.classList.add('card-title');
                this.body.insertBefore(this._title, this.body.firstElementChild);
            }

            this._title.textContent = value;
        } else {
            if (this._title) {
                this._title.remove();
                this._title = null;
            }
        }
    }

    get subtitleElement() {
        return this._subtitle;
    }

    get subtitle() {
        if (this._subtitle) return this._subtitle.textContent;
        return "";
    }

    set subtitle(value) {
        if (value) {
            if (! this._subtitle) {
                this._subtitle = document.createElement('h6');
                this._subtitle.classList.add('card-subtitle');
                
                if (this._title) {
                    this._title.after(this._subtitle);
                    
                } else {
                    this.body.insertBefore(this._subtitle, this.body.firstElementChild);
                }
            }

            this._subtitle.textContent = value;
        } else {
            if (this._subtitle) {
                this._subtitle.remove();
                this._subtitle = null;
            }
        }
    }

    get textElement() {
        return this._text;
    }

    get text() {
        if (this._text) return this._text.textContent;
        return "";
    }

    set text(value) {
        if (value) {
            if (! this._text) {
                this._text = document.createElement('p');
                this._text.classList.add('card-text');

                if (this._subtitle) {
                    this._subtitle.after(this._text);

                } else if (this._title) {
                    this._title.after(this._text);

                } else {
                    this.body.insertBefore(this._text, this.body.firstElementChild);
                }
            }

            this._text.textContent= value;
        } else {
            if (this._text) {
                this._text.remove();
                this._text = null;
            }
        }
    }

    get footerElement() {
        return this._footer;
    }

    get footer() {
        if (this._footer) return this._footer.textContent;
        return "";
    }

    set footer(value) {
        if (value || value === "") {
            if (! this._footer) {
                this._footer = document.createElement('div');
                this._footer.classList.add('card-footer');
                this.body.after(this._footer);
            }

            if (typeof(value) == 'string') this._footer.textContent = value;
        } else {
            if (this._footer) {
                this._footer.remove();
                this._footer = null;
            }
        }
    }

}

window.customElements.define('bs-card', Card, {extends: 'div'});