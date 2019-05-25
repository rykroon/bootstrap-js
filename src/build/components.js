class Btn extends HTMLButtonElement {
    constructor(text) {
        super();
        this.className = 'btn'; 
        this.primary();
        this.text(text)
    }

    text(value) {
        this.textContent = value;
        return this;
    }

    lg(value) {
        this.classList.remove('btn-sm');
        this._toggleClass('btn-lg', value)
        return this;
    }

    sm(value) {
        this.classList.remove('btn-lg');
        this._toggleClass('btn-sm', value);
        return this;
    }

    block(value) {
        this._toggleClass('btn-block', value);
        return this;
    }

    primary()   {
        this._removePropertyColor('btn-outline');
        return this._primary('btn');
    }

    secondary() {
        this._removePropertyColor('btn-outline');
        return this._secondary('btn');
    }

    success() {
        this._removePropertyColor('btn-outline');
        return this._success('btn');
    }

    info() {
        this._removePropertyColor('btn-outline');
        return this._info('btn');
    }

    warning() {
        this._removePropertyColor('btn-outline');
        return this._warning('btn');
    }

    danger() {
        this._removePropertyColor('btn-outline');
        return this._danger('btn');
    }

    light() {
        this._removePropertyColor('btn-outline');
        return this._light('btn');
    }

    dark() {
        this._removePropertyColor('btn-outline');
        return this._dark('btn');
    }

    outlinePrimary() {
        this._removePropertyColor('btn');
        return this._primary('btn-outline');
    }

    outlineSecondary() {
        this._removePropertyColor('btn');
        return this._secondary('btn-outline');
    }

    outlineSuccess() {
        this._removePropertyColor('btn');
        return this._success('btn-outline');
    }

    outlineInfo() {
        this._removePropertyColor('btn');
        return this._info('btn-outline');
    }

    outlineWarning() {
        this._removePropertyColor('btn');
        return this._warning('btn-outline');
    }

    outlineDanger() {
        this._removePropertyColor('btn');
        return this._danger('btn-outline');
    }

    outlineLight() {
        this._removePropertyColor('btn');
        return this._light('btn-outline');
    }

    outlineDark() {
        this._removePropertyColor('btn');
        return this._dark('btn-outline');
    }

    disable() {
        this.disabled = true;
        return this;
    }

    enable() {
        this.disabled = false;
        return this;
    }
}

window.customElements.define('bs-button', Btn, {extends: 'button'});class Card extends HTMLDivElement {
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
class Nav extends HTMLUListElement {
    constructor() {
        super();
        this.classList.add('nav');
    }

    newItem(text, href) {
        let navItem = new NavItem(text, href);
        this.appendChild(navItem);
        return navItem;
    }

    tabs(value) {
        this._toggleClass('nav-tabs', value);
        return this;
    }

    pills(value) {
        this._toggleClass('nav-pills', value);
        return this;
    }

    fill(value) {
        this._toggleClass('nav-fill', value);
        return this;
    }

    justified(value) {
        this._toggleClass('nav-justified', value);
        return this;
    }

}


class NavItem extends HTMLLIElement {
    constructor(text, href) {
        super();
        this.classList.add('nav-item');
        this.link = new NavLink(text, href);
        this.appendChild(this.link);
    }

    newItemBefore(text, href) {
        let navItem = new NavItem(text, href);
        this.before(navItem);
        return navItem;
    }

    newItemAfter(text, href) {
        let navItem = new NavItem(text, href);
        this.after(navItem);
        return navItem;
    }

    active(value) {
        this.link._toggleClass('active', value);
        return this;
    }

    disabled(value) {
        this.link._toggleClass('disabled', value);
        return this;
    }
}


class NavLink extends HTMLAnchorElement {
    constructor(text, href) {
        super();
        this.classList.add('nav-link');

        if (text) this.textContent = text;
        if (href) {
            this.href = href;
        } else {
            this.href = '#';
        }
    }
}


window.customElements.define('bs-nav', Nav, {extends: 'ul'});
window.customElements.define('bs-nav-item', NavItem, {extends: 'li'});
window.customElements.define('bs-nav-link', NavLink, {extends: 'a'});