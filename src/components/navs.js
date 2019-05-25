
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
        return this._updateClass(value, 'nav-tabs');
    }

    pills(value) {
        return this._updateClass(value, 'nav-pills');
    }

    fill(value) {
        return this._updateClass(value, 'nav-fill');
    }

    justified(value) {
        return this._updateClass(value, 'nav-justified');
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
        this.link._updateClass(value, 'active');
        return this;
    }

    disabled(value) {
        this.link._updateClass(value, 'disabled');
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