
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