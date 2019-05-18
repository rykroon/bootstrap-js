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
        return this._updateClass(value, 'btn-lg')
    }

    sm(value) {
        this.classList.remove('btn-lg');
        return this._updateClass(value, 'btn-sm')
    }

    block(value) {
        return this._updateClass(value, 'btn-block')
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

window.customElements.define('bs-button', Btn, {extends: 'button'});